<head>
     <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title><?php echo SITE_TITLE ?></title>
    <meta name="description" content="<?php echo SITE_DESCRIPTION ?>">
    <meta name="author" content="http://www.agencianueva.com.br">

    <meta property="og:locale" content="pt_BR">
    <meta property="og:url" content="<?php echo SITE_URL ?>">
    <meta property="og:title" content="<?php echo SITE_TITLE ?>">
    <meta property="og:image" content="<?php echo SITE_URL ?>/images/banner-facebook.png"/>
    <meta property="og:site_name" content="<?php echo SITE_NAME ?>">
    <meta property="og:description" content="<?php echo SITE_DESCRIPTION ?>">
    <meta property="og:type" content="website">

     <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "<?php echo SITE_NAME ?>",
          "url": "<?php echo SITE_URL ?>",
          "telephone": "(<?php echo SITE_TEL_DDD ?>) <?php echo SITE_TEL_NUM ?>",
          "email": "mailto:<?php echo SITE_EMAIL ?>",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "<?php echo ADDRESS_CIDADE ?>",
            "addressRegion": "<?php echo ADDRESS_UF ?>",
            "postalCode": "<?php echo ADDRESS_CEP ?>",
            "streetAddress": "<?php echo ADDRESS_LOGRADOURO ?>"
          }
        }
    </script>

    <meta name="theme-color" content="<?php echo MOBILE_BROWSER_COLOR ?>">
    <meta name="apple-mobile-web-app-status-bar-style" content="<?php echo MOBILE_BROWSER_COLOR ?>">
    <meta name="msapplication-navbutton-color" content="<?php echo MOBILE_BROWSER_COLOR ?>">

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo BASEPATH ?>css/<?php echo SITE_PREFIX ?>-styles.css?v=<?php echo CSS_VERSION ?>">
    <!--[if lt IE 8]>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/modernizr.js"><\/script>')</script>
        <![endif]-->

</head>
