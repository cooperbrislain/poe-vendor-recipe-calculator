const express = require('express');
const router = express.Router();
const app = express();

const apiRoutes = require('./apiRoutes');
// const passportService   = require('./../services/passport');
// const passport          = require('passport');

router.use('/api', apiRoutes);

module.exports = router;

app.listen(3001, () => console.log(`Server started on PORT: 3001`));
