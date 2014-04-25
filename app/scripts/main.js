/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: "vendor/text"
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'app'
], function ($, _, Backbone, App) {
    Backbone.history.start();
    App.initialize();
});
