;(function(undefined) {
	'use strict';

	require.config({
		baseUrl: 'js',
		paths: {
			enquire: 'lib/enquire.min',
			jquery: 'vendor/jquery.min',
			responsiveTabs: 'lib/jquery.responsiveTabs.min',
			parsley: 'lib/parsley.min',
			parsleyBr: 'lib/pt-br',
			navAccordion: 'app/modules/navAccordion',
			mask: 'lib/jquery.mask.min',
			gmap3: 'lib/gmap3.min',
			googleMapsApi: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBbYLuu7vM9s_mvGSINkzlwGlZ5HHfDQVg',
			slick: 'lib/slick.min',
			superFish: 'lib/superfish.min',
			hoverIntent: 'lib/hoverIntent',
			accordion: 'lib/accordion.min',
			lightSlider: 'lib/lightslider.min',
			lightGallery: 'lib/lightgallery.min',
			lgThumbnail: 'lib/lg-thumbnail.min',
			sticky: 'lib/jquery.sticky',
			semanticUiSidebar: 'lib/sidebar.min',
			bundle : 'bundle/general',
			functions : 'app/functions'
		},
		shim: {
		    "parsleyBr": ["parsley"]
		}
	});
	
})();
