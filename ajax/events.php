<?php
  require_once '../connection/db.php';

  if (isset($_SESSION['username'])) {
    if (isset($_GET['load'])) {
      $sql = "select events from users where username = ?";
      $query = $db->prepare($sql);
      $query->execute([$_SESSION['username']]);
      $result =  $query->fetch(PDO::FETCH_OBJ);
      $events = explode(",", $result->events);

      $temp = [];
      foreach ($events as $key => $value) {
        if ($value !== "") {
          $temp["$value"] = $value;
        }
      }
      $events = $temp;

      echo json_encode($events);

    }
  }

 ?>
