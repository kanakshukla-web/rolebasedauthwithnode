const appInsights = require('applicationinsights');
appInsights.setup("InstrumentationKey=41c532d4-bf37-4574-8c20-efd550d3c85f;IngestionEndpoint=https://southeastasia-1.in.applicationinsights.azure.com/;LiveEndpoint=https://southeastasia.livediagnostics.monitor.azure.com/")
appInsights.start();

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.get('/', (req, res) => {
    res.send("Welcome Kanak !! to the Node Auth Services !!")
})
app.get('/home', (req, res) => {
    res.send("Welcome to Home Route!!")
})

app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 4000;//process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});