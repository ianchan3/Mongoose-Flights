var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /movies (index functionality)
router.get('/', flightsCtrl.index);
// GET /movies/new (new functionality)
router.get('/new', flightsCtrl.new);

module.exports = router;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });