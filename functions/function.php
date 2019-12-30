<?php

  function check_username($username, $table = "users") {
    $sql = "select $username from $table where username = ?";
    $query = $db->prepare($sql);
    $query->execute([$username]);

    return ($query->rowCount() == 0);
  }

  function check_email($email, $table = "users") {
    $sql = "select $email from $table where email = ?";
    $query = $db->prepare($sql);
    $query->execute([$email]);

    return ($query->rowCount() == 0);
  }



 ?>
