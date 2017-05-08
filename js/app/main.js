require(['./config'], function(config) {
	require(['jquery', 'functions'], function() {
		var app = (function() {
			'use strict';

			function init() {
				facebook();
				general();

				

				var tag = document.querySelector('main[data-page="controller"]'),
				section = tag && tag.getAttribute("data-custom-js");

				if (section == "home") {

					sliderHome();
					home();

					console.log('Home');

				} else if (section == "contato") {
					console.log('Contato');

					require(['maps', 'recaptcha', 'semanticUi'], function() {
						semanticUi();
					});

					//valida();

				} else {
					console.log('Seção Nula ' + section);
				}

				// Media Queries 
				if (window.matchMedia("(min-width: 991px)").matches) {

					console.log('Desktop');

				} else {

					slideOut();
					require(['navAccordion'], function(){
						jQuery('.menu-mobile').navAccordion({
							expandButtonText: '<i class="icon icon-down-slim"></i>',  //Text inside of buttons can be HTML
							collapseButtonText: '<i class="icon icon-up-slim"></i>'
						});
					});

					console.log('Mobile');
				}
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