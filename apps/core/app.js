var app = function()
{
	var stack = new Map();
	var events = ["render"];
	var __root;

	function addObserver(eventName, callback)
	{
		if(events.indexOf(eventName))
			return;

		stack.set(eventName, callback);
	}

	function setRoot(rootEl)
	{
		__root = document.querySelector(rootEl);
	}

	function render(element)
	{
		__root.innerHTML = element.render();

		element.init();

		// send render event
		sender(events[0]);
	}

	// event sender
	function sender(event)
	{
		stack.get(event)();
	}

	return {
		root: setRoot,
		on: addObserver,
		render: render
	}
}();

export default app;