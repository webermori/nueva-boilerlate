<?php require "@init.php"; ?>
<!doctype html>
<html lang="pt-BR">
    <?php include "_head.php" ?>
    <body class="pusher">
        <div id="panel" class="panel">
            <?php include "_header.php" ?>
            <?php include "__source/pages/page_home.php" ?>
            <?php include "_footer.php" ?>
        </div>
        
        <?php include "inc/menuMobile.php" ?>
            
        <script data-main="js/app/main" src="js/vendor/require.js"></script>
    </body>
</html>
