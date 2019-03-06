const MongoClient = require('mongodb').MongoClient;

const config = require('../config/config.json');
const msg = require('../config/message.json');

const dbConfig = config["mongodb"];

const port = dbConfig.port;
const dbName = dbConfig.dbName;

const connectDatabase = () => {

    MongoClient.connect(
        `mongodb://localhost:${port}`, 
        (err, client) => {

            if(err) {
                console.log(`Error[${msg.errors['db_connection'].uuid}]`, err);
            }

            const db = client.db(dbName);
    });
}

module.exports = {
    connectDatabase
}
