$(document).ready(function() {



  var about_top = $('.about').offset().top;
  var current_top = $(window).scrollTop();

  // console.log(about_top);

  $(window).scroll(function() {
    var window_top = $(this).scrollTop();
    if (Math.ceil(window_top) === about_top) {
      console.log("hello");
    }
  });






});
