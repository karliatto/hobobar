var app = app || {};

app.util = (function() {

	'use strict';

	return {

		getLocation: function(cb) {

			navigator.geolocation.getCurrentPosition(function(result) {
				console.log(arguments);
				cb(null, {
					lat: result.coords.latitude,
					long: result.coords.longitude
				});
			}, cb);
		},

		takePicture: function(cb) {

			debugger;

			// Run camera.
			navigator.camera.getPicture(function(imagePath) {
				console.log(arguments);
				// Successfully took the picture.
				cb(null, imagePath);
			}, function(error) {
				// Show the error somehow.
				// !! TODO !!
				alert(error);
			}, {
				destinationType: navigator.camera.DestinationType.FILE_URI
			});
		}
	};

})();
