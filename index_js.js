var isOnScreen = function(targetID)
{
	var targetElement = getElementById(targetID);
	var boundingRect = targetElement.getBoundingClientRect();
	var origTop = boundingRect.top; 
	var origHeight = boundingRect.height;
	if (boundingRect.bottom < 0) // is bottom off page?
	{
		return false;
	}
	if (origTop > document.documentElement.clientHeight) // is visible in viewport?
	{
		return false;
	}
	
	// account for recursive structure of elements
	targetElement = targetElement.parentNode;
	do
	{
		boundingRect = targetElement.getBoundingClientRect()
		if (origTop <= boundingRect.bottom === false)
		{
			return false;
		}
		if ((top + height) <= rect.top) // container scrolled out of view?
		{
			return false
		}
		targetElement = targetElement.parentNode;
	}
	while (targetElement != document.body)
	{
		return true;
	}
};

var alreadyAlert = false;

$("body").scroll(function()
{
	alert("Scrolling!");
	if (isOnScreen("skills") & !alreadyAlert)
	{
		alert("Now on screen.");
		alreadyAlert = true;
	}
	if (!isOnScreen("skills"))
	{
		alreadyAlert = false;
	}
});