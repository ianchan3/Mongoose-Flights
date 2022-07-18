var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights (index functionality)
router.get('/', flightsCtrl.index);
// GET /flights/new (new functionality)
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionality)
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);

module.exports = router;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });