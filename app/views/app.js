const Backbone = require("backbone");
const ejs = require("ejs");
const html = require("../templates/app.ejs");

const App = Backbone.View.extend({
    el: "#root",
    state: {
        name: "Crip Boy",
        desc: "Javascript Developer. Making things ‎️‍🌈"
    },

    initialize: function () {
        this.template = ejs.compile(html);
        this.render();
    },

    render: function () {
        const renderedHtml = this.template(this.state);
        this.$el.html(renderedHtml);
    }
});

module.exports = App;