const router = require('express-promise-router')()

const customersController = require('../controllers')


router.route('/')
    .get(customersController.getCustomers)
    .post(customersController.postCustomers)

module.exports = router