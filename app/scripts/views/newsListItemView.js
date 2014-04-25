define(["backbone", "text!templates/newsView.ejs"], function(Backbone, template) {

	var MainView  = Backbone.View.extend({
		template: _.template(template),
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.template({
				model: this.model.toJSON()
			}));
		},
	});

	return MainView;
});
