const tag = document.querySelector('main'),
section = tag.getAttribute("data-custom-js");
var basePath = require('../helpers/base-url').init;
var lightSlider = require('lightslider');

var carousel = {
	todos: function () {
		$("#ajax-todos #products-list").lightSlider({
			item: 5,
	        loop: false,
	        slideMove: 5,
	        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
	        speed:600,
	        responsive : [
	            {
	                breakpoint: 991,
	                settings: {
	                    item: 3,
	                    slideMove: 3,
	                    slideMargin: 6,
	                  }
	            },
	            {
	                breakpoint:767,
	                settings: {
	                    item: 2,
	                    slideMove: 2
	                  }
	            }
	        ]
		}); 
	},
	canudos: function () {
		$("#ajax-canudos #products-list").lightSlider({
			item: 5,
	        loop: false,
	        slideMove: 5,
	        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
	        speed:600,
	        responsive : [
	            {
	                breakpoint:1199,
	                settings: {
	                    item: 5,
	                    slideMove:1,
	                    slideMargin:6,
	                  }
	            },
	            {
	                breakpoint: 991,
	                settings: {
	                    item:3,
	                    slideMove:1,
	                    slideMargin:6,
	                  }
	            },
	            {
	                breakpoint:767,
	                settings: {
	                    item:2,
	                    slideMove:1
	                  }
	            }
	        ]
		}); 
	},
	copos: function () {
		$("#ajax-copos #products-list").lightSlider({
			item: 5,
	        loop: false,
	        slideMove: 5,
	        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
	        speed:600,
	        responsive : [
	            {
	                breakpoint:1199,
	                settings: {
	                    item: 5,
	                    slideMove:1,
	                    slideMargin:6,
	                  }
	            },
	            {
	                breakpoint: 991,
	                settings: {
	                    item:3,
	                    slideMove:1,
	                    slideMargin:6,
	                  }
	            },
	            {
	                breakpoint:767,
	                settings: {
	                    item:2,
	                    slideMove:1
	                  }
	            }
	        ]
		}); 
	}
}

function getProducts() {
	let ajaxTodos = $("#ajax-todos"),
	ajaxCanudos = $("#ajax-canudos"),
	ajaxCopos = $("#ajax-copos");

	setTimeout(function(){
    	ajaxTodos.addClass('js-loader');
    }, 200);
	ajaxTodos.load(basePath + "/produtos #products-list", function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success") {
	        ajaxTodos.removeClass('js-loader');
        } if(statusTxt == "success" && section == "home") {
        	carousel.todos();
        }
        else if(statusTxt == "error") {
        	console.log('Erro em getProducts()!');
        }
    });
	$(".js-todos").click(function() {
		ajaxTodos.show().siblings().hide();
		ajaxTodos.removeClass('js-loader');
	});

	$(".js-canudos").one('click', function() {
	    setTimeout(function(){
	    	ajaxCanudos.addClass('js-loader');
	    },200);
	    ajaxCanudos.load(basePath + "/produtos/categoria/canudos #products-list", function(responseTxt, statusTxt, xhr){
	        if(statusTxt == "success") {
	        	ajaxCanudos.removeClass('js-loader');
	        } if(statusTxt == "success" && section == "home") {
	        	carousel.canudos();
	        } else if(statusTxt == "error") {
	        	console.log('Erro em getProducts()!');
	        }
	    });
	});
	$(".js-canudos").on('click', function() {
	    ajaxCanudos.show().siblings().hide();
	});

	$(".js-copos").one('click', function() {
		setTimeout(function(){
	    	ajaxCopos.addClass('js-loader');
	    },200);
	    ajaxCopos.load(basePath + "/produtos/categoria/copos #products-list", function(responseTxt, statusTxt, xhr){
	        if(statusTxt == "success") {
	        	ajaxCopos.removeClass('js-loader');
        	} if(statusTxt == "success" && section == "home") {
	        	carousel.copos();
	        }
	        else if(statusTxt == "error") {
	        	console.log('Erro em getProducts()!');
	        }
		});
	});
	$(".js-copos").on('click', function() {
	    ajaxCopos.show().siblings().hide();
	});
}


//exports.getProducts = getProducts;

module.exports = {
	init: getProducts()
}