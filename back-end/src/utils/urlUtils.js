const url = require('../config/url.json');

const getUrl = (key) => {

    const keys = key.split(".");

    let result = url;

    keys.forEach(element => {
        result = result[element]
    });
    
    return result;
} 

module.exports = {
    getUrl
}