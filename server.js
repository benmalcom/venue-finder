// server.js
const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
app = express();
app.use(requireHTTPS);
app.use(serveStatic(__dirname + '/dist'));


const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port);

function requireHTTPS(req, res, next) {
	if (!req.secure) {
		return res.redirect('https://' + req.get('host') + req.url);
		//FYI this should work for local development as well
	}
	return next();
}
