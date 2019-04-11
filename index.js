var allImages = $(".animate-image");

var viewHeight = $(window).height() - $(".navbar").outerHeight(); // viewable area; browser height, minus navbar height

var contentSection = allImages.parent();
var divStart = contentSection.offset().top + $(".navbar").outerHeight(); // point in scroll at which "true" top of div starts
var divStop = divStart + contentSection.height();

alert(divStart);

var viewStart = divStart - viewHeight; // first scroll position at which any point of the div is visible
var viewStop = divStop + viewHeight; // last scroll position at which any point of the div is visible

$(window).scroll(function() {
	if ($(window).scrollTop() < viewStart | $(window).scrollTop() > viewStop) // if offscreen, then invisible
	{
		allImages.css("opacity", 0);
	} else if ($(window).scrollTop() == viewStart) // div is exactly at top of window
	{
		allImages.css("opacity", 1);
	} else if ($(window).scrollTop() > viewStart & $(window).scrollTop() < viewStop) // top part of div is visible, bottom part of div is not
	{
		var percentThru = ($(window).scrollTop() - viewStart) / (viewStop - viewStart);
		allImages.css("opacity", percentThru);
	}
	
	/*var percentThruDiv = ($(window).scrollTop() - topLevel) / (bottomLevel - topLevel);
	
	if (percentThruDiv > 1 | percentThruDiv < 0) // if offscreen, invisible
	{
		allImages.css("opacity", 0);
	} else if (percentThruDiv > 0.4 & percentThruDiv < 0.6) // if in middle, 100% opacity
	{
		allImages.css("opacity", 100);
	} else if (percentThruDiv <= 0.4)
	{
		allImages.css("opacity", (percentThruDiv / 0.4));
	} else if (percentThruDiv >= 0.6)
	{
		allImages.css("opacity", (((0.6 - percentThruDiv) / 0.4) + 1));
	}
	*/
});

allImages.click(function() {
	alert($(window).scrollTop());
});

/*$(window).scroll(function() {
	alert($(window).scrollTop());
});*/


/*$(window).scroll(function() {
	alert("A wild scroll appears!");
});*/


/*allImages.each(function(){
	/*
	$(this).bind("click", function(){
		alert($(this).attr("src"));
	});	*/
	/*
	var contentSection = $(this).parent();
	
	var topLevel = contentSection.offset().top;
	var bottomLevel = topLevel + contentSection.height();
	
	alert(topLevel);
	alert(bottomLevel);
	*/
//});