	   /*
       *@author: Achala Dias
       *Date: 2016-09-03
       *Description : scrolling the entire page to down (AutoScroll)
       */
        
		var CORRECTION = 50; 
		var DELAY_SCROLLING = 300;
	    var targetPositionedElementId = '#scrollingPosition';

	   /**
		* function that will trigger for autoscroll button click
		*/
	   $( '#playground' ).click(function(event) {
			event.preventDefault();
			scrollToLink( targetPositionedElementId);
		});

		function scrollToLink( link ) {
			selectLink = $( link );
			if ( selectLink.length ) {
				var top = selectLink.offset().top - CORRECTION;
				$('body,html').stop().animate({scrollTop: top}, DELAY_SCROLLING);
			} else {
				console.log('Autoscrolling target element is not available: (Element ID) ' + link);
			}
		}