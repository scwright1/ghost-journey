/**2e3a41
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

    });

    $(window).scroll(function(e){ 
    	if($(window).width() > 768) {
			if ($(this).scrollTop() > 500 && $('.navbar').css('position') != 'fixed'){ 
				$('.navbar').css({'position': 'fixed', 'top': '0px'}); 
				$('.navbar').addClass('darkbar');
				$('.navbar > .logo').css('display', 'inline');
				$('.navbar > .pages').each(function() {
					$(this).find('a').addClass('darkbar-link');
				});
				$('.navbar > .social').each(function() {
					$(this).find('a').addClass('darkbar-link');
				});
			} else if($(this).scrollTop() < 500 && $('.navbar').css('position') === 'fixed') {
				$('.navbar').css({'position': 'relative', 'top': ''});
				$('.navbar > .logo').css('display', 'none');
				$('.navbar').removeClass('darkbar');
				$('.navbar > .pages').each(function() {
					$(this).find('a').removeClass('darkbar-link');
				});
				$('.navbar > .social').each(function() {
					$(this).find('a').removeClass('darkbar-link');
				});
			}
    	}
	});

}(jQuery));