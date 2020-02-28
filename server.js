const express = require("express");
const pino = require('express-pino-logger')();

const PORT = 7000;
const app = express();

app.use(pino)

app.get("/", (req, res) => {
    req.log.info('root request')
    res.send("Hello Pino!!!");
});

app.get("/sayHello/:name", (req, res) => {
    req.log.info('sayHello request')
    const {name} = req.params;
    res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
    console.log(`App is now running on port ${PORT}!!!`);
});