<main data-page="controller" data-custom-js="contato" class="contact main">
	<div class="container">
		<div class="row">
			<div class="col-md-12">Left</div>
			<div class="col-md-12">
				<div class="container-contact-form">
                    <form action="contato" data-ajax-action="contato-ajax" method="post" id="formContact" class="ui form contact-form">
                        <input type="hidden" name="contato_enviado" value="sim">

                        <div class="field">
                            <label for="formContact_nome" class="hide">Nome</label>
                            <input name="nome" placeholder="Nome *" id="formContact_nome" type="text" class="validate" required title="Digite seu nome" maxlength="50">
                        </div>
                        <div class="field">
                            <label for="formContact_email" class="hide">E-mail</label>
                            <input name="email" placeholder="E-mail *" id="formContact_email" type="email" class="validate" required title="Digite seu e-mail" maxlength="50">
                        </div>
                        <div class="field">
                            <label for="formContact_telefone" class="hide">Telefone</label>
                            <input name="telefone" placeholder="Telefone" id="formContact_telefone" type="text" class="validate" title="Digite seu telefone" maxlength="20">
                        </div>
                        
                        <div class="two fields">
                            <div class="field">
                                <label for="formContact_assunto" class="hide">Assunto</label>
                                <input name="assunto" placeholder="Assunto *" id="formContact_assunto" type="text" class="validate" required title="Digite o assunto da mensagem" maxlength="50">
                            </div>

                            <div class="field">
                                <label class="hide">State</label>
                                <select class="ui fluid dropdown">
                                    <option value="">State</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                </select>
                            </div>
                        </div>

                        <div class="field">
                            <label for="formContact_mensagem" class="hide">Mensagem</label>
                            <textarea name="mensagem" id="formContact_mensagem" placeholder="Mensagem *" class="materialize-textarea" required title="Digite sua mensagem" maxlength="1000"></textarea>
                        </div>

                        <div class="g-recaptcha" data-sitekey="6LfB1CkTAAAAAI7YiOfbp4sVpNagTz02s6xx9Ptn"></div>

                        <div class="field">
                            <input type="submit" value="Enviar" class="btn">
                        </div>
                    </form>
                </div>
			</div>
		</div>
	</div>
</main>