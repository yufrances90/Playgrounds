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

app.get('/testingGoogleGeolocationAPI', (req, res) => {

    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    
    services.fetchCoordinatesByAddress(address);

    res.send(utils.msgUtils.getMessage("google_geolocation_api_testing"));
});

app.get('/testingOpenWeatherAPI', (req, res) => {

    const coords = {
        lon: 139,
        lat: 35
    }

    services.fetchCurrentWeatherData(coords);

    res.send(utils.msgUtils.getMessage("open_weather_api_testing"));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));