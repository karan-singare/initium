<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Initium | TechFest of Mining Engineering</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" href="images/logo1.png">
</head>
<body>

  <?php require_once 'parts/message.php'; ?>

  <?php require_once 'parts/welcome.php'; ?>

  <?php require_once 'parts/collab.php'; ?>

  <?php require_once 'parts/info.php'; ?>

  <?php require_once 'parts/biodata_card.php'; ?>

  <?php require_once 'parts/signup_card.php'; ?>

  <?php require_once 'parts/login_card.php'; ?>


  <?php require_once 'parts/sticky_header.php'; ?>
  <?php require_once 'parts/admin_btn.php'; ?>

  <div class="container" id="top">

    <?php require_once 'parts/header.php'; ?>

    <?php require_once 'parts/about.php'; ?>

    <?php require_once 'parts/sponsors.php'; ?>
    <?php require_once 'parts/sponsors.php'; ?>

    <?php require_once 'parts/events.php'; ?>


    <?php require_once 'parts/management.php'; ?>

    <?php require_once 'parts/testimonials.php'; ?>

    <?php require_once 'parts/gallery.php'; ?>

    <?php require_once 'parts/footer.php'; ?>


  </div>



  <?php require_once 'parts/js_script.php'; ?>


</body>
</html>
