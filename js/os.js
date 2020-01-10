$(document).ready(function() {
  /*
   *Checking the OS if it is windows and modifying the font-size
   */
  if (navigator.appVersion.indexOf("Win")!=-1) {
    $('html').css({"font-size" : "50.5%"});

    (function change_font_size() {
      largest = window.matchMedia('(max-width: 75em)').matches;
      android = window.matchMedia('(max-width: 43.75em)').matches;
      small = window.matchMedia('(max-width: 37.5em)').matches;

      if (largest === true) {
        $('html').css({"font-size" : "40.4%"});
      }
      if (android === true) {
        $('html').css({"font-size" : "36.36%"});
      }
      if (small === true) {
        $('html').css({"font-size" : "32.32%"});
      }
    })();

    $(window).resize(function() {
      largest = window.matchMedia('(max-width: 75em)').matches;
      android = window.matchMedia('(max-width: 43.75em)').matches;
      small = window.matchMedia('(max-width: 37.5em)').matches;

      if (largest === true) {
        $('html').css({"font-size" : "40.4%"});
      }  else {
        $('html').css({"font-size" : "50.5%"});
      }
      if (android === true) {
        $('html').css({"font-size" : "36.36%"});
      }
      if (small === true) {
        $('html').css({"font-size" : "32.32%"});
      }
    });
  }

  /*
   *Checking the the resolution if it is less than 1980*1024
   */

   if (window.screen.width < 1920 && window.screen.height < 1080) {
     $('html').css({"font-size" : "50.5%"});

     (function change_font_size() {
       default_size = window.matchMedia('(min-width: 75em)').matches;
       largest = window.matchMedia('(max-width: 75em)').matches;
       android = window.matchMedia('(max-width: 43.75em)').matches;
       small = window.matchMedia('(max-width: 37.5em)').matches;

       if (largest === true) {
         $('html').css({"font-size" : "40.4%"});
       }
       if (android === true) {
         $('html').css({"font-size" : "36.36%"});
       }
       if (small === true) {
         $('html').css({"font-size" : "32.32%"});
       }
       // if (default === true) {
       //   $('html').css({"font-size" : "50.5%"});
       // }
     })();

     $(window).resize(function() {
       largest = window.matchMedia('(max-width: 75em)').matches;
       android = window.matchMedia('(max-width: 43.75em)').matches;
       small = window.matchMedia('(max-width: 37.5em)').matches;

       if (largest === true) {
         $('html').css({"font-size" : "40.4%"});
       } else {
         $('html').css({"font-size" : "50.5%"});
       }
       if (android === true) {
         $('html').css({"font-size" : "36.36%"});
       }
       if (small === true) {
         $('html').css({"font-size" : "32.32%"});
       }
     });
   }

});
