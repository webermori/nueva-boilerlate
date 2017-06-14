require(['./config'], function(config) {
	require(['jquery', 'functions'], function() {
		var app = (function() {
			'use strict';

			function init() {
				facebook();
				general();

				require(['uikit']);
				//require(['bundle']);

				// Media Queries
	            require(['enquire'], function (enquire) {
	                enquire.register("screen and (max-width:991px)", {
	                    match: function () {
	                        //MOBILE
	                        
	                        //scrollUp();

	                        slideOut();

	                        require(['navAccordion'], function(){
								jQuery('.menu-mobile').navAccordion({
									expandButtonText: '<i class="icon icon-down-slim"></i>',  //Text inside of buttons can be HTML
									collapseButtonText: '<i class="icon icon-up-slim"></i>'
								});
							});
	                    }
	                });

	                enquire.register("screen and (min-width:992px)", {
	                    match: function () {
	                    	//DESKTOP
	                    	superFishMenu();
	                    }
	                });
	            });

				// JS Específicos
	            var tag = document.querySelector('main'),
	                section = tag.getAttribute("data-custom-js");

	            switch (section) {
	                case "home":
	                    sliderHome();
						home();
						console.log('Home');

	                	break;

	                case "contato":
	                    require(['maps', 'recaptcha']);
						parsley();
	               		break;

	                default:
	                	console.log('Seção Nula ' + section);
	                	break;
	            }

	            //Media Queries Vanilla JS
	            //Desktop only
	            // if (window.matchMedia("(min-width: 991px)").matches) {
	            //  } else {
	            //  //Mobile Only
	            //  }
			}

			return {
				init: init
			};
		}());

		(function() {
			app.init();
		}());
	});
});