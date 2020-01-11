<?php
    if (session_status() !== PHP_SESSION_ACTIVE) {
      session_start();
    }
    $db = new PDO('mysql:host=localhost;dbname=initium','admin','Admin@123');
 ?>
