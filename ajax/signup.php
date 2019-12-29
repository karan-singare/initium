<?php require_once '../connection/db.php'; ?>

<?php
  if(isset($_POST['check_username'])) {
    $username = $_POST['check_username'];
    $sql = "select username from users where username = ?";
    $query = $db->prepare($sql);
    $query->execute([$username]);

    $feedback['msg'] = ($query->rowCount() == 0) ? "username_success" : "username_fail";
    echo json_encode($feedback);

  }

  if(isset($_POST['check_email'])) {
    $email = $_POST['check_email'];
    $sql = "select email from users where email = ?";
    $query = $db->prepare($sql);
    $query->execute([$email]);

    $feedback['msg'] = ($query->rowCount() == 0) ? "email_success" : "email_fail";
    echo json_encode($feedback);
  }

  if ($_GET['signup'] && $_GET['signup'] == 'true') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $sql = "insert into users (username, email, password) values (? ,?, ?)";
    $query = $db->prepare($sql);
    $query->execute([$username, $email, $password]);
    if ($query) {
      $_SESSION['username'] = $username;
      $feedback['msg'] = "signup_success";

      echo json_encode($feedback);
    }
  }

 ?>
