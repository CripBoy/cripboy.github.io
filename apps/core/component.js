var component = function()
{
	"use strict";

	var context = {};

	context.create = function(customCtx)
	{
		Object.assign(context, customCtx);
	}

	/*
	* Render function to override
	*/
	context.render = function()
	{
		return `<div></div>`
	};

	/*
	* init function to override
	*/
	context.init = function(){};

	return context;
}();

export default component;