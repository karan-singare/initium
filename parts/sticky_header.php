<div class="sticky">
  <img src="images/logo1.png" class="sticky__img">
  <ul class="sticky__nav nav">
      <!-- <a href="." class="active"><li>Home</li></a> -->
      <a href="#about" class="scroll"><li>About Us</li></a>
      <a href="#sponsors" class="scroll"><li>Sponsors</li></a>
      <a href="#events" class="scroll"><li>Events</li></a>
      <a href="#management" class="scroll"><li>Contact Us</li></a>
      <a href="#gallery" class="scroll"><li>Gallery</li></a>
      <?php if (isset($_SESSION['username'])): ?>
        <a href="logout.php" class="header__btn btn btn--pink login"><li>Logout</li></a>
      <?php else: ?>
        <button type="button" class="btn btn--pink btn--2"><li>Login</li></button>
        <button type="button" class="btn btn--pink btn--1"><li>Register</li></button>
        <button type="button" class="btn btn--pink btn--2 btn--login"><li>Login</li></button>
      <?php endif; ?>
  </ul>
</div>

<a href="#top" class="top scroll"><img src="images/circle-up.png" alt=""></a>
