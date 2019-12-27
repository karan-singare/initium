$(document).ready(function() {
  var scrollLink = $(".scroll");
  //Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  //Active links switch

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top;

      if ((sectionOffset-2) < scrollbarLocation) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      }
    });
  });
});
