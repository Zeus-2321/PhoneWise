const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name: String,
    brand_slug: String,
    device_count: Number
});

module.exports = mongoose.model('Brand', brandSchema);
