define(["backbone"], function(Backbone) {

    var NewsModel = Backbone.Model.extend({
        initialize: function() {},

        url: "http://dev.cnvs.io:3000/news",

        idAttribute: "_id",

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options) {
            return response;
        }
    });

    return NewsModel;
});