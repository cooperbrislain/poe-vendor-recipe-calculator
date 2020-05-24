const router            = require('express').Router();
const invController    = require('./../../../controllers/invController');

router.route('/').get(invController.getAllInv);

module.exports = router;
