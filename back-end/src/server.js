const express = require('express');
const app = express()

const config = require('./config.json');

const serverConfig = config["server"];
const port = serverConfig["port"];

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))