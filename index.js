$(".content-section").each(function() {
	$(this).css("padding-top", $(".navbar").outerHeight()+"px");
});

var allImages = $(".animate-image");
allImages.css("opacity", 0);

var magicAmt = 0.1; // what percent of view height "counts" as exactly at top of window? in viewheight percents, what is size of "magic window"?

var viewHeight;
var bufferSize;
function initializeViewVars()
{
	viewHeight = $(window).height() - $(".navbar").outerHeight(); // viewable area; browser height, minus navbar height
	bufferSize = (1-magicAmt) * viewHeight; // size of "buffer zone" where an image is partially visible
};
initializeViewVars();


var contentSection = allImages.parent();
var divStart = contentSection.offset().top + $(".navbar").outerHeight() - (contentSection.outerHeight() - contentSection.height());  // scroll point at which "true" top of div is located
var divStop = divStart + contentSection.height();
var viewStart = divStart - viewHeight; // first scroll position at which any point of the div is visible
var viewStop = divStop - $(".navbar").outerHeight();; // last scroll position at which any point of the div is visible

/*$(window).scroll(function() {
	scrollDist = $(window).scrollTop();
	
	curImage = allImages;
	if (Math.abs(scrollDist - divStart) <= (magicAmt*viewHeight)) // div is almost exactly at top of window
	{
		curImage.css("opacity", 1);
	} else if (scrollDist < viewStart | scrollDist > viewStop) // div is invisible
	{
		curImage.css("opacity", 0);
	} else // div is partly visible
	{		
		if (scrollDist >= viewStart & scrollDist <= (viewStart + bufferSize)) // scroll position is above div start
		{
			curImage.css("opacity", (scrollDist - viewStart) / bufferSize);
		}
		else if (scrollDist >= (viewStop - bufferSize) & scrollDist <= viewStop) // scroll position is below div start
		{
			curImage.css("opacity", (viewStop - scrollDist) / bufferSize);
		}
	}
});*/

function checkImageOpacity(curImage) // update image opacity
{
	var contentSection = curImage.parent();
	var divStart = contentSection.offset().top + $(".navbar").outerHeight() - (contentSection.outerHeight() - contentSection.height());  // scroll point at which "true" top of div is located
	var divStop = divStart + contentSection.height();
	var viewStart = divStart - viewHeight; // first scroll position at which any point of the div is visible
	var viewStop = divStop - $(".navbar").outerHeight();; // last scroll position at which any point of the div is visible
	
	if (Math.abs(scrollDist - divStart) <= (magicAmt*viewHeight)) // div is almost exactly at top of window
	{
		curImage.css("opacity", 1);
	} else if (scrollDist < viewStart | scrollDist > viewStop) // div is invisible
	{
		curImage.css("opacity", 0);
	} else // div is partly visible
	{		
		if (scrollDist >= viewStart & scrollDist <= (viewStart + bufferSize)) // scroll position is above div start
		{
			curImage.css("opacity", (scrollDist - viewStart) / bufferSize);
		}
		else if (scrollDist >= (viewStop - bufferSize) & scrollDist <= viewStop) // scroll position is below div start
		{
			curImage.css("opacity", (viewStop - scrollDist) / bufferSize);
		}
	}
	
	if(viewStop > scrollDist & scrollDist + $(window).height() == $(document).height())
	{
		curImage.fadeTo("fast", 1);
		//curImage.css("opacity", 1);
	}
	
	return;
}

// run for the first time
var scrollDist = 0;
allImages.each(function(){
		checkImageOpacity($(this));
});
	
$(window).scroll(function() {
	scrollDist = $(window).scrollTop();
	allImages.each(function(){
		checkImageOpacity($(this));
	});
});

