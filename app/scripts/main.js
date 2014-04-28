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
        },
        sockeio: {
            exports: "io"
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: "vendor/text",
        socketio: "//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min"
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
