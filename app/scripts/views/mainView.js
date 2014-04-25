define(["jquery", "backbone", "views/newsListItemView", "collections/news", "text!templates/mainView.ejs"], function($, Backbone, NewsListItemView, NewsCollection, template) {

	var MainView  = Backbone.View.extend({
		template: _.template(template),
		initialize: function() {
			this.collection = new NewsCollection();
			this.collection.on("reset", function() {
				this.renderItems();
			}, this);
			this.collection.on("add", function(model) {
				this.appendItem(model);
			}, this);
			this.collection.fetch({reset: true});
			this.render();
		},
		render: function() {
			this.$el.html(this.template());
		},
		renderItems: function() {
			this.collection.each(function(model) {
				var liView = new NewsListItemView({
					model: model
				});
				this.$(".news").prepend(liView.$el);
			}, this);
		},
		appendItem: function(model) {
			var liView = new NewsListItemView({
					model: model
				});
				this.$(".news").prepend(liView.$el);
		},
		events: {
			"click .submitBtn" : "submit"
		},
		submit: function(event) {
			if ($(".linkHolder").val() !== "") {
				var link = $(".linkHolder").val();
				if (link.indexOf("http://") === -1) {
					link = "http://" + link;
				}
				var self = this;
				$.get("http://api.diffbot.com/v2/article?token=2e034a770e45ab5d83ed03c902778659&url=" + link, function(r) {
					console.log(r);
					if (r.error) return;
					self.collection.create({
						title: r.title,
						content: r.text.slice(0,255),
						url: r.url,
						image: ((r.images || {})[0] || {}).url,
						date: (new Date()).getTime()
					});
				});

			}
		}
	});

	return MainView;
});
