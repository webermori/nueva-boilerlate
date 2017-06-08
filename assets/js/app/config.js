;(function(undefined) {
	'use strict';

	require.config({
		baseUrl: 'js',
		paths: {
			jquery: '//code.jquery.com/jquery-1.12.0.min',
			maps: 'app/modules/google-maps',
			navAccordion: 'app/modules/navAccordion',
			recaptcha: 'app/modules/recaptcha_api',
			sticky: 'lib/jquery.sticky-kit.min',
			slick: 'lib/slick.min',
			semanticUi: 'lib/semantic-ui',
			//pushy: 'lib/pushy.min',
			slideOut: 'lib/slideout.min',
			superFish: 'lib/superfish.min',
			hoverIntent: 'lib/hoverIntent',
			functions : 'app/functions'
				// ,
				// semanticUiTransition : '../../bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui'
		}
		//    ,
		// shim: {
		//        "sticky": ["jquery"],
		//        "slick": ["jquery"]
		//    }
	});
	
})();
