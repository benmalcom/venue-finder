// server.js
const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + '/dist'));
app.use(function (req, res, next) {
	if (app.get('env') === 'production') {
		return res.redirect('https://' + req.headers.host);
	}
});
const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port);
console.log('server started '+ port);
