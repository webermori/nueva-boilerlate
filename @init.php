<?php
/**
 * Arquivo Inicialização do Site
 * @author Edvaldo da Rosa <fraterblack@bck.com.br>
 */

//Verifica se arquivo está sendo acessado diretamente
$base = pathinfo($_SERVER['PHP_SELF']);
$base = $base['basename'];
$self = pathinfo(__FILE__);
$self = $self['basename'];
if ($self == $base) {
    die('Este arquivo não pode ser acessado diretamente.');
}
if (!(version_compare(phpversion(), "5.4.0", ">="))) {
    die("Este sistema precisa do PHP versão 5.4.0 ou superior. Este servidor está instalado com a versão ". phpversion());
}

//REPORTAR ERROS
//error_reporting(E_ALL ^ E_NOTICE); //No ambiente de desenvolvimento ativar a exibição de erros
//error_reporting(0); //No ambiente de produção, desativar a exibição de erros para dificultar possíveis ataques

//DEFINE CONSTANTES ESSENCIAIS
define("BASEPATH", "http://192.168.1.108/nueva-boilerplate/");

define("CONFIG_AVISO_ERROS", false);
define("CONFIG_EMAIL_ADMINISTRADOR", "weber@agencianueva.com.br");

//DEFINE CONSTANTES ENVIO DE EMAIL
define("CONFIG_TIPO_ENVIO_EMAIL", "smtp"); //Tipo Envio (mail, smtp, sendmail)
define("CONFIG_TIPO_CONTEUDO", "text/html"); //Tipo Conteúdo (text/html, text/plain, multipart/mixed)
define("CONFIG_HOST_SMTP", "smtp.nueva-boilerplate.com.br"); //Host SMTP
define("CONFIG_USUARIO_SMTP", "site@nueva-boilerplate.com.br"); //Usuário SMTP
define("CONFIG_SENHA_SMTP", "ag0456nueva"); //Senha login SMTP
define("CONFIG_PORTA_SMTP", 587); //Porta Saída
define("CONFIG_DEBUG_SMTP", false); //Ativa/desativa debug
define("CONFIG_PATH_SENDMAIL", "/usr/sbin/sendmail"); //Diretório localização do programa sendmail

define("SITE_PREFIX", "nva");
define("SITE_FILE_NAME", "nueva-boilerplate");
define("MOBILE_BROWSER_COLOR", "#786941");

//Site Info
define("SITE_NAME", "Galeria RA");
define("SITE_URL", "http://www.nueva-boilerplate.com.br");
define("SITE_DOMAIN", "nueva-boilerplate.com.br");
define("SITE_EMAIL", "contato@nueva-boilerplate.com.br");
define("SITE_TEL_DDD", "48");
define("SITE_TEL_NUM", " 3045-4008");
define("SITE_CELULAR", "9908-9971");

//SEO
define("SITE_TITLE", "Nueva Boilerplate");
define("SITE_DESCRIPTION", "Nueva Boilerplate");

//Address
define("ADDRESS_LOGRADOURO", "Av. Santos Dumont, 2335");
define("ADDRESS_BAIRRO", "Bairro São Luiz ");
define("ADDRESS_CIDADE", "Criciúma");
define("ADDRESS_UF", "SC");
define("ADDRESS_CEP", "88.803-200");

//Social Links
define("SOCIAL_FACEBOOK_ID", "");
define("SOCIAL_TWITTER_ID", "");
define("SOCIAL_INSTAGRAM_ID", "");

//Google Maps
define("GOOGLE_MAP_LAT", "-28.692065");
define("GOOGLE_MAP_LON", "-49.371581");

//OUTRAS CONSTANTES DO SITE
define("JS_VERSION", "1.0");
define("CSS_VERSION", "1.0");

define("CONFIG_RECAPTCHA_SITE_KEY", "6LchpQcUAAAAAKKJkh-wEhkSlEA5oIUT_4xVAa9P");
define("CONFIG_RECAPTCHA_SECRET_KEY", "6LchpQcUAAAAAKyeIfp8i3YMojJ-x0qzCdUR87a_");

define("CONFIG_DESTINATARIO_CONTATO", "weber@agencianueva.com.br"); //Use vírgula para separar mais de um destinatário

//DATE ZONE
date_default_timezone_set('America/Sao_Paulo');

//GZIP
if (substr_count($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip')) {
    ob_start("ob_gzhandler");
} else {
    ob_start();
}

//Inicia Sessão
session_start();