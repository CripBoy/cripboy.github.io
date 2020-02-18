import core from "../../../core";
// // import initial page
import main from "../pages/main.js";

// initial route
var {app, router} = core;
router.page("/", () => app.render(main));

// app
app.root("#root");
app.on("render", () => {
	router.update();
});