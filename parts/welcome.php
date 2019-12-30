<?php if (isset($_SESSION['first_time_login'])): ?>
  <div class="welcome">
    Welcome to Initium 6.O, <?php echo $_SESSION['username']; ?>
  </div>
  <?php unset($_SESSION['first_time_login']); ?>
<?php endif; ?>
