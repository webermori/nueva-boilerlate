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
                        <ul class="products-list">
                            <li class="products-list__item">
                                <div class="Card">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="Card-info">
                                                <h2 class="Card-title">Produto 01</h2>
                                                <dl class="Card-dl">
                                                    <dt>Principais vantagens</dt>
                                                    <dd>Reutilizáveis,</dd>
                                                    <dd>resistentes à água,</dd>
                                                    <dd>recicláveis,</dd>
                                                    <dd>melhor custo-benefício</dd>
                                                </dl>
                                                <a href="page-product.php" class="Card-button">Saiba mais</a>
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <a href="page-product.php" class="Card-link">
                                                <img src="https://api.fnkr.net/testimg/200x140/00CED1/FFF/?text=img+placeholder" class="Card-figure">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="products-list__item">
                                <div class="Card">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="Card-info">
                                                <h2 class="Card-title">Produto 01</h2>
                                                <h3>Principais vantagens</h3>
                                                <p>Reutilizáveis, resistentes à água, atóxicos, recicláveis, melhor custo-benefício.</p>
                                                <a href="page-product.php" class="Card-button">Saiba mais</a>
                                                
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
                                                <h2 class="Card-title">Produto 01</h2>
                                                <h3>Principais vantagens</h3>
                                                <p>Reutilizáveis, resistentes à água, atóxicos, recicláveis, melhor custo-benefício.</p>
                                                <a href="page-product.php" class="Card-button">Saiba mais</a>
                                                
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
                
            </main>
            <?php include "_footer.php" ?>
         </div>
        <?php include "partials/menuMobile.php" ?>
    </body>
</html>

