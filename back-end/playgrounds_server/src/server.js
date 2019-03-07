const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

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

app.get('/testingGoogleGeolocationAPI', (req, res) => {

    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    
    services.fetchCoordinatesByAddress(address).then(result => {
        res.status(200).send(JSON.stringify(result));
    }).catch(err => {
        res.status(500).send(JSON.stringify(err));
    });
});

app.get('/testingOpenWeatherAPI', (req, res) => {

    const coords = {
        lon: 139,
        lat: 35
    };

    const params = {
        ...coords,
        start: 1551398400,
        cnt: 24,
        end: undefined
    };

    services.fetchHistoricalWeatherData(params);

    services.fetchCurrentWeatherData(coords);

    res.send(utils.msgUtils.getMessage("open_weather_api_testing"));
});

app.get('/geocodingByAddress', (req, res) => {

    const { address } = req.query;

    services.fetchCoordinatesByAddress(address).then(result => {
        res.status(200).send(JSON.stringify(result));
    }).catch(err => {
        res.status(500).send(JSON.stringify(err));
    });
});

app.get('/googleKey', (req, res) => {

    services.getGoogleApiKey().then(result => {
        res.status(200).send(JSON.stringify(result));
    }).catch(err => {
        res.status(500).send(JSON.stringify(err));
    })
});

app.get('/create', (req, res) => {

    services.createNewPlayground(req.query).then(result => {
        res.status(200).send(JSON.stringify(result));
    }).catch(err => {
        res.status(500).send(JSON.stringify(err));
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));