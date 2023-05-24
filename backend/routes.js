const express = require('express');
const router = express.Router();
const Phone = require('./models/Phone');
const Brand = require('./models/Brand')

// Get all brands
router.get('/brands', async (req, res) => {
    try {
        const brands = await Brand.find({});
        res.json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


// Get all phones
router.get('/phones', async (req, res) => {
    try {
        const phones = await Phone.find();
        res.json(phones);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all phones of a specific brand
router.get('/brands/:brand', async (req, res) => {
    try {
        const phones = await Phone.find({ brand: req.params.brand });
        res.json(phones);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific phone by slug
router.get('/phones/:slug', getPhoneBySlug, (req, res) => {
    res.json(res.phone);
});

// Middleware function to get a phone by slug
async function getPhoneBySlug(req, res, next) {
    try {
        const phone = await Phone.findOne({ slug: req.params.slug });
        if (phone == null) {
            return res.status(404).json({ message: 'Cannot find phone' });
        }
        res.phone = phone;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Define a search endpoint
router.get('/search', async (req, res) => {
    const query = req.query.q; // Get the search query from the request query parameters

    try {
        // Search the smartphone collection based on the query
        const results = await Phone.find({
            $or: [
                { brand: { $regex: query, $options: 'i' } },
                { phone_name: { $regex: query, $options: 'i' } },
            ],
        });

        res.json(results); // Send the search results as JSON response
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;