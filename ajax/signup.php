<?php
  if (isset($_POST['check_username'])) {
    $feedback['msg'] = "username_success";


    echo json_encode($feedback);
  }
  if (isset($_POST['check_email'])) {
    $feedback['msg'] = "email_success";


    echo json_encode($feedback);
  }

  if (isset($_GET['signup'])) {
    $feedback['username'] = $_POST['username'];
    $feedback['email'] = $_POST['email'];
    $feedback['password'] = $_POST['password'];
    $feedback['confirm'] = $_POST['confirm'];


    echo json_encode($feedback);
  }






 ?>
