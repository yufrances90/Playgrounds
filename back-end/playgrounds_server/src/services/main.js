const axios = require('axios');

const utils = require('../utils/index');

const fetchCoordinatesByAddress = async (address) => {

    const geocodeBaseUri = utils.urlUtils.getUrl("geocode_base_url");
    const key = await utils.dbUtils.getApiKey("google_api_key");

    const encodedAddress = encodeURI(address);

    const format = "json";

    const url = `${geocodeBaseUri}/${format}?address=${encodedAddress}&key=${key}`;

    try {

        const response = await axios.get(url);

        return response.data;
    } catch(err) {
        throw err
    }
}

const fetchCurrentWeatherData = async ({lon, lat}) => {

    const currentWeatherBaseUri = utils.urlUtils.getUrl("open_weather_base_url.current");
    const key = await utils.dbUtils.getApiKey("open_weather_api_key");
    
    const url = `${currentWeatherBaseUri}?lat=${lat}&lon=${lon}&appid=${key}`;

    axios.get(url)
    .then(response => {
        console.log(JSON.stringify(response.data));
    })
    .catch(error => {
        console.log(error);
    });
}

const fetchHistoricalWeatherData = async ({ lon, lat, start, cnt=undefined, end=undefined }) => {

    const historicalWeatherBaseUri = utils.urlUtils.getUrl("open_weather_base_url.historical");
    const key = await utils.dbUtils.getApiKey("open_weather_api_key");

    let url = `${historicalWeatherBaseUri}?lat=${lat}&lon=${lon}&type=hour&start=${start}`;

    url = (cnt === undefined)? url + `&end=${end}` : url + `&cnt=${cnt}`;

    url += `&appid=${key}`;

    axios.get(url)
    .then(response => {
        console.log(JSON.stringify(response.data));
    })
    .catch(error => {
        console.log(error);
    });
}

const getGoogleApiKey = async () => {

    try {

        const google_api_key = await utils.dbUtils.getApiKey("google_api_key");

        return {
            google_api_key
        };
    } catch(err) {
        throw err;
    }
}

const createNewPlayground = async ({ address, name }) => {

    try {
        
        const response = await fetchCoordinatesByAddress(address);

        const coords = response.results[0].geometry.location;

        console.log(coords);
    } catch(err) {
        throw err;
    }
}

module.exports = {
    fetchCoordinatesByAddress,
    fetchCurrentWeatherData,
    fetchHistoricalWeatherData,
    getGoogleApiKey,
    createNewPlayground
}