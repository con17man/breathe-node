const express = require('express');
const router = express.Router();
const airParamsController = require('../controllers/airParamsController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../utils/errorHandlers');

router.get('/', (req, res) => {
    res.send('Hey! It works!');
});

// Raspberry Pi APIs
router.get('/rpi/:temperature/:humidity/:presure/:gas_LPG/:gas_CO/:gas_smoke', catchErrors(airParamsController.addAirParams));

// Auth APIs
router.post('/api/login', catchErrors(userController.loginUser));
router.post('/api/register', catchErrors(userController.registerUser));

// Fetch data APIs
router.get('/api/getLastMeasurements', catchErrors(airParamsController.getLastAirParams));

module.exports = router;