<form id="signup_submit" >
  <div class="card card--signup">
    <div class="card__header">
      <h3 class="card__heading heading__tertiary">Signup</h3>
      <svg class="card__logo">
        <use xlink:href="images/sprite.svg#icon-user-plus"></use>
      </svg>
    </div>
    <div class="card__body">
      <div class="card__input" id="username">
        <input type="text" name="username" value="" placeholder="Enter Username">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="username-error hint">Alphabates, dashes and hyphens only</div>
      </div>
      <div class="card__input" id="email">
        <input type="email" name="email" value="" placeholder="Enter Email">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="email-error hint"></div>
      </div>
      <div class="card__input" id="password">
        <input type="password" name="password" value="" placeholder="Enter Password">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-loader"></use>
        </svg>
        <div class="password-error hint">min 8 chars, use number, upper and lowercase atleast once</div>
      </div>
      <div class="card__input" id="confirm">
        <input type="password" name="confirm" value="" placeholder="Confirm Password">
        <svg class="card__input icon icon--danger">
          <!-- <use xlink:href="images/sprite.svg#icon-check-circle"></use> -->
          <use xlink:href="images/sprite.svg#icon-notification"></use>
        </svg>
        <div class="confirm-error hint"></div>
      </div>

      <div class="card__submit">
        <button type="button" name="submit" class="btn btn--violet" id="signup-submit">Signup</button>
        <svg class="card__input icon icon--danger">
          <use xlink:href="images/sprite.svg#icon-loader"></use>
        </svg>
      </div>
      <a href="#">Already have an account?</a>
    </div>
    <svg class="icon--danger card__close">
      <use xlink:href="images/sprite.svg#icon-clear"></use>
    </svg>
  </div>
</form>
