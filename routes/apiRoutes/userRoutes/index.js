const router            = require('express').Router();
const userController    = require('./../../../controllers/userController');

router.route('/:accountName').get(userController.getUser);
router.route('/:accountName/chars').get(userController.getChars);
router.route('/chars').get(userController.getChars);

module.exports = router;
