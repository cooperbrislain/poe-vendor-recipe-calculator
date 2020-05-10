require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express  = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const routes = require('./routes');
app.use(routes);

app.listen(3001, () => console.log(`Server started on PORT: 3001`));

