const axios = require('axios');

const utils = require('../utils/index');

const getGoogleApiKey = async (address) => {

    try {

        const geocodeBaseUri = utils.urlUtils.getUrl("geocode_base_url");
        const key = await utils.dbUtils.getGoogleApiKey();

        const encodedAddress = encodeURI(address);

        const format = "json";

        const url = `${geocodeBaseUri}/${format}?address=${encodedAddress}&key=${key}`;

        axios.get(url)
        .then(response => {
            console.log(JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    getGoogleApiKey
}