require(['./config'], function(config) {
	require(['jquery', 'functions'], function() {
		var app = (function() {
			'use strict';

			function init() {
				headerSticky();

				// Media Queries
	            require(['enquire'], function (enquire) {
	                enquire.register("screen and (max-width:991px)", {
	                    match: function () {
	                        //MOBILE
	                        sidebarMenu();
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
						tabs();
						clientsCarousel();
	                	break;

	                case "company":
	                	modalGallery();
	                	break;

	                case "product":
	                	modalGallery();
	                	break;
	                case "technical-evaluation":
	                	lightSlider();
	                	sliderContent();
	                	break;

	                case "faq":
	                	accordion();
	                	break;

	                case "budget":
	                	buscaCep();
	                	mask();
	                	valida();
	                	break;

	                case "contato":
	                    recaptcha();
	                    googleMaps();
						valida();
						mask();
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

		$(function() {
			app.init();
		});
	});
});