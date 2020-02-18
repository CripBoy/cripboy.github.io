var router = function()
{
	var stack = new Map();
	var initialHash = true;

	// set all <a> events
	function updateDOMlist()
	{
		document.querySelectorAll("a").forEach(el => {
			el.onclick = anchorHandler;
		});

		if(initialHash)
		{
			initialHash = false;
			
			updateURL(window.location.pathname);
		}
	}

	// <a> click event
	function anchorHandler()
	{
		event.preventDefault();

		var path = event.currentTarget.href.toLowerCase();
		var hash = event.currentTarget.hash;
		var linkExternal = 
			!(path.startsWith(`http://${window.location.hostname}`) || 
			path.startsWith(`https://${window.location.hostname}`));

		if(hash)
			document.querySelector(hash).scrollIntoView();
		else if(linkExternal)
			window.location = path;
		else
			updateURL(path);
	}

	// change current url and emmiter him
	function updateURL(url)
	{
		var stack;
		var bufferEl = document.createElement("a");
			bufferEl.href = url;
			url = bufferEl.pathname;

		if(!(stack = checkHash(url)))
			return;

		var location = "#" + url;
		window.location.hash = location;

		emiter(stack);
	}

	function checkHash(url)
	{
		for(var key of stack.keys())
		{
			if (!(key === "/" && url == key) &&
			!(url.substring(0, key.length) == key && key !== "/"))
				continue;

			return [stack.get(key), url.slice(key.length + 1)];
		}
	}

	/*
	* @param {string} routeName
	*/
	function add(routeName, callback)
	{
		var [route, param] = routeName.split("/:");

		stack.set(route, [param || null, callback]);
	}

	/*
	* @param {string} stackName
	*/
	function emiter(stack)
	{
		var [hash, param] = stack;

		hash[1](param || hash[0]);
	}

	window.onload = updateDOMlist;

	return {
		page: add,
		update: updateDOMlist,
	}
}();

export default router;