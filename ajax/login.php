<?php
  if (isset($_GET['login']) && $_GET['login'] == true) {
    $feedback['msg'] = "success";

    echo json_encode($feedback);
  }






 ?>
