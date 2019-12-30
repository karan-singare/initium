$(document).ready(function() {

  ScrollOut({
    targets: ".heading__primary",
    onShown: function(el) {
      el.classList.add("animated");
      el.classList.add("bounceInUp");
    },
    onHidden: function(el) {
      void el.offsetWidth;
      el.classList.remove("animated");
      el.classList.remove("bounceInUp");
    }
  });


});
