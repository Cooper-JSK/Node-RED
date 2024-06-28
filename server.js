const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: "./.nodered/",
    flowFile: "flows.json",
    functionGlobalContext: {}    // enables global context
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(1880, () => {
    console.log("Node-RED is running on http://localhost:1880/red");
});

RED.start();
