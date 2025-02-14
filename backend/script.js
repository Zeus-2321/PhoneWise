const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
const cron = require("node-cron");
const phonesRouter = require("./routes");
const Brand = require("./models/Brand");

const app = express();
app.use(cors());
app.use("/api", phonesRouter);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const getData = async () => {
  try {
    const response = await axios.get(
      "https://phone-specs-api.vercel.app/brands"
    );
    const { data } = response.data;

    const newData = [];
    const updatePromises = [];

    // Loop through each brand in the response data
    for (let i = 0; i < data.length; i++) {
      const brand = data[i];
      const existingBrand = await Brand.findOne({
        brand_name: brand.brand_name,
      });

      if (existingBrand) {
        // If the brand exists, update its device count
        updatePromises.push(
          Brand.updateOne(
            { brand_name: brand.brand_name },
            { $set: { device_count: brand.device_count } }
          )
        );
      } else {
        // If the brand does not exist, prepare it to be added
        newData.push({
          brand_name: brand.brand_name,
          brand_slug: brand.brand_slug,
          device_count: brand.device_count,
        });
      }
    }

    // Add the new brands to the database
    if (newData.length > 0) {
      await Brand.insertMany(newData);
    }

    // Update existing brands in the database
    if (updatePromises.length > 0) {
      await Promise.all(updatePromises);
    }

    console.log("Data processing complete!");
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

app.get("/update", async (req, res) => {
  try {
    console.log("Started updating...");
    await getData();
    res.status(200).send("Data successfully updated!");
  } catch (error) {
    console.error("Error in update endpoint:", error);
    res.status(500).send("Failed to update data.");
  }
});

// Run the API request every 24 hours
cron.schedule("0 0 * * *", async () => {
  console.log("Running cron job...");
  await getData();
});
