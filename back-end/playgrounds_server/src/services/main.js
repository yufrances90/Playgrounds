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

const processWeatherData = async (data) => {

    let weatherData = {};

    data.forEach(element => {

        const date = utils.helperUtils.computeDateFromUnixTimestamp(element.dt);

        const month = date.getMonth() + 1;
        const day = date.getDate();

        const monthString = (month <= 9)? `0${month}` : `${month}`;
        const dayString = (day <= 9)? `0${day}`:`${day}`;

        const dateString = `${monthString}-${dayString}`;

        if (weatherData.hasOwnProperty(dateString)) {
            weatherData[dateString].data.push(element);
        } else {

            weatherData[dateString] = {};

            weatherData[dateString].data = [element];
        }
    });

    return weatherData;
}

const processAndFetchHistoricalData = async ({ id, coord }) => {

    coord = {
        lng: 139,
        lat: 35
    };

    const startDate = new Date();
    const endDate = new Date();

    startDate.setDate(startDate.getDate() - 6);

    const start = utils.helperUtils.computeUnixTimestamp(startDate);
    const end = utils.helperUtils.computeUnixTimestamp(endDate);

    const { lng, lat } = coord;

    const params = {
        lon: lng,
        lat,
        start,
        end
    };

    try {

        const data = await fetchHistoricalWeatherData(params);

        const weatherData = await processWeatherData(data, startDate, endDate, id);

        return weatherData;
    } catch(err) {
        throw err;
    }
}

const fetchHistoricalWeatherData = async ({ lon, lat, start, cnt=undefined, end=undefined }) => {

    try {

        const historicalWeatherBaseUri = utils.urlUtils.getUrl("open_weather_base_url.historical");
        const key = await utils.dbUtils.getApiKey("open_weather_api_key");

        let url = `${historicalWeatherBaseUri}?lat=${lat}&lon=${lon}&type=hour&start=${start}`;

        url = (cnt === undefined)? url + `&end=${end}` : url + `&cnt=${cnt}`;

        url += `&appid=${key}`;

        const response = await axios.get(url);

        return response.data.list;
    } catch(err) {
        throw err;
    }
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

        const newPlayground = {
            name,
            address,
            coords
        };

        await utils.dbUtils.saveNewPlayground(newPlayground);

        return coords;
    } catch(err) {
        throw err;
    }
}

const getAllPlaygrounds = async () => {

    try {

        const response = await utils.dbUtils.getAllPlaygrounds();

        return response;
    } catch(err) {
        throw err;
    }
}

const getPlaygroundById = async (id) => {

    try {

        const response = await utils.dbUtils.getPlaygroundById(id);

        return response;
    } catch(err) {
        throw err;
    }
}

const updatePlaygroundById = async (reqObj, id) => {

    try {

        const { address, type } = reqObj;

        let coords;

        /**
         * type
         *  0: name change
         *  1: address change
         */
        if (type === 1) {

            const response = await fetchCoordinatesByAddress(address);

            coords = response.results[0].geometry.location;
        }

        utils.dbUtils.updatePlaygroundById({
            ...reqObj,
            coords,
            id
        });

    } catch (err) {
        throw err;
    }
}

const deletePlaygroundById = async (id) => {

    try {

        const response = await utils.dbUtils.deletePlaygroundById(id);

        return response;
    } catch(err) {
        throw err;
    }
}

const getClosestPlaygroundsByCoord = async (location) => {

    try {

        const playgrounds = await utils.dbUtils.getAllPlaygrounds();

        return playgrounds.filter(playground => {

            const { coords } = playground;

            const dist = utils.helperUtils.computeDistBtw2Coords(location, coords);

            console.log(dist, playground);

            return Math.abs(dist) < 50;
        })
        .sort((playground1, playground2) => {

            const coords1 = playground1.coords;
            const coords2 = playground2.coords;

            const dist1 = utils.helperUtils.computeDistBtw2Coords(location, coords1);
            const dist2 = utils.helperUtils.computeDistBtw2Coords(location, coords2);

            return (dist1 > dist2);
        });
    } catch(err) {
        throw err;
    }
}

module.exports = {
    fetchCoordinatesByAddress,
    fetchCurrentWeatherData,
    fetchHistoricalWeatherData,
    getGoogleApiKey,
    createNewPlayground,
    getAllPlaygrounds,
    getPlaygroundById,
    updatePlaygroundById,
    deletePlaygroundById,
    getClosestPlaygroundsByCoord,
    processAndFetchHistoricalData
}