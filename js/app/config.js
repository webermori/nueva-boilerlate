;(function(undefined) {
	'use strict';

	require.config({
		baseUrl: 'js',
		paths: {
			jquery: 'vendor/jquery-1.12.0.min',
			parsley: 'lib/parsley.min',
			parsleyBr: 'lib/pt-br',
			maps: 'app/modules/google-maps',
			navAccordion: 'app/modules/navAccordion',
			recaptcha: 'app/modules/recaptcha_api',
			sticky: 'lib/jquery.sticky-kit.min',
			slick: 'lib/slick.min',
			slideOut: 'lib/slideout.min',
			superFish: 'lib/superfish.min',
			hoverIntent: 'lib/hoverIntent',
			uikit: 'lib/uikit.min',
			functions : 'app/functions'
		},
		shim: {
		    "parsleyBr": ["parsley"]
		}
	});
	
})();
