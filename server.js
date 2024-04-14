// the main file for the web server
// A web server creates responses in response to requests from the browser
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

// configure it to use the Handlebars template engine and
// work with template files in the views directory
app.set('views', path.join(__dirname, 'views'))

// views are web pages, hbs is handlebars
app.set('view engine', 'hbs')

app.use('/', indexRouter);

let server = app.listen(3000)