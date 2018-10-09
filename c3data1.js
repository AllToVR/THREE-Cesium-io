'use strict'
var CRLF = '\n'
var fs = require('fs-extra')
//
exports.sendFullSampleZip = function ( socket){
	var contents = fs.readFileSync('C:/YourServer/yourJavaScriptFolder/THREECesumExample.zip')
	socket.emit('doneCZML', {my:contents}, 'THREECesumExample.zip')
	var now = new Date();
	console.log("*************** sendFullSampleZip: " + now.toString() )
}
//
exports.sendSampleZip = function ( socket){
	var contents = fs.readFileSync('C:/YourServer/yourJavaScriptFolder/chartResults.zip')
	socket.emit('doneCZML', {my:contents}, 'chartResults.zip')
	var now = new Date();
	console.log("******************* sendSampleZip: " + now.toString() )
}
//
