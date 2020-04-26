const Backbone = require("backbone");
const Jquery = require("jquery");
const AppRouter = require("./router");

Backbone.$(function()
{
    new AppRouter();

    Backbone.history.start();
});