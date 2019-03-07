const MongoClient = require('mongodb').MongoClient;

const config = require('../config/config.json');
const msg = require('../config/message.json');

const dbConfig = config["mongodb"];

const port = dbConfig.port;
const dbName = dbConfig.dbName;

const configCollectionName = dbConfig.collections.config;
const playgroundCollectionName = dbConfig.collections.playgrounds;

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

const getApiKey = async (key) => {

    const dbObj = await connectDatabase();
    const configCollection = dbObj.database.collection(configCollectionName);

    const doc = await configCollection.findOne();

    dbObj.client.close();

    return doc[key];
}

const saveNewPlayground = async (newPlayground) => {

    const dbObj = await connectDatabase();
    const playgroundCollection = dbObj.database.collection(playgroundCollectionName);

    playgroundCollection.insertOne(newPlayground, (err, res) => {

        if(err) throw err;

        dbObj.client.close();
    });
}

const getAllPlaygrounds = async () => {

    try {

        const dbObj = await connectDatabase();
        const playgroundCollection = dbObj.database.collection(playgroundCollectionName);

        const response = await playgroundCollection.find({}).toArray();

        return response;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    connectDatabase,
    getApiKey,
    saveNewPlayground,
    getAllPlaygrounds
}
