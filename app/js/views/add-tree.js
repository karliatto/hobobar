var app = app || {};

app.views = app.views || {};

app.views.AddTree = (function() {

	'use strict';

	return Backbone.View.extend({

		className: 'add-tree',

		template: '#template-add-tree',

		events: {
			'click #submit-add-tree': 'submit'
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			this.$el.html(template({
				// Data for the template goes here.
			}));
			this.onRender();
			return this;
		},

		onRender: function() {

			app.util.takePicture(function(error, imagePath) {

				if (error) alert(error);

				app.util.getLocation(function(error, location) {

					if (error) alert(error);

					var newTree = new app.models.Tree({
						latitude: location.lat,
						longitude: location.long,
						type: $('#type').val(),
						description: $('#description').val(),
						imagePath: imagePath
					});
					newTree.save(null, {
						success: function(response) {
							console.log('Successfully SAVED tree with id: ' + response.toJSON().id);
							app.trees.add(newTree);
						},
						error: function() {
							console.log('Failed to save tree!');
						}
					});
				});
			});
		},

		submit: function() {
		}

	});

})();