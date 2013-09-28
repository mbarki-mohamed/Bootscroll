/*

Scroll To Top Plugin.

Inspired By https://github.com/markgoodyear/scrollup for Mark Goodyear.


*/

(function($) {

	$.scrollUp = function (options) {

		// Defaults
		var defaults = {
			scrollName: 'Bootscroll', // Button class 
			topDistance: 70, // Distance from top before showing element (px)
			topSpeed: 1000, // Speed back to top (ms)
			animation: 'slide', // Fade, slide, none
			animationInSpeed: 600, // Animation in speed (animation of the button) (ms)
			animationOutSpeed: 600, // Animation out speed (animation of the button) (ms)
			
			
		};


		var o = $.extend({}, defaults, options),
			scrollclass = '.' + o.scrollName;


		

		// Initial CSS Button settings
		
		
		$(scrollclass).css({'display':'none','position': 'fixed','z-index': '2147483647'});
		

		// Show the Button when page down 
		
		
		if (o.activeOverlay) {
			
			$(scrollclass).css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
		}

		// Scroll function
		$(window).scroll(function(){	
			switch (o.animation) {
				case "fade":
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollclass).fadeIn(o.animationInSpeed) : $(scrollclass).fadeOut(o.animationOutSpeed) );
					break;
				case "slide":
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollclass).slideDown(o.animationInSpeed) : $(scrollclass).slideUp(o.animationOutSpeed) );
					break;
				default:
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollclass).show(0) : $(scrollclass).hide(0) );
			}
		});



		// To the top
		$(scrollclass).click( function(event) {
			$('html, body').animate({scrollTop:0}, o.topSpeed);
			event.preventDefault();
		});

	};
})(jQuery);