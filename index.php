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
                    </div>
                </main>
                <?php include "_footer.php" ?>
            </div>
            
        </div>
        <?php include "partials/menuMobile.php" ?>
    </body>
</html>
