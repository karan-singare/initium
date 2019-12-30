<form id="login_submit">
  <div class="card card--login">
    <div class="card__header">
      <h3 class="card__heading heading__tertiary">Login</h3>
      <svg class="card__logo">
        <use xlink:href="images/sprite.svg#icon-lock"></use>
      </svg>
    </div>
    <div class="card__body">
      <div class="card__input" id="login-username">
        <input type="text" name="login-username" value="" id="login-username" placeholder="Enter Username/Email">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="login-username-error hint"></div>
      </div>
      <div class="card__input" id="login-password">
        <input type="password" name="login-password" value="" id="login-password" placeholder="Enter Password">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-loader"></use>
        </svg>
        <div class="login-password-error hint"></div>
      </div>
      <div class="card__submit">
        <button type="button" name="submit" class="btn btn--violet" id="login-submit">Login</button>
        <svg class="card__input icon icon--danger">
          <use xlink:href="images/sprite.svg#icon-loader"></use>
        </svg>
      </div>
      <a href="#">Don't have an account?</a>
    </div>
    <svg class="icon--danger card__close">
      <use xlink:href="images/sprite.svg#icon-clear"></use>
    </svg>
  </div>
</form>
