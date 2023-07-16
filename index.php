<?php

   
$arr = array(
    
        1 => 
    array('01-homepage.html', 'homepage', true),
    array('02-log-in.html', 'log in', false),
    array('03-sign-up.html', 'sign up', false),
    array('04-buy-guds.html', 'buy GUDS', false),
    array('04-buy-guds-confirm.html', 'buy GUDS (step 2)', false),
    array('04-buy-guds-success.html', 'buy GUDS (step 3)', false),
    array('05-mission.html', 'mission', true),

);

if (isset($_GET['q']) && isset($arr[ (int) $_GET['q'] ])) {
        
        $item = $arr[ (int) $_GET['q'] ];   
    
}


?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>GUDS / <?php print isset($item[1]) ? $item[1] : "index"; ?></title>
    <script src="static/js/jquery.min.js"></script>
    <script src="static/js/jquery-ui.min.js"></script>
    <script src="static/js/jquery.ui.touch-punch.min.js"></script>
    <script src="static/js/slick.min.js"></script>
    <link href="static/css/main.css?v<?php print time(); ?>" rel="stylesheet" type="text/css">
    <link href="static/css/account.css?v<?php print time(); ?>" rel="stylesheet" type="text/css">
    <link href="static/img/favicon.svg" rel="icon" type="image/svg+xml">
</head>

<body class="document loading">

    <?php
   
    
    if (isset($item)) {
        
     
        include("tpls/00-svg.html"); 
    
    
    ?>

    <div class="preloader"></div>

    <div class="container" id="view">

        <div class="headroom js-headroom">

            <div class="wrapper">
                <?php include("tpls/00-topbar.html"); ?>
            </div>

        </div>

        <div class="main">

            <div>

                <?php include( "tpls/" . $item[0] ); ?>

            </div>

        </div>

        <?php
        
        if (isset($item[2]) && $item[2]) {
        
        ?>

        <div class="footer">

            <div class="wrapper">

                <?php 
        
        include("tpls/00-footer.html");
        
    ?>


            </div>

        </div>

        <?php
        
        }
        
        ?>

    </div>

    <?php 
        
        include("tpls/00-popup-1.html");
        
    ?>


    <script src="static/js/gsap.min.js"></script>
    <script src="static/js/ScrollMagic.js"></script>
    <script src="static/js/animation.gsap.js"></script>

    <script src="static/js/demo.js?v<?php print time(); ?>"></script>


    <script>


    </script>


    <script>


    </script>


    <?php
        
    } else {
        
    ?>
    <table style="border-collapse:separate;border-spacing: 20px 10px;">


        <?php
        foreach ($arr as $k => $v) {
            
            
            print "<tr>";
            print "<td>".$k.".</td><td><a href=\"?q=".$k."&v=1\" style=\"cursor:pointer!important;\">".$v[0]."</a></td>";
            print "</tr>";
            
            
        }
        
    ?>

    </table>
    <script>
        $(".document").removeClass("loading");

    </script>

    <?php
        
    }
    
    
    
    ?>


</body>

</html>
