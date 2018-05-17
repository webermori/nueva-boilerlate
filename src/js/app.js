'use strict';

var app = (function() {
	function init() {        
        let enquire = require('enquire.js');
  //       general = require('./modules/general'),
  //       catalog = require('./modules/catalog'),        
		// product = require('./modules/product');

        // product.init;
        // catalog.init;

        // Media Queries
        enquire.register("screen and (max-width:991px)", {
            match: function () {
                //MOBILE
                //general.sidebarMenu;
            }
        });

        enquire.register("screen and (min-width:992px)", {
            match: function () {
            	//DESKTOP
                
            	console.log('desktop');
            }
        });

		// JS Específicos

        const tag = document.querySelector('main'),
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
	}

	return {
		init: init
	};
}());

$(function() {
	app.init();
});