function headerSticky() {
	require(['sticky'], function(){
		$("#js-headerSticky").sticky();
	});
}

function superFishMenu() {
	require(['hoverIntent', 'superFish'], function(){
		$('.main-menu').superfish();
	});
}

function tabs() {
	require(['responsiveTabs'], function(){
		$('#js-tab-sectors').responsiveTabs({
		    startCollapsed: 'accordion'
		});
	});
}

function valida() {
	require(['parsleyBr'], function(){
		$('.valida-form').parsley();
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
		$('#js-sliderHome').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 4000,
			fade: true
		});
	});
}

function sidebarMenu() {
	require(['semanticUiSidebar'], function(){
		$('.js-triggerSidebar').on('click', function() {
			$('.ui.sidebar').sidebar('toggle');
		});
	})

	 require(['navAccordion'], function(){
		jQuery('.menu-mobile').navAccordion({
			expandButtonText: '<span>+</span>',  //Text inside of buttons can be HTML
			collapseButtonText: '<span>-</span>'
		});
	});

}

function home() {
	$('.slider-home').find('.slick-dots').wrap('<div class="container"></div>');
}

function accordion() {
	require(['accordion'], function(){
		// var el = document.querySelector(".accordion");
		// new Accordion(el);

		$('.ui.accordion').accordion();
	})
}

function mask() {
	require(['mask'], function(){
		var elTel = document.getElementsByClassName('js-maskTel');
		var elCep = document.getElementsByClassName('js-maskCep');
		if (elTel.length > 0) {
			var SPMaskBehavior = function (val) {
			  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
			},
			spOptions = {
			  onKeyPress: function(val, e, field, options) {
			      field.mask(SPMaskBehavior.apply({}, arguments), options);
			    }
			};

			$('.js-maskTel').mask(SPMaskBehavior, spOptions);
		} 

		if (elCep.length > 0) {
			$('.js-maskCep').mask('00000-000')
		}
	})
}

function recaptcha() {
	var injectScript = document.createElement('script');
	injectScript.setAttribute('src','https://www.google.com/recaptcha/api.js');
	document.head.appendChild(injectScript);
}

function googleMaps() {
	require(['googleMapsApi'], function(){
		require(['gmap3'], function(){
				
			// $.gmap3({
			// 	key: 'AIzaSyBbYLuu7vM9s_mvGSINkzlwGlZ5HHfDQVg'
			// });

			$(function(){
				var center = [-28.705048, -49.340490];

				$('#map').gmap3({
					center: center,
					scrollwheel: false,
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					// mapTypeId: "shadeOfGrey", // to select it directly
					//       mapTypeControlOptions: {
					//         mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
					//       }
				})

				// .styledmaptype(
				// 	"shadeOfGrey", [{
				// 		"featureType": "all",
				// 		"stylers": [{
				// 			"saturation": 0
				// 		}, {
				// 			"hue": "#e7ecf0"
				// 		}]
				// 	}, {
				// 		"featureType": "road",
				// 		"stylers": [{
				// 			"saturation": -70
				// 		}]
				// 	}, {
				// 		"featureType": "transit",
				// 		"stylers": [{
				// 			"visibility": "off"
				// 		}]
				// 	}, {
				// 		"featureType": "poi",
				// 		"stylers": [{
				// 			"visibility": "off"
				// 		}]
				// 	}, {
				// 		"featureType": "water",
				// 		"stylers": [{
				// 			"visibility": "simplified"
				// 		}, {
				// 			"saturation": -60
				// 		}]
				// 	}], {
				// 		name: "Shades of Grey"
				// 	}
				// )

				.marker({
					position: center,
					//icon: 'http://maps.google.com/mapfiles/marker_green.png'
					icon: './images/pin-map.png'
				})
				.infowindow({
					content: "UNI Plásticos"
				})
				.then(function(infowindow) {
					var map = this.get(0);
					var marker = this.get(1);
					marker.addListener('click', function() {
						infowindow.open(map, marker);
					});
				});
			});
		});
	});
}

function modalGallery() {
	 require(['lightGallery'], function() {
		 require(['lgThumbnail'], function() {
		 	$(".lightgallery").lightGallery({
		 		download: false,
		 		selector: '.open-modal',
		 		getCaptionFromTitleOrAlt: false,
		 		counter: false
		 	}); 
		 });
	 });
}

function lightSlider() {
	require(['lightSlider'], function() {
		$(".js-lightSlider").lightSlider({
			item: 1,
			loop: true
			//autoWidth: true,
		});
	});
}

function sliderContent() {
	require(['slick'], function() {
		$('.slick').slick({
			arrows: false,
			dots: true,
			speed: 500,
			autoplay: false,
			autoplaySpeed: 4000
		});

		$('.js-sliderContent').slick({
			dots: true,
			infinite: true,
			arrows: true,
			speed: 500,
			autoplay: false,
			autoplaySpeed: 4000,
			fade: false,
			responsive: [
			    {
			      breakpoint: 600,
			      settings: {
			        arrows: false,
			      }
			    }
			  ]
		});
	});
}

function buscaCep() {
	function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#formBudget_logradouro").val("");
        $("#formBudget_bairro").val("");
        $("#formBudget_cidade").val("");
        $("#formBudget_estado").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#formBudget_cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#formBudget_logradouro").val("...");
                $("#formBudget_bairro").val("...");
                $("#formBudget_cidade").val("...");
                $("#formBudget_uf").val("...");
                $("#formBudget_ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#formBudget_logradouro").val(dados.logradouro);
                        $("#formBudget_bairro").val(dados.bairro);
                        $("#formBudget_cidade").val(dados.localidade);
                        $("#formBudget_estado").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
}