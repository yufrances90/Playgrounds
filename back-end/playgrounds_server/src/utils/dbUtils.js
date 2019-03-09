const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const config = require('../config/config.json');
const msg = require('../config/message.json');

const dbConfig = config["mongodb"];

const port = dbConfig.port;
const dbName = dbConfig.dbName;

const configCollectionName = dbConfig.collections.config;
const playgroundCollectionName = dbConfig.collections.playgrounds;
const weatherCollectionName = dbConfig.collections.weather;

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

        dbObj.client.close();

        return response;
    } catch(err) {
        throw err;
    } 
}

const getPlaygroundById = async (id) => {

    try {

        const dbObj = await connectDatabase();
        const playgroundCollection = dbObj.database.collection(playgroundCollectionName);

        const response = await playgroundCollection.findOne({
            _id: ObjectID(id)
        });

        dbObj.client.close();

        return response;
    } catch(err) {
        throw err;
    }
}

const updatePlaygroundById = async (reqObj) => {

    const {
        id,
        name,
        address,
        coords,
        type
    } = reqObj;

    const query = {
        _id: ObjectID(id)
    };

    const newValue = (type === 0)? {
        name
    } : {
        address,
        coords
    };

    try {

        const dbObj = await connectDatabase();
        const playgroundCollection = dbObj.database.collection(playgroundCollectionName);
        
        const response = await playgroundCollection.update(query, {$set: newValue});

        dbObj.client.close();

        return response;
    } catch (err) {
        throw err;
    }
}

const deletePlaygroundById = async (id) => {

    const query = {
        _id: ObjectID(id)
    };

    try {

        const dbObj = await connectDatabase();
        const playgroundCollection = dbObj.database.collection(playgroundCollectionName);

        const response = await playgroundCollection.deleteOne(query);

        dbObj.client.close();

        return response;

    } catch(err) {
        throw err;
    }
}

const getWeatherInfoByPlaygroundId = async (pgId) => {

    const query = { pgId };

    try {

        const dbObj = await connectDatabase();
        const weatherCollection = dbObj.database.collection(weatherCollectionName);

        const doc = await weatherCollection.findOne(query);

        return doc;

    } catch(err) {
        throw err;
    }
}

module.exports = {
    connectDatabase,
    getApiKey,
    saveNewPlayground,
    getAllPlaygrounds,
    getPlaygroundById,
    updatePlaygroundById,
    deletePlaygroundById,
    getWeatherInfoByPlaygroundId
}
