function Pot(name, setup) {
	this.name = name;

	// defaults
	this.brew = notAcceptableResponse;
	this.get = teapotResponse;
	this.propfind = teapotResponse;
	this.when = teapotResponse;

	// setup hook
	if (setup)
		setup(this);
}

function notAcceptableResponse(req, res) {
	res.statusCode = 406;
	res.end("Not Acceptable");
}

function teapotResponse(req, res) {
	res.statusCode = 418;
	res.end("I'm a teapot");
}

module.exports = function() {
	return new Pot();
}