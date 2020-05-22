const router            = require('express').Router();
const stashController    = require('./../../../controllers/stashController');

router.route('/inv').get(stashController.getStashInv);
router.route('/').get(stashController.getStashTabs);
router.route('/tab/:tabIndex').get(stashController.getStashTab);
router.route('/tab').get(stashController.getStashTab);

module.exports = router;
