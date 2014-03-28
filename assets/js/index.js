/**2e3a41
 * Main JS file for Journey behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";
    articleHover();
    if($(window).width() > 768) {
    	convertPostImages();
        navbar();
    }
}(jQuery));

$(document).resize(function() {
	if($(window).width() > 768) {
	   	convertPostImages();
	    navbar();
	}
});

function navbar() {
    $(window).scroll(function(e){ 
		if ($(this).scrollTop() > 500 && $('.navbar').css('position') !== 'fixed'){ 
			$('.navbar').addClass('darkbar'); 
			$('.navbar > .logo').css('display', 'inline');
			$('.navbar > div').each(function() {
				$(this).find('a').addClass('darkbar-link');
			});
		} else if($(this).scrollTop() < 500 && $('.navbar').css('position') === 'fixed') {
			$('.navbar').removeClass('darkbar');
			$('.navbar > .logo').css('display', 'none');
			$('.navbar > div').each(function() {
				$(this).find('a').removeClass('darkbar-link');
			});
		}
	});
}

function articleHover() {
	$('main.content > article').hover(function() {
		$(this).find('.post-cover').css('display', 'inline');
	}, function() {
		$(this).find('.post-cover').css('display', 'none');
	});
}

function convertPostImages() {
	$('main.content > article').each(function() {
		var div = $(this).find('.post-image > .image');
	    var img = $(div).data('img');
	    var result = img.replace(/(<p>|<\/p>)/g, "");
	    if(result.indexOf('<img src') != -1) {
	        var m = result.match(/"(.*?)"/);
	        $(div).css('background-image', 'url('+m[1]+')');
	    } else {
	    	//no cover image
	    	$(this).find('.post-text').css({'float': 'left', 'width': '100%'});
	    	$(this).find('.post-image').css('display', 'none');
	    }
	});
}