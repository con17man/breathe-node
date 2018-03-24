const express = require('express');
const router = express.Router();
const airParamsController = require('../controllers/airParamsController');
const { catchErrors } = require('../utils/errorHandlers');

router.get('/', (req, res) => {
    res.send('Hey! It works!');
});

router.post('/rpi/:temperature/:humidity/:presure/:gas_LPG/:gas_CO/:gas_smoke', catchErrors(airParamsController.addAirParams));

module.exports = router;