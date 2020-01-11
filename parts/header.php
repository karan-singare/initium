<header class="header parallax--bg">

  <div class="header__main">
    <a href="." class="site">
      <div class="header__brand brand">
        <div class="brand__logo">
          <img src="images/logos/logo.png" alt="site logo">
        </div>
      </div>
      <span class="site__details">
        <h1 class="site__name">department of mining engineering</h1>
        <h2 class="site__slogan">indian institue of engineering science and technology</h2>
      </span>
    </a>
    <ul class="header__main__nav nav">
        <a href="#about" class="nav__links scroll"><li>About Us</li></a>
        <a href="#sponsors" class="nav__links scroll"><li>Sponsors</li></a>
        <a href="#events" class="nav__links scroll"><li>Events</li></a>
        <a href="#management" class="nav__links scroll"><li>Contact Us</li></a>
        <a href="#gallery" class="nav__links scroll"><li>Gallery</li></a>
    </ul>
    <div class="header__main__btns">

      <?php if (isset($_SESSION['username'])): ?>
        <a href="logout.php" class="header__btn btn btn--pink login">Logout</a>
      <?php else: ?>
        <button class="header__btn btn btn--pink login">Login</button>
        <button class="header__btn btn btn--pink register">Signup</button>
      <?php endif; ?>

    </div>
  </div>


  <div class="header__details">
    <h1 class="heading__primary">
      initium 2020
    </h1>
    <div class="header__edtition">
      <h3 class="heading__tertiary">
        6th edition
      </h3>
    </div>
    <h5 class="mb-sm">
      the national mining tech festival
    </h5>
    <h4 class="mb-sm">
      5th - 6th february 2020
    </h4>
    <a href="#events" class="header__btn btn btn--violet login mb-sm scroll">Register for events</a>
    <button class="header__btn btn btn--violet login mb-sm">Tell us about you</button>
  </div>
</header>
