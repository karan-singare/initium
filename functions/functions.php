<?php require_once '../connection/db.php'; ?>
<?php


  function check_username($username, $table = "users") {
    global $db;
    $sql = "select username from $table where username = ?";
    $query = $db->prepare($sql);
    $query->execute([$username]);

    return ($query->rowCount() != 0);
  }

  function check_email($email, $table = "users") {
    global $db;
    $sql = "select email from $table where email = ?";
    $query = $db->prepare($sql);
    $query->execute([$email]);

    return ($query->rowCount() != 0);
  }

 ?>
