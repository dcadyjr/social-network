var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');

server.listen(3000, function(){
	console.log("Your Mom");
})