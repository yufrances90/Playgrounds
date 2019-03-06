const message = require('../config/message.json')

const getMessage = (key) => {
    return message.messages[key];
}

module.exports = {
    getMessage
}