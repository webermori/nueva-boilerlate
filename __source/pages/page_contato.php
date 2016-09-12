<main class="contact main">
	<div class="container">
		<div class="row">
			<div class="col s24 m12">Left</div>
			<div class="col s24 m12">
				<div class="container-contact-form">
                    <form action="contato" data-ajax-action="contato-ajax" method="post" id="formContact" class="ui form contact-form">
                        <input type="hidden" name="contato_enviado" value="sim">

                        <div class="field">
                            <label for="formContact_nome" class="hide">Nome</label>
                            <input name="nome" placeholder="Nome *" id="formContact_nome" type="text" class="validate" required title="Digite seu nome">
                        </div>
                        <div class="field">
                            <label for="formContact_email" class="hide">E-mail</label>
                            <input name="email" placeholder="E-mail *" id="formContact_email" type="email" class="validate" required title="Digite seu e-mail">
                        </div>
                        <div class="field">
                            <label for="formContact_telefone" class="hide">Telefone</label>
                            <input name="telefone" placeholder="Telefone" id="formContact_telefone" type="text" class="validate" title="Digite seu telefone">
                           
                        </div>
                        <div class="field">
                            <label for="formContact_assunto" class="hide">Assunto</label>
                            <input name="assunto" placeholder="Assunto *" id="formContact_assunto" type="text" class="validate" required title="Digite o assunto da mensagem">
                        </div>
                        <div class="field">
                            <label for="formContact_mensagem" class="hide">Mensagem</label>
                            <textarea name="mensagem" id="formContact_mensagem" placeholder="Mensagem *" class="materialize-textarea" required title="Digite sua mensagem"></textarea>
                           
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

<script src='https://www.google.com/recaptcha/api.js'></script>