const mongoose = require('mongoose');

const Customerschema = new mongoose.Schema({
    CompanyName: { type: String, required: true, },
    ContactName: { type: String, required: true, },
    ContactTille: { type: String, required: true, },
    Address: { type: String, required: true, },
    City: { type: String, required: true, },
    Region: { type: String, required: true, },
    PostalCode: { type: String, required: true, },
    Country: { type: String, required: true, },
    Phone: { type: Number, required: true, },
    Fax: { type: String, required: true, },
})
const Customers = mongoose.model('Customers', Customerschema);
module.exports = { Customers };