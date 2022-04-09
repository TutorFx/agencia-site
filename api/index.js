const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/auth')(app);
require('./controllers/blog')(app);
require('./controllers/docs')(app);
require('./controllers/project')(app);
require('./controllers/user')(app);

export default {
    path: '/api',
    handler: app
}