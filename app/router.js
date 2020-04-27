const Backbone = require("backbone");

// views
const App = require('./views/app');

const Router = {
    routes: {
        "": () => new App(),
    }
}

module.exports = Backbone.Router.extend(Router);
