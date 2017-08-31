<?php require "@init.php"; ?>
<!doctype html>
<html lang="pt-BR">
    <?php include "_head.php" ?>   
    <body>
        <div id="panel" class="panel">
            <?php include "_header.php" ?>
            <main class="products main">
                <section class="section">
                    <div class="container">
                        <div class="products__header">
                            <h1 class="products__title">Nossos Produtos</h1>
                            <p>Os tubetes de PVC da UNI chegam ao mercado em diversas cores e dimensões, com as seguintes vantagens.</p>
                            <ul class="products-menu">
                                <li class="products-menu__item"><a href="page-products.php" class="products-menu__button">Tubetes</a></li>
                                <li class="products-menu__item"><a href="page-solutions.php" class="products-menu__button">Soluções</a></li>
                            </ul>
                            <hr>
                        </div>
                        <ul class="products-list">
                            <li class="products-list__item">
                                <div class="Card">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="Card-info">
                                                <h2 class="Card-title">Tubete 85 x 3,5 mm</h2>
                                                <h3>Principais vantagens</h3>
                                                <p>Reutilizáveis, resistentes à água, atóxicos, recicláveis, melhor custo-benefício.</p>
                                                <a href="page-product.php" class="Card-button">Mais informações</a>
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <a href="page-product.php" class="Card-link"><img src="images/temporary/product.jpg" class="Card-figure" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="products-list__item">
                                <div class="Card">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="Card-info">
                                                <h2 class="Card-title">Tubete 85 x 3,5 mm</h2>
                                                <h3>Principais vantagens</h3>
                                                <p>Reutilizáveis, resistentes à água, atóxicos, recicláveis, melhor custo-benefício.</p>
                                                <a href="page-product.php" class="Card-button">Mais informações</a>
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <a href="page-product.php" class="Card-link"><img src="images/temporary/product.jpg" class="Card-figure" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="products-list__item">
                                <div class="Card">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="Card-info">
                                                <h2 class="Card-title">Tubete 85 x 3,5 mm</h2>
                                                <h3>Principais vantagens</h3>
                                                <p>Reutilizáveis, resistentes à água, atóxicos, recicláveis, melhor custo-benefício.</p>
                                                <a href="page-product.php" class="Card-button">Mais informações</a>
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <a href="page-product.php" class="Card-link"><img src="images/temporary/product.jpg" class="Card-figure" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section fleet">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 offset-md-1 fleet__info">
                                <h2 class="fleet__title">Soluções em Plásticos para todo Brasil</h2>
                                <hr>
                                <p>A UNI atende empresas dos mais variados setores em todo o Brasil, possuindo frota própria para a entrega de seus produtos.
                                </p>
                                <img src="images/fleet-truck.jpg" class="fleet__truck" alt="Caminhão">
                            </div>
                            <div class="col-md-7">
                                <img src="images/fleet-map.jpg" class="fleet__map" alt="Mapa do Brasil">
                            </div>
                        </div>
                    </div>
                </section>
                <?php include 'partials/eco.php' ?>
            </main>
            <?php include "_footer.php" ?>
         </div>
        <?php include "partials/menuMobile.php" ?>
    </body>
</html>

