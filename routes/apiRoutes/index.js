const router = require('express').Router();

const charController    = require('./../../controllers/charController');

const userRoutes = require('./userRoutes');
const charRoutes = require('./charRoutes');
const stashRoutes = require('./stashRoutes');
const invRoutes = require('./invRoutes');

router.use('/user', userRoutes);
router.use('/char', charRoutes);
router.use('/chars', charRoutes);
router.use('/stash', stashRoutes);
router.use('/inv', invRoutes);

router.route('/skill-tree').get(charController.getSkillTree);

module.exports = router;
