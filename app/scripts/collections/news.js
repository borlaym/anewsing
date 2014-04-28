define(["backbone", "models/news", "socketio"], function(Backbone, NewsModel, io) {

	var NewsCollection = Backbone.Collection.extend({
		url: "http://dev.cnvs.io:3000/news",
		model: NewsModel,
		initialize: function() {
			var self = this;
			var socket = io.connect("http://localhost:3000/");
			socket.on("POST:/news", function(event) {
				self.add(new NewsModel(event));
			});
		}
	});

	return NewsCollection;
})
