const url = require('../config/url.json');

const getUrl = (key) => {
    return url[key];
} 

module.exports = {
    getUrl
}