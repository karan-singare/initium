<?php require_once '../connection/db.php'; ?>

<?php
  if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    if (isset($_GET['event_register']) && $_GET['event_register'] == 'true') {
      $event_name = $_POST['event_name'];
      $event_name .= ",";

      $sql = "select events from users where username = ?";
      $query = $db->prepare($sql);
      $query->execute([$username]);
      $results = $query->fetch(PDO::FETCH_OBJ);
      $db_event = $results->events;

      $event_name = $db_event . $event_name;


      $sql = "update users set events = ? where username = ?";
      $query =  $db->prepare($sql);
      $query->execute([$event_name, $username]);
      if ($query) {
        $feedback['msg'] = "registered";
      }
    }
  } else {
    $feedback['msg'] = "login";
  }

  echo json_encode($feedback);

 ?>
