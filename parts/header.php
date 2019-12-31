<header class="header parallax--bg">

  <div class="header__main">
    <a href=".">
      <div class="header__brand brand">
        <div class="brand__logo">
          <img src="images/logo1.png" alt="site logo">
        </div>
      </div>
    </a>
    <ul class="header__main__nav nav">
        <!-- <a href="." class="nav__links"><li>Home</li></a> -->
        <a href="#about" class="nav__links scroll"><li>About Us</li></a>
        <a href="#sponsors" class="nav__links scroll"><li>Sponsors</li></a>
        <a href="#events" class="nav__links scroll"><li>Events</li></a>
        <a href="#management" class="nav__links scroll"><li>Contact Us</li></a>
        <a href="#gallery" class="nav__links scroll"><li>Gallery</li></a>
    </ul>
    <div class="header__main__btns">

      <?php if ($_SESSION['username']): ?>
        <a href="logout.php" class="header__btn btn btn--pink login">Logout</a>
      <?php else: ?>
        <button class="header__btn btn btn--pink login">Login</button>
        <button class="header__btn btn btn--pink register">Register</button>
      <?php endif; ?>

    </div>
  </div>

  <div class="header__details">
    <h1 class="heading__primary mb-md">
      Initium 6.0 Mining TechFest <span>IIEST</span> 2019
    </h1>
    <h3 class="heading__tertiary mb-md">
      Janurary 20-23, IIEST, Shibpur, botanical gardens,  howrah
    </h3>
    <button class="header__btn btn btn--violet login mb-sm">Register for events</button>
  </div>
</header>
