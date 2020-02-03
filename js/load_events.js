$(document).ready(function() {

  $.ajax({
    url: "ajax/events.php?load=true",
    method: "post",
    dataType: "JSON",
    success: function(feedback) {
      events = Object.values(feedback);
      events.forEach(function(item) {
        $(`[name='${item}'].register-btn`).css({ "display": "none"});
        $(`[name='${item}'].registered-btn`).css({ "display": "block"});
      });

    }
  });


});
