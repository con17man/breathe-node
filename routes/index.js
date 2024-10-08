const express = require('express');
const router = express.Router();
const airParamsController = require('../controllers/airParamsController');
const airParamsLimitsController = require('../controllers/airParamsLimitsController');
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
router.get('/api/sensor/last', catchErrors(airParamsController.getLastAirParams));
router.get('/api/sensor/type/:sensorType', catchErrors(airParamsController.getSensorTypeData));

router.get('/api/sensor/limits', catchErrors(airParamsLimitsController.getLimits));
router.post('/api/sensor/limits', catchErrors(airParamsLimitsController.updateLimits));

module.exports = router;