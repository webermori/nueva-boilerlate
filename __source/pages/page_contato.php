<main data-page="controller" data-custom-js="contato" class="contact main">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
                
            </div>
			<div class="col-md-12">
				<div class="container-contact-form">
                    <form action="contato" data-ajax-action="contato-ajax" method="post" id="formContact" class="contact-form">
                        <input type="hidden" name="contato_enviado" value="sim">
                        <div class="uk-margin">
                            <label for="formContact_nome" class="hide">Nome</label>
                            <input name="nome" placeholder="Nome *" id="formContact_nome" type="text" class="uk-input validate" required title="Digite seu nome" maxlength="50">
                        </div>
                        <div class="uk-margin">
                            <label for="formContact_email" class="hide">E-mail</label>
                            <input name="email" placeholder="E-mail *" id="formContact_email" type="email" class="uk-input validate" required title="Digite seu e-mail" maxlength="50">
                        </div>
                        <div class="uk-margin">
                            <label for="formContact_telefone" class="hide">Telefone</label>
                            <input name="telefone" placeholder="Telefone" id="formContact_telefone" type="text" class="uk-input validate" title="Digite seu telefone" maxlength="20">
                        </div>
                        <div class="uk-margin">
                            <label for="formContact_assunto" class="hide">Assunto</label>
                            <input name="assunto" placeholder="Assunto *" id="formContact_assunto" type="text" class="uk-input validate" required title="Digite o assunto da mensagem" maxlength="50">
                        </div>
                        <div class="uk-margin">
                            <label for="formContact_mensagem" class="hide">Mensagem</label>
                            <textarea name="mensagem" id="formContact_mensagem" placeholder="Mensagem *" class="uk-textarea" rows="5" required title="Digite sua mensagem" maxlength="1000"></textarea>
                        </div>
                        <div class="uk-margin">
                            <div class="g-recaptcha" data-sitekey="6LfB1CkTAAAAAI7YiOfbp4sVpNagTz02s6xx9Ptn"></div>
                        </div>
                        <div class="uk-margin">
                            <input type="submit" value="Enviar" class="uk-button uk-button-primary">
                        </div>
                    </form>
                </div>
			</div>
		</div>
	</div>
</main>