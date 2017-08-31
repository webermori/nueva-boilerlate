<?php require "@init.php"; ?>
<!doctype html>
<html lang="pt-BR">
    <?php include "_head.php" ?>
    <body>
        <div class="pusher">
            <div id="panel" class="panel">
                <?php include "_header.php" ?>
                <main class="home" data-custom-js="home" >
                    <section id="js-sliderHome" class="BannerSlider">
                        <div class="BannerSlider-item">
                            <div class="BannerSlider-stage">
                                <img src="https://api.fnkr.net/testimg/1920x450/333333/FFF/?text=Banner 2">
                            </div>
                        </div>
                        <div class="BannerSlider-item">
                            <div class="BannerSlider-stage">
                                <img src="https://api.fnkr.net/testimg/1920x450/999999/FFF/?text=Banner 2">
                            </div>
                        </div>
                    </section>

                    <div class="main">
                        <div class="container">
                            <h1>Home</h1>
                        </div>

                        <section class="home-clients">
                            <div class="container">
                            <h2 class="home-clients-title">Nossos Clientes</h2>
                                <div class="clientsCarousel js-client-carousel">
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                    <div class="clientsCarousel__item"><img src="https://api.fnkr.net/testimg/156x110/cccccc/FFF/?text=logo"></div>
                                </div>
                            </div>
                        </section>

                        <section class="l-services__related">
                            <div class="container">
                                <h2 class="l-services__related__title">Outros Serviços</h2>
                                <ul class="l-services__related__item-container">
                                    <li class="l-services__related__item">
                                        <div class="Overlay">
                                            <a href="page-services.php" class="Overlay-link">
                                                <img  class="Overlay-figure" src="https://api.fnkr.net/testimg/320x265/00CED1/FFF/?text=img+placeholder">
                                                <div class="Overlay-mask">
                                                    <div class="Overlay-info">
                                                        <h2 class="Overlay-title">Pacote de viagens</h2>
                                                        <p class="Overlay-desc">Serviço de busca rápida por passagens
                        por mais de 60 fornecedores</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="l-services__related__item">
                                        <div class="Overlay">
                                            <a href="page-services.php" class="Overlay-link">
                                                <img  class="Overlay-figure" src="https://api.fnkr.net/testimg/320x265/00CED1/FFF/?text=img+placeholder">
                                                <div class="Overlay-mask">
                                                    <div class="Overlay-info">
                                                        <h2 class="Overlay-title">Pacote de viagens</h2>
                                                        <p class="Overlay-desc">Faça a viagem dos seus sonhos através dos melhores preços da Brasil Tropical</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="l-services__related__item">
                                        <div class="Overlay">
                                            <a href="page-services.php" class="Overlay-link">
                                                <img  class="Overlay-figure" src="https://api.fnkr.net/testimg/320x265/00CED1/FFF/?text=img+placeholder">
                                                <div class="Overlay-mask">
                                                    <div class="Overlay-info">
                                                        <h2 class="Overlay-title">Reserva em hotéis</h2>
                                                        <p class="Overlay-desc">Serviço de busca rápida por reserva 
                        em milhares de hotéis pelo mundo inteiro</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>



                        
                    </div>

                    
                </main>
                <?php include "_footer.php" ?>
            </div>
            
        </div>
        <?php include "partials/menuMobile.php" ?>
    </body>
</html>
