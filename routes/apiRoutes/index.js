const router            = require('express').Router();

const userController = require('./../../controllers/userController');

const userRoutes = require('./userRoutes');
const charRoutes = require('./charRoutes');
const stashRoutes = require('./stashRoutes');

router.use('/user', userRoutes);
router.use('/char', charRoutes);
router.use('/stash', stashRoutes);

module.exports = router;
