<?php require_once '../connection/db.php'; ?>
<?php require_once '../functions/functions.php'; ?>

<?php
  if(isset($_POST['check_username'])) {
    $username = $_POST['check_username'];

    $feedback['msg'] = (check_username($username)) ? "username_found" : "username_not_found";
    echo json_encode($feedback);

  }

  if(isset($_POST['check_email'])) {
    $email = $_POST['check_email'];

    $feedback['msg'] = (check_email($email)) ? "email_found" : "email_not_found";
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
      $_SESSION['first_time_login'] = "true";
      $feedback['msg'] = "signup_success";

      echo json_encode($feedback);
    }
  }

 ?>
<?php
  $username = "karan_singare";
  $email = "karan@mail.com";
  $password = "Karan123";
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
  $sql = "insert into users (username, email, password) values (? ,?, ?)";
  $query = $db->prepare($sql);
  $query->execute([$username, $email, $password]);
  if ($query) {
    $_SESSION['username'] = $username;
    $_SESSION['first_time_login'] = "true";
    $feedback['msg'] = "signup_success";

    echo json_encode($feedback);
  }

  


 ?>
