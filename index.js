const express = require('express');
const exphndlrs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express
const app = express();

const db = require('./database/database');

const port = process.env.PORT || 5000;

app.use('/shop', require('./router/shopRouter'));


db.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Error connecting to the database:", error));


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})