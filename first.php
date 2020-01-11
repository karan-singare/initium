<?php
  session_start();
  if (isset($_GET['username']) && $_GET['username'] == 'karan') {
    $_SESSION['username'] = "karan_singare";
  } else {
    echo "<h1><center>Website is under Development</center></h1>";
  }

 ?>
