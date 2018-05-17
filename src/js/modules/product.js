var product = {
	getModal: function() {
		let lightGallery = require('lightgallery');
		let lgThumbnail = require('../../../node_modules/lightgallery/modules/lg-thumbnail');
	 	$(".js-lightgallery").lightGallery({
	 		download: false,
	 		thumbnail: false,
	 		selector: '.js-lightgallery-link',
	 		getCaptionFromTitleOrAlt: false,
	 		counter: false
	 	});

	 	$(".js-lightgallery-colors").lightGallery({
	 		download: false,
	 		thumbnail: false,
	 		selector: '.js-lightgallery-link',
	 		getCaptionFromTitleOrAlt: true,
	 		counter: true
	 	});
	},

	render: function() {
		this.getModal();
	}
}

module.exports = {
	init: product.render()
}