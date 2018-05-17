<div class="footer-container">
	<div class="container">
        <div class="footer">
            <div class="row">
                <div class="col-md-4 col-lg-3">
                    <div class="footer-brand">
                        <img src="images/logo-company-inverse.png" class="footer-brand__logo" alt="Company">
                        <div class="footer-brand__desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatum enim a tempore atque mollitia.</p>  
                        </div> 
                    </div>
                </div>
                <div class="col-lg-3 hidden-md-down">
                    <div class="footer-info">
                        <h3 class="footer-info__title">Company</h3>  
                        <div class="footer-info__desc">
                            <ul class="footer-menu">
                                <?php include "partials/menuItems.php" ?>
                            </ul>
                        </div> 
                    </div>
                </div>
                <div class="col-md-4 col-lg-3">
                    <div class="footer-info">
                        <h3 class="footer-info__title">Atendimento</h3>  
                        <div class="footer-info__desc">
                            <?php include "partials/contactInfo.php" ?>
                        </div> 
                    </div>
                </div>
                <div class="col-md-4 col-lg-3">
                    <div class="footer-info">
                        <h3 class="footer-info__title">Localização</h3>  
                        <div class="footer-info__desc">
                            <div class="IconBox">
                            <svg class="IconBox-icon" title="Endereço"><use xlink:href="#address"></use></svg>
                                <div class="IconBox-content">
                                    <address>Rua Beija Flor, 180 <br>
                                    Cristo Redentor <br> Criciúma / SC <br>
                                    CEP: 88801-970</address>
                                    <span class="u-arrowRight"></span>
                                    <a href="https://www.google.com.br/maps/dir//R.+Beija-Flor,+174+-+Cristo+Redentor,+Crici%C3%BAma+-+SC/@-28.7050377,-49.342769,17z/data=!4m16!1m7!3m6!1s0x952178cb8ff12477:0xad6b48d32f298a1!2sR.+Beija-Flor,+174+-+Cristo+Redentor,+Crici%C3%BAma+-+SC!3b1!8m2!3d-28.7050377!4d-49.3405803!4m7!1m0!1m5!1m1!1s0x952178cb8ff12477:0xad6b48d32f298a1!2m2!1d-49.3405803!2d-28.7050377" target="_blank" class="link-mapa">Como chegar</a>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
<div class="footer-bottom-container">
	<div class="container">
		<footer class="footer-bottom">
	        <div class="row">
	            <div class="col-sm-8">
	                <p class="footer-bottom__copyrights">©<?php echo Date('Y') ?>. <strong>Company</strong> - Todos os direitos reservados.</p>
	            </div>
	            <div class="col-sm-4">
	                <a href="http://www.agencianueva.com.br/" class="footer-bottom__nueva" target="_blank" title="Agência Nueva - Revolução Criativa" uk-tooltip><img src="images/logo-nueva-wh.svg" alt="Agência Nueva - Revolução Criativa" /></a>
	            </div>
	        </div>
	    </footer>
	</div>
</div>
<div class="hidden-xs-up">
    <?php echo file_get_contents("images/svg-sprite/symbol/svg/sprite.symbol.svg") ?>
</div>

<script src="js/nva-bundle.js"></script>