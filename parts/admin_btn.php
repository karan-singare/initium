<?php require_once 'connection/db.php'; ?>
<?php
  if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $query = $db->prepare("select admin from users where username = ?");
    $query->execute([$username]);
    $result = $query->fetch(PDO::FETCH_OBJ);

    if ($result->admin == "true") {
      echo "<a href='admin' class='btn btn--pink admin-btn'>View data</a>";
    }

  }
?>
