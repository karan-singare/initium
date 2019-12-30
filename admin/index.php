<?php session_start(); ?>
<?php require_once '../connection/db.php'; ?>
<?php
  $username = $_SESSION['username'];

  $query = $db->prepare("select admin from users where username = ?");
  $query->execute([$username]);

  $result = $query->fetch(PDO::FETCH_OBJ);

  if ($result->admin == "false") {
    header("location: ../index.php");
  }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Initium | TechFest of Mining Engineering</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" href="images/logo1.png">
</head>
<body>


  <div class="admin">
    <h3 class="admin__heading">Participants</h3>
    <table class="participants">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Events</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
        <?php

          $query = $db->prepare("select * from users where admin = 'false'");
          $query->execute([]);
          $results = $query->fetchAll(PDO::FETCH_OBJ);
          foreach ($results as $result) {
            echo "<tr>";
            echo "<td>{$result->username}</td>";
            echo "<td>{$result->email}</td>";
            echo "<td>{$result->events}</td>";
            echo "</tr>";
          }
         ?>
      </tbody>
    </table>

  </div>

</body>
</html>
