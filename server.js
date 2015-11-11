var express = require('express');
var PORT = 3000;
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log('Date: ' + new Date().toString() + 'Request: ' + req.method + ' : ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

// app.get('/', function(req, res){
// 	res.send('Hello Express!!');
// });

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express sever listening on: ' + PORT);
});