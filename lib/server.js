var http = require('http');
var Pot = require('./pot');

function Server() {
	var self = this;
	this.pots = {};

	this.listen = function() {
		var server = http.createServer(this.route);
  		return server.listen.apply(server, arguments);
	};

	this.pot = function(name, setup) {
		var pot = new Pot(name, setup);
		if (self.pots.hasOwnProperty(name)) {
			 throw new Error("pot with name '" + name + "' already exists");
		}

		self.pots[name] = pot;
	};

	this.route = function(req, res) {
		// resolve requested pot...
		var url = req.url.split('/');

		if (url.length === 2 && url[1] === '') {
			res.statusCode = 400;
			res.end('POT NOT SPECIFIED');
		} else {

			var potName = url[1];
			if (self.pots.hasOwnProperty(potName)) {

				var pot = self.pots[potName];
				try {
					if (req.method.toUpperCase() === "POST" || req.method.toUpperCase() === "BREW") {
						pot.brew(req, res);
					} else if (req.method.toUpperCase() === "GET") {
						pot.get(req, res);
					} else if (req.method.toUpperCase() === "PROPFIND") {
						pot.propfind(req, res);
					} else if (req.method.toUpperCase() === "WHEN") {
						pot.when(req, res);
					} else {
						res.statusCode = 400;
						res.end("UNABLE TO PROCESS METHOD '" + req.method + "'");
					}
				}
				catch (err) {
					if (!res.headersSent) {
						res.statusCode = 500;
						res.end("SERVER ERROR");
					}
				}

			} else {
				res.statusCode = 404;
				res.end('POT NOT FOUND');
			}
		}
	};

}

module.exports = function() {
	return new Server();
}