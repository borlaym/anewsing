define(["backbone"], function(Backbone) {

    var NewsModel = Backbone.Model.extend({
        initialize: function() {},

        idAttribute: "_id",

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options) {
            return response;
        }
    });

    return NewsModel;
});