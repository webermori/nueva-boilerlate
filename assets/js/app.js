var nuevaJS = (function() {
	'use strict';

	function init() {
		$(document).ready(function() {
			slick();
			googleMap();
			semanticUi();
			valida();
			facebook();
			general();
		});
	}

	function semanticUi () {
		$('.ui.dropdown').dropdown();
	}

	function googleMap() {
		var $ = jQuery;

		var isTouchScreen = false;
		if ('ontouchstart' in window) {
			isTouchScreen = true;

			$("html").addClass("touch-screen");
		}

		//GOOGLE MAPS
		window.initialize = function() {
			var draggable = (isTouchScreen) ? false : true;

			$("#mapContainer").each(function() {
				var container = $(this);
				var id = container.attr("id");

				var latitude = parseFloat(container.data("latitude"));
				var longitude = parseFloat(container.data("longitude"));

				var latitudeCenter = parseFloat(container.data("latitude-center"));
				latitudeCenter = latitudeCenter || latitude;
				var longitudeCenter = parseFloat(container.data("longitude-center"));
				latitudeCenter = latitudeCenter || latitude;

				var zoom = parseInt(container.data("zoom"));
				zoom = zoom || 16;

				var image = container.data("marker");

				//Cria Mapa
				var map = new google.maps.Map(document.getElementById(id), {
					scrollwheel: false,
					scaleControl: true,
					draggable: draggable,
					zoomControlOptions: {
						position: google.maps.ControlPosition.LEFT_CENTER
					},
					streetViewControl: false,
					mapTypeControlOptions: {
						position: google.maps.ControlPosition.RIGHT_CENTER
					}
				});

				var styles = [{
					"featureType": "road.highway",
					"stylers": [{
						"visibility": "on"
					}, {
						"saturation": -93
					}, {
						"lightness": -7
					}]
				}, {
					"featureType": "landscape.man_made",
					"elementType": "geometry.fill",
					"stylers": [{
						"visibility": "on"
					}, {
						"saturation": -89
					}]
				}, {
					"featureType": "road.arterial",
					"stylers": [{
						"saturation": -93
					}, {
						"visibility": "on"
					}]
				}];

				map.setOptions({
					styles: styles
				});
				map.setCenter(new google.maps.LatLng(latitudeCenter, longitudeCenter));
				map.setZoom(zoom);
				map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

				var message;
				google.maps.event.addListener(map, 'mousemove', function(event) {
					if (isTouchScreen && !message) {
						message = true;

						var centerControlDiv = document.createElement('div');
						var centerControl = new CenterControl(centerControlDiv, map);

						centerControlDiv.index = 1;
						map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);
					}
				});

				//Cria Marcador
				var latLng = new google.maps.LatLng(latitude, longitude);

				var confMarker = {
					position: latLng,
					map: map,
					icon: image,
					title: "Ampliar mapa"
				};

				var marker = new google.maps.Marker(confMarker);

				google.maps.event.addListener(marker, 'click', function() {
					map.setZoom(19);
					map.setCenter(marker.getPosition());
				});
			});
		};

		if ($("#mapContainer")[0]) {
			loadScript();
		}

		function loadScript() {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&' +
				'callback=initialize';
			document.body.appendChild(script);
		}

		/**
		 * The CenterControl adds a control to the map that recenters the map on Chicago.
		 * This constructor takes the control DIV as an argument.
		 * @constructor
		 */
		function CenterControl(controlDiv, map) {
			// Set CSS for the control border
			var controlUI = document.createElement('div');
			controlUI.style.backgroundColor = '#fff';
			controlUI.style.width = '120px';
			controlUI.style.border = 'none';
			controlUI.style.borderRadius = '3px';
			controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
			controlUI.style.cursor = 'pointer';
			controlUI.style.marginBottom = '30px';
			controlUI.style.textAlign = 'center';
			controlUI.title = "Tornar mapa arrastável";
			controlDiv.appendChild(controlUI);

			// Set CSS for the control interior
			var controlText = document.createElement('div');
			controlText.style.color = 'rgb(25,25,25)';
			controlText.style.fontFamily = 'Arial, sans-serif';
			controlText.style.fontSize = '12px';
			controlText.style.lineHeight = '38px';
			controlText.style.paddingLeft = '5px';
			controlText.style.paddingRight = '5px';
			controlText.innerHTML = "Tornar arrastável";
			controlUI.appendChild(controlText);

			// Setup the click event listeners: simply set the map to
			var clicked = false;
			google.maps.event.addDomListener(controlUI, 'click', function() {
				if (!clicked) {
					map.setOptions({
						draggable: true
					});
					controlText.innerHTML = "Desativar";

					clicked = true;
				} else {
					map.setOptions({
						draggable: false
					});
					controlText.innerHTML = "Tornar arrastável";

					clicked = false;
				}
			});
		}
	}

	function slick() {
		$('.slider-home').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 9000,
			fade: true
		});		
	}

	function valida() {
		$('#formContact').parsley();
	}

	function facebook() {
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.7&appId=678010208943929";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	}
	
	function general() {
		//Topo fixo
		$(".header").stick_in_parent();
		$('.home').find('.header__logo-container').addClass('fadeInDown animated');		
		$('.slider-home').find('.slick-dots').wrap('<div class="container"></div>');
	}
	return {
		init: init
	};

}());

(function() {
	nuevaJS.init();
}());