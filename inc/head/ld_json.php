 <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Person",
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