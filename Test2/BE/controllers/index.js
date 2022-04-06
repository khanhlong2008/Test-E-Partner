const { Customers } = require('../models')



const postCustomers = async (req, res, next) => {
    console.log(req.body)
    try {
        const newCustomer = new Customers(req.body);
        await newCustomer.save();
        return res.status(201).json({ customers: newCustomer });
    } catch (err) {
        res.status(500).json({ Customers });
    }
}

const getCustomers = async (req, res, next) => {
    const customers = await Customers.find({});
    return res.status(200).json({ customers });
}

module.exports = { getCustomers, postCustomers }