const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    slug: String,
    brand: String,
    phone_name: String,
    image: String,
    thumbnail: String,
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
