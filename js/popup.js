$(document).ready(function() {
  $("#gallery img").click(function() {
    var src = this.src;
    document.getElementById("popup__img").setAttribute("src", src);
    document.getElementById("popup").setAttribute("open", true);



    $(".popup__close").click(function() {
      document.getElementById("popup").removeAttribute("open");
    });

    $(".popup__close").click(function() {
      document.getElementById("popup").removeAttribute("open");
    });

    var arr1 = [];
    var index;
    arr1 = src.split("-");
    arr2 = arr1[1].split(".");
    index = arr2[0];
    index = parseInt(index);

    while (true) {
      index = (index < 8) ? index+1 : 1;
      src = arr1[0] + "-" + index + "." + arr2[1];
      index = index + 1;

      $(".popup__next").click(function() {
        document.getElementById("popup__img").setAttribute("src", src);
      });
    }



  });


});
