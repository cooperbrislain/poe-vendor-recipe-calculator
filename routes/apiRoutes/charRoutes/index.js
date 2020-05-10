const router            = require('express').Router();

router.route('/userRoutes/:username/chars').get(accountController.getChars);

module.exports = router;
