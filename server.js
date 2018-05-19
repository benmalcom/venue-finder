// server.js
const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + '/dist'));
const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port);
