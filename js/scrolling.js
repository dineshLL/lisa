	   /*
       *@author: Achala Dias
       *Date: 2016-09-03
       *Description : scrolling the entier page to down (AutoScroll)
       */
        
		var CORRECTION = 50; 
		var DELAY_SCROLLING = 1500;

		$( '#playground' ).click(function(event) {
			event.preventDefault();
			scrollToLink( '#scrollingPosition' );
		});

		function scrollToLink( link ) {
			selectLink = $( link );
			if ( selectLink.length ) {
				var top = selectLink.offset().top - CORRECTION;
				$('body,html').stop().animate({scrollTop: top}, DELAY_SCROLLING);
			} else {
				console.log('The link is not found: ' + link);
			}
		}