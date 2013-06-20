function Pot(name, setup) {
	this.name = name;

	// defaults
	this.brew = notAcceptableResponse;
	this.get = TeapotResponse;
	this.propfind = TeapotResponse;
	this.when = TeapotResponse;

	// setup hook
	if (setup !== undefined)
		setup(this);
}

function notAcceptableResponse(req, res) {
	res.statusCode = 406;
	res.end("Not Acceptable");
}

function TeapotResponse(req, res) {
	res.statusCode = 418;
	res.end("I'm a teapot");
}

module.exports = function() {
	return new Pot();
}