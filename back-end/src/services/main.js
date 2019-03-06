const utils = require('../utils/index');

const getGoogleApiKey = async () => {

    try {
        const result = await utils.dbUtils.getGoogleApiKey();
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    getGoogleApiKey
}