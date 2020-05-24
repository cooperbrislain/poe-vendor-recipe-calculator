const router = require('express').Router();
const charController    = require('./../../../controllers/charController');

router.route('/:character').get(charController.getChar);
router.route('/:character/inv').get(charController.getCharInv);
router.route('/inv').get(charController.getCharInv);

module.exports = router;
