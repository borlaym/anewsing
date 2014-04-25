define(["backbone", "models/news"], function(Backbone, NewsModel) {

	var NewsCollection = Backbone.Collection.extend({
		url: "http://cantrip.herokuapp.com/news",
		model: NewsModel
	});

	return NewsCollection;
})
