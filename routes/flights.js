var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights (index functionality)
router.get('/', flightsCtrl.index);
// GET /flights/new (new functionality)
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionality)
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);

module.exports = router;

