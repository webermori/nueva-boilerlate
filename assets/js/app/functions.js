function superFishMenu() {
	require(['hoverIntent', 'superFish'], function(){
		$('.main-menu').superfish();
	});
}

function semanticUi() {
	$('.ui.dropdown').dropdown();
}

function parsley() {
	require(['parsleyBr'], function(){
		$('#formContact').parsley();
	});
}

function facebook() {
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.7&appId=678010208943929";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

}

function sliderHome() {
	require(["slick"], function() {
		$('.slider-home').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 9000,
			fade: true
		});
	});
}

function slideOut() {
	require(["slideOut"], function(Slideout) {
		var slideout = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menuMobile'),
			'padding': 256,
			'tolerance': 70
		});

		// Toggle button
		document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
			slideout.open();
		});

		function close(eve) {
			eve.preventDefault();
			slideout.close();
		}

		slideout
			.on('beforeopen', function() {
				this.panel.classList.add('panel-open');
			})
			.on('open', function() {
				this.panel.addEventListener('click', close);
			})
			.on('beforeclose', function() {
				this.panel.classList.remove('panel-open');
				this.panel.removeEventListener('click', close);
			});
	});
}

function home() {
	$('.slider-home').find('.slick-dots').wrap('<div class="container"></div>');
}

function general() {

	require(["sticky"], function() {
		$(".header").stick_in_parent();
	});

}