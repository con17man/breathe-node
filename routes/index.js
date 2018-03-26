const express = require('express');
const router = express.Router();
const airParamsController = require('../controllers/airParamsController');
const { catchErrors } = require('../utils/errorHandlers');

router.get('/', (req, res) => {
    res.send('Hey! It works!');
});

router.get('/rpi/:temperature/:humidity/:presure/:gas_LPG/:gas_CO/:gas_smoke', catchErrors(airParamsController.addAirParams));
router.get('/api/getLastMeasurements', catchErrors(airParamsController.getLastAirParams));

module.exports = router;