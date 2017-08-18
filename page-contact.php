<?php require "@init.php";?>
<!doctype html>
<html lang="pt-BR">
    <?php include "_head.php" ?>   
    <body>
        <div class="pusher">
        	<div id="panel" class="panel">
    	        <?php include "_header.php" ?>
    	        <main data-page="controller" data-custom-js="contato" class="contact">
                    <section>
                        <div class="main">
                            <div class="container">
                                <h1 class="u-h1">Contato</h1>
                                <hr class="mb-4">
                                <div class="row">
                                    <section class="col-md-6">
                                        <ul class="contact-info">
                                            <li class="contact-info__item">
                                                <div class="CompanyInfo">
                                                    <div class="CompanyInfo-title">
                                                        <svg class="CompanyInfo-icon"><use xlink:href="#headset"></use></svg>
                                                            Fale Conosco
                                                    </div>
                                                    <div class="CompanyInfo-content">
                                                        <ul>
                                                            <li>
                                                                <div class="Tel">
                                                                    <span class="Tel-ddd">(48)</span>
                                                                    <span class="Tel-num">3439-9196</span>
                                                                </div>
                                                            </li>
                                                            <li>contato@uniplasticos.com.br</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="contact-info__item">
                                                <div class="CompanyInfo">
                                                    <div class="CompanyInfo-title">
                                                        <svg class="CompanyInfo-icon"><use xlink:href="#clock"></use></svg>
                                                        Horário de Atendimento
                                                    </div>
                                                    <div class="CompanyInfo-content">
                                                        8:00 às 12:00 - 13:30 às 18:00 <br>
                                                        <span class="small">(Segunda à sexta-feira)</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="contact-info__item">
                                                <div class="CompanyInfo">
                                                    <div class="CompanyInfo-title">
                                                        <svg class="CompanyInfo-icon"><use xlink:href="#pin"></use></svg>
                                                        Localização
                                                    </div>
                                                    <div class="CompanyInfo-content">
                                                        <address>
                                                            Rua Beija Flor, 180 <br>
                                                            Cristo Redentor - Criciúma/SC <br>
                                                            CEP: 88801-970
                                                        </address>
                                                        <span class="u-arrowRight"></span>
                                                        <a href="https://www.google.com.br/maps/dir//R.+Beija-Flor,+174+-+Cristo+Redentor,+Crici%C3%BAma+-+SC/@-28.7050377,-49.342769,17z/data=!4m16!1m7!3m6!1s0x952178cb8ff12477:0xad6b48d32f298a1!2sR.+Beija-Flor,+174+-+Cristo+Redentor,+Crici%C3%BAma+-+SC!3b1!8m2!3d-28.7050377!4d-49.3405803!4m7!1m0!1m5!1m1!1s0x952178cb8ff12477:0xad6b48d32f298a1!2m2!1d-49.3405803!2d-28.7050377" target="_blank" class="link-mapa">Como chegar</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="col-md-6">
                                        <div class="contact__heading-text">
                                             <p>Entre em contato com a nossa equipe preenchendo os campos abaixo.</p>
                                        </div>
                                        <div class="container-contact-form">
                                            <form action="" data-ajax-action="" method="post" id="formContact" class="contact-form valida-form">
                                                <input type="hidden" name="contato_enviado" value="sim">
                                                <div class="u-grid">
                                                    <div class="form-group u-grid__2">
                                                        <select name="" id="" class="form-control" required>
                                                            <option value="">Selecione o departamento *</option>
                                                            <option value="1">Financeiro</option>
                                                            <option value="2">Comercial</option>
                                                            <option value="3">Administrativo</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="u-hidden">Nome</label>
                                                    <input name="nome" placeholder="Nome *" id="formContact_nome" type="text" class="form-control validate" required title="Digite seu nome" maxlength="50">
                                                </div>
                                                <div class="u-grid">
                                                    <div class="form-group u-grid__2">
                                                        <label class="u-hidden">E-mail</label>
                                                        <input name="email" placeholder="E-mail *" id="formContact_email" type="email" class="form-control validate" required title="Digite seu e-mail" maxlength="50">
                                                    </div>
                                                    <div class="form-group u-grid__2">
                                                        <label class="u-hidden">Telefone</label>
                                                        <input name="telefone" placeholder="Telefone" id="formContact_telefone" type="text" class="form-control js-maskTel" title="Digite seu telefone">
                                                    </div>
                                                </div>
                                                <div class="u-grid">
                                                    <div class="form-group u-grid__2">
                                                        <label class="u-hidden">Estado</label>
                                                        <select id="formContact_uf" name="formContact_uf" class="form-control" title="Selecione seu estado" required>
                                                            <option value="">Estado *</option>
                                                            <option value="AC">Acre</option>
                                                            <option value="AL">Alagoas</option>
                                                            <option value="AP">Amapá</option>
                                                            <option value="AM">Amazonas</option>
                                                            <option value="BA">Bahia</option>
                                                            <option value="CE">Ceará</option>
                                                            <option value="DF">Distrito Federal</option>
                                                            <option value="ES">Espírito Santo</option>
                                                            <option value="GO">Goiás</option>
                                                            <option value="MA">Maranhão</option>
                                                            <option value="MT">Mato Grosso</option>
                                                            <option value="MS">Mato Grosso do Sul</option>
                                                            <option value="MG">Minas Gerais</option>
                                                            <option value="PA">Pará</option>
                                                            <option value="PB">Paraíba</option>
                                                            <option value="PR">Paraná</option>
                                                            <option value="PE">Pernambuco</option>
                                                            <option value="PI">Piauí</option>
                                                            <option value="RJ">Rio de Janeiro</option>
                                                            <option value="RN">Rio Grande do Norte</option>
                                                            <option value="RS">Rio Grande do Sul</option>
                                                            <option value="RO">Rondônia</option>
                                                            <option value="RR">Roraima</option>
                                                            <option value="SC">Santa Catarina</option>
                                                            <option value="SP">São Paulo</option>
                                                            <option value="SE">Sergipe</option>
                                                            <option value="TO">Tocantins</option>
                                                        </select>

                                                    </div>
                                                    <div class="form-group u-grid__2">
                                                        <label class="u-hidden">Cidade</label>
                                                        <input name="cidade" placeholder="Cidade *" id="formContact_cidade" type="text" class="form-control" required title="Digite sua cidade" maxlength="20">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="u-hidden">Mensagem</label>
                                                    <textarea name="mensagem" id="formContact_mensagem" placeholder="Mensagem *" class="form-control u-expandTextarea" required title="Digite sua mensagem" maxlength="1000"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <div class="g-recaptcha" data-sitekey="6LfB1CkTAAAAAI7YiOfbp4sVpNagTz02s6xx9Ptn"></div>
                                                </div>
                                                <div class="g-recaptcha" data-sitekey="6LfB1CkTAAAAAI7YiOfbp4sVpNagTz02s6xx9Ptn"></div>
                                                <div class="form-group">
                                                    <input id="js-submit-button" type="submit" value="Enviar" class="btn btn-block btn-outline-primary">
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div id="map"></div>
                    </section>
                </main>
    	        <?php include "_footer.php" ?>
    	    </div>
            <?php include "partials/menuMobile.php" ?>
        </div>
    </body>
</html>