const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name: { type: String, index: true },
    brand_slug: { type: String, index: { unique: true } },
    device_count: Number
});

module.exports = mongoose.model('Brand', brandSchema);
