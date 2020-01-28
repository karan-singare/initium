$(document).ready(function() {
  /* Animation for header */

  gsap.from('.nav__links', {opacity: 0, duration: 1.2, x: -50, stagger: .2, delay: 1});
  gsap.from('.header__btn', {opacity: 0, duration: .4, x: -50, stagger: .2, delay: 2});
  $('.brand__logo').css({"animation" : "fadeIn 2.5s ease-in"});



  /* Animation for heading__primary */
  ScrollOut({
    targets: ".heading__primary",
    onShown: function(el) {
      el.classList.add("animated");
      el.classList.add("bounceIn");
    },
    onHidden: function(el) {
      void el.offsetWidth;
      el.classList.remove("animated");
      el.classList.remove("bounceIn");
    }
  });

  /* Animation for about us */
  ScrollOut({
    targets: ".about__details",
    onShown: function(el) {
      gsap.from('.about__details', {duration: 1, scale: .25});
    }
  });
  /* Animation for about us */
  ScrollOut({
    targets: ".collabs__content",
    onShown: function(el) {
      gsap.from('.collabs__item', {opacity: 0, duration: 1.2, x: -200, stagger: .4});
    }
  });
/* Animation for events */
    ScrollOut({
      targets: ".events__items",
      onShown: function(el) {
        gsap.from('.event', {opacity: 0, duration: 1.2, x: -200, stagger: .4});
      }
    });
    /* Animation for sponsor__item */
    ScrollOut({
      targets: ".sponsor__items",
      onShown: function(el) {
        gsap.from('.sponsor__item', {opacity: 0, duration: 1.6, y: -50, stagger: .2});
      }
    });
    /* Animation for sponsor__item */
    // ScrollOut({
    //   targets: ".team__members",
    //   onShown: function(el) {
    //     gsap.from('.member', {opacity: 0.5, duration: .4, y: -80, stagger: .05});
    //   }
    // });
    /* Animation for gallery */
    ScrollOut({
      targets: ".gallery",
      onShown: function(el) {
        gsap.from('.gallery__item', {opacity: 0, duration: 1.5, y: 100, stagger: .1});
      }
    });


    /* Animation for testimonials */
    ScrollOut({
      targets: ".testimonials",
      onShown: function(el) {
        gsap.from('.testimonial', {opacity: 0, duration: .9, x: 100, stagger: .3});
      }
    });
    /* Animation for footer */
    ScrollOut({
      targets: ".footer",
      onShown: function(el) {
        gsap.from('.footer__item', {opacity: 0, duration: 1.2, y: -100, stagger: .3});
      }
    });
    /* Header Slider */

    // var i = 1;
    // setInterval(function() {
    //   i++;
    //   let url = $('.header').css("background-image");
    //   let url_part = url.split('background/');
    //
    //   $('.header').css({
    //     'background-image' : `${url_part[0]}background/background${i}.jpg`
    //   });
    //
    //   if (i == 4) {
    //     i = 0;
    //   }
    // }, 3000);

    /* Animation for team member card */




});


/*
$(document).ready(function() {

  ScrollOut({
    targets: ".testimonials",
    onShown: function(el) {
      var testimonials = $('.testimonial');

      testimonials.each(function() {
        $(this).css({"animation-delay" : ".5s"});
        $(this).addClass("animated bounceInUp");
      });
    },
    onHidden: function(el) {
      void el.offsetWidth;
      var testimonials = $('.testimonial');

      testimonials.each(function() {
        $(this).removeClass("animated bounceInUp");
      });
    }
  });

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

*/
