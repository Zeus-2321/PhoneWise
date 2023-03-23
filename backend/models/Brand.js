const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_id: Number,
    brand_name: String,
    brand_slug: String,
    device_count: Number,
    detail: String
});

module.exports = mongoose.model('Brand', brandSchema);

