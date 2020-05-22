const router            = require('express').Router();
const userController    = require('./../../../controllers/userController');

router.route('/chars').get(userController.getChars);
router.route('/stash').get(userController.getStash);
router.route('/:accountName').get(userController.getUser);
router.route('/:accountName/chars').get(userController.getChars);
router.route('/:accountName/stash').get(userController.getStash);

module.exports = router;
