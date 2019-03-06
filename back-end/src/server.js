const express = require('express');
const app = express()

const utils = require('./utils/index');

const port = utils.configUtils.getServerPort();

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/testingDb', (req, res) => {

    utils.dbUtils.connectDatabase();

    res.send(utils.msgUtils.getMessage("db_testing"));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))