define(["backbone", "views/mainView", "collections/news"], function(Backbone, MainView, NewsCollection) {

	var App = {
		initialize: function() {
			this.mainView = new MainView();
			$("body").prepend(this.mainView.$el);
		}
	};

	return App;
})
