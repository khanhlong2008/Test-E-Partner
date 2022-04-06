const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const Customer = require('./Routers');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use('/customers', Customer)
mongoose
    .connect('mongodb://localhost:27017/Customers',
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Connected database from mongodb.');
        app.listen(5000, () => {
            console.log(`Server is running on port 5000`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });