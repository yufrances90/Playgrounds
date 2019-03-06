const MongoClient = require('mongodb').MongoClient;

const config = require('../config/config.json');
const msg = require('../config/message.json');

const dbConfig = config["mongodb"];

const port = dbConfig.port;
const dbName = dbConfig.dbName;

const connectDatabase = () => {

    return new Promise((resolve, reject) => {
        MongoClient.connect(
            `mongodb://localhost:${port}`, 
            (err, client) => {
    
                if(err) {

                    console.log(`Error[${msg.errors['db_connection'].uuid}]`, err);

                    reject(err);
                }

                const dbObject = {
                    client,
                    database: client.db(dbName)
                }
                
                resolve(dbObject);
        });
    });
}

module.exports = {
    connectDatabase
}
