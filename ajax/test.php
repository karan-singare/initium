<?php require_once '../connection/db.php'; ?>

<?php
  if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    if (isset($_GET['event_register']) && $_GET['event_register'] == 'true') {
      $feedback['msg'] = "hi";

      // echo json_encode($feedback);
    }
  }
  echo "hello";



 ?>
