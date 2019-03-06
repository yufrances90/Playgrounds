const config = require('../config/config.json');

const serverConfig = config.server;

const getServerPort = () => {
    return serverConfig.port
}

module.exports = {
    getServerPort
}