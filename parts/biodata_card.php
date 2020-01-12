<form id="biodata_submit">
  <div class="card card--biodata">
    <div class="card__header">
      <h3 class="card__heading heading__tertiary">biodata</h3>
      <svg class="card__logo">
        <use xlink:href="images/sprite.svg#icon-user-plus"></use>
      </svg>
    </div>
    <div class="card__body">
      <div class="card__input" id="bio_name">
        <input type="text" name="bio_name" value="" placeholder="Full Name" required>
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="bio_name-error hint"></div>
      </div>
      <div class="card__input" id="bio_email">
        <input type="email" name="bio_email" value="" placeholder="Email">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="bio_email-error hint"></div>
      </div>
      <div class="card__input" id="bio_phone">
        <input type="text" name="bio_phone" value="" placeholder="Mobile Number">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="bio_phone-error hint"></div>
      </div>
      <div class="card__input" id="bio_whatsapp">
        <input type="text" name="bio_whatsapp" value="" placeholder="Whatsapp Number">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="bio_whatsapp-error hint"></div>
      </div>
      <div class="card__input" id="bio_college">
        <input type="text" name="bio_college" value="" placeholder="College Name">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="bio_college-error hint"></div>
      </div>
      <div class="card__input" id="bio_state">
        <input type="text" name="bio_college" value="" placeholder="College State">
        <svg class="card__input icon icon--success">
          <use xlink:href="images/sprite.svg#icon-check-circle"></use>
        </svg>
        <div class="bio_address-error hint"></div>
      </div>
      <div class="card__submit">
        <button type="button" name="submit" class="btn btn--yellow" id="biodata-submit">Submit</button>
        <svg class="card__input icon icon--danger">
          <use xlink:href="images/sprite.svg#icon-loader"></use>
        </svg>
      </div>
    </div>
    <svg class="icon--danger card__close">
      <use xlink:href="images/sprite.svg#icon-clear"></use>
    </svg>
  </div>
</form>
