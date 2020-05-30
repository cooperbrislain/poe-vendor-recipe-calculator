const router = require('express').Router();
const charController = require('./../../../controllers/charController');

router.route('/:charName/inv').get(charController.getCharInv);
router.route('/:charName').get(charController.getChar);
router.route('/inv').get(charController.getCharInv);
router.route('/').get(charController.getChars);

module.exports = router;
