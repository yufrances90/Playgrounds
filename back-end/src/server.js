const express = require('express');
const app = express()

const utils = require('./utils/index');
const services = require('./services/main');

const port = utils.configUtils.getServerPort();

app.get('/', (req, res) => res.send(utils.msgUtils.getMessage("hello_world")));

app.get('/testingDb', (req, res) => {

    utils.dbUtils.connectDatabase()
    .then(dbObject => {

        console.log(dbObject.database);

        dbObject.client.close();
    })
    .catch(err => {
        console.dir(err);
    });

    res.send(utils.msgUtils.getMessage("db_testing"));
});

app.get('/testingGetAPIKey', (req, res) => {

    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    
    services.getGoogleApiKey(address);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));