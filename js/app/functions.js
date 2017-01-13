function semanticUi() {
	$('.ui.dropdown').dropdown();
}

function valida() {
	$('#formContact').parsley();
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

function home() {
	$('.home').append('<h1>Weber</h1>');
	$('.home').find('.header__logo-container').addClass('fadeInDown animated');
	$('.slider-home').find('.slick-dots').wrap('<div class="container"></div>');
}

function general() {

	require(["sticky"], function() {
		$(".header").stick_in_parent();
	});


}