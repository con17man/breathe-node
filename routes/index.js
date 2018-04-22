const express = require('express');
const router = express.Router();
const airParamsController = require('../controllers/airParamsController');
const userController = require('../controllers/userController');
const { catchErrors } = require('../utils/errorHandlers');

router.get('/', (req, res) => {
    res.send('Hey! It works!');
});

router.get('/rpi/:temperature/:humidity/:presure/:gas_LPG/:gas_CO/:gas_smoke', catchErrors(airParamsController.addAirParams));

router.get('/api/getLastMeasurements', catchErrors(airParamsController.getLastAirParams));
router.post('/api/login', catchErrors(userController.loginUser));

module.exports = router;