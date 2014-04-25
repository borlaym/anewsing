define(["backbone", "models/news"], function(Backbone, NewsModel) {

	var NewsCollection = Backbone.Collection.extend({
		url: "http://marci.dev.cnvs.io:3000/news",
		model: NewsModel
	});

	return NewsCollection;
})
