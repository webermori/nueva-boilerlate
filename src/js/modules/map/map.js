let gmap3 = require('gmap3');

function getMap() {
	$.gmap3({
		key: 'AIzaSyBbYLuu7vM9s_mvGSINkzlwGlZ5HHfDQVg'
	});

	var center = [-28.381362, -49.283261];
    let mapTheme = require('./mapTheme');
	$('#map').gmap3({
		center: center,
		scrollwheel: false,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeId: "shadeOfGrey", // to select it directly
		      mapTypeControlOptions: {
		        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
		      }
	})

	.styledmaptype(
		"shadeOfGrey", mapTheme, {
			name: "Cropac"
		}
	)

	.marker({
		position: center,
		//icon: 'http://maps.google.com/mapfiles/marker_green.png'
	})
	// .infowindow({
	// 	content: "Your Company Name"
	// })
	.then(function(infowindow) {
		var map = this.get(0);
		var marker = this.get(1);
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
	});
}

module.exports = {  
    map: getMap()
}


