const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

const log = require('debug')('app')

const app = express();
const port = '3030';

app.use(cors());


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/api', routes);


app
  .listen(port, () => {
    log(`Server is running on port ${port}.`);
  })
  .on('error', e => {
    log(e);
  });

