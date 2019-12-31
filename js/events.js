
$(document).ready(function() {
  /*events for login and signup card*/

  $('.header__main__btns .register').click(function() {
		let visibility =  $('.card--login').css("visibility");
		if (visibility == "hidden") {
			$('.card--signup').css({
			  "visibility" : "visible",
			  "animation" : "slideInRight .3s ease-in-out"
			});
		} else {
			$('.card--login').css({"animation" : "slideOutDown .3s ease-in-out"});

			setTimeout(function(){
	      $('.card--login').css({ "visibility" : "hidden"});
	      $('.card--signup').css({
	        "animation" : "slideInRight .3s ease-in-out",
	        "visibility" : "visible"
	      });
	    }, 500);
		}
  });

  $('.header__main__btns .login').click(function() {
		let visibility =  $('.card--signup').css("visibility");
		if (visibility == "hidden") {
			$('.card--login').css({
			  "visibility" : "visible",
			  "animation" : "slideInRight .3s ease-in-out"
			});
		} else {
			$('.card--signup').css({"animation" : "slideOutDown .3s ease-in-out"});

			setTimeout(function(){
	      $('.card--signup').css({ "visibility" : "hidden"});
	      $('.card--login').css({
	        "animation" : "slideInRight .3s ease-in-out",
	        "visibility" : "visible"
	      });
	    }, 500);
		}
  });


	/* events for stickey header buttons*/
  $('.sticky .btn--1').click(function() {
    $('.card--signup').css({
      "visibility" : "visible",
      "animation" : "slideInRight .3s ease-in-out"
    });
  });

	$('.sticky .btn--2').click(function() {
    $('.card--login').css({
      "visibility" : "visible",
      "animation" : "slideInRight .3s ease-in-out"
    });
  });

  $('.card--signup a').click(function() {
    $('.card--signup').css({"animation" : "slideOutUp .3s ease-in-out"});

    setTimeout(function(){
      $('.card--signup').css({ "visibility" : "hidden"});
      $('.card--login').css({
        "animation" : "slideInRight .3s ease-in-out",
        "visibility" : "visible"
      });
    }, 500);
  });


  $('.card--login a').click(function() {
    $('.card--login').css({"animation" : "slideOutUp .3s ease-in-out"});

    setTimeout(function(){
      $('.card--login').css({ "visibility" : "hidden"});
      $('.card--signup').css({
        "animation" : "slideInRight .3s ease-in-out",
        "visibility" : "visible"
      });
    }, 500);
  });

  $('.card__close').click(function() {
    $('.card').css({"animation" : "slideOutUp .3s ease-in-out"});
    setTimeout(function(){
      $('.card').css({ "visibility" : "hidden"});
    }, 500);
  });

  /*Events for event rules */

  $('.event__cover .info-btn').click(function() {
    let id = $(this).attr("info-id");
    $('#' + id).css({
      "visibility" : "visible",
      "animation" : "bounceIn 1s ease-in"
    });
    // console.log($('#' + id).children(".info__close"));
    $('#' + id).children(".info__close").click(function() {
      $('#' + id).css({
        "animation" : "hinge 1s ease-in"

      });
      setTimeout(function () {
        $('#' + id).css({
          "visibility" : "hidden"
        })
      },1000);
    })

  });

  /*event for associalted by*/
  $(window).scroll(function() {
    $(".collab").css({
      "animation" : "slideRight 1s ease-in",
      "visibility" : "hidden"
    });
    if ($(this).scrollTop() == 0) {
      $(".collab").css({
        "visibility" : "visible",
        "animation" : "pulse 1s ease-in"

      });
    }
  })





});
