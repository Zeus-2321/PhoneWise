const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const cron = require('node-cron');
const MyModel = require('./models/Brand');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get('/brands', async (req, res) => {
    try {
        const brands = await MyModel.find({});
        res.json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

const getData = async () => {
    try {
        const response = await axios.get('http://phone-specs-api.azharimm.dev/brands');
        const { data } = response.data;

        const newData = [];

        // Loop through each brand in the response data
        for (let i = 0; i < data.length; i++) {
            const brand = data[i];
            const existingBrand = await MyModel.findOne({ brand_id: brand.brand_id });

            // Check if the brand already exists in the database
            if (!existingBrand) {
                // If the brand does not exist, add it to the newData array
                newData.push({
                    brand_name: brand.brand_name,
                    brand_slug: brand.brand_slug,
                    device_count: brand.device_count
                });
            }
        }

        // Add the new brands to the database
        if (newData.length > 0) {
            await MyModel.insertMany(newData);
        }

    } catch (error) {
        console.error(error);
    }
};

// Run the API request every 24 hours
cron.schedule('0 0 * * *', async () => {
    console.log('Running cron job...');
    await getData();
});




