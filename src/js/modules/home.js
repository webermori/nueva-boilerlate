let lightSlider = require('lightslider');
let Home = {
	sliderHome: function() {
	 	$("#js-sliderHome").lightSlider({
			adaptiveHeight:true,
			speed: 800,
			item:1,
			slideMargin:0,
			loop:true
	 	});
	},

	sliderCompany: function() {
	 	$("#js-sliderCompany").lightSlider({
			adaptiveHeight: false,
			item:2,
			speed: 800,
			slideMargin: 10,
			loop: false,
			enableDrag: false
	 	});
	},

	parallax: function() {
		let parallax = require('jquery-parallax.js');
    $('.parallax-window').parallax({
        speed: 0.4
    });
	}
}

module.exports = {
	sliderHome: Home.sliderHome,
	sliderCompany: Home.sliderCompany,
	parallax: Home.parallax
}