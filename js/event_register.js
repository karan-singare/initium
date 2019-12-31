$(document).ready(function() {
  $('.register-btn').click(function() {
    event_name = $(this).attr("name");

    $.ajax({
          type : 'POST',
          url  : 'ajax/event_register.php?event_register=true',
          dataType : 'JSON',
          data : {'event_name' : event_name},
          success : function(feedback){
            if (feedback['msg'] == 'login') {
              $('.message__text').text("Please Login to register for events.");

              $('.message').css({
                "visibility" : "visible",
                "animation"  : "shake 1s ease-in-out"
              });
            } else if (feedback['msg'] == 'registered') {
              $(`[name=${event_name}].register-btn`).css({ "display" : "none" });
              $(`[name=${event_name}].registered-btn`).css({ "display" : "block" });
            }
          }
    });
  });
  $('.registered-btn').click(function() {
    $('.message__text').text("You have already registered for this event");
    $('.message').css({
      "visibility" : "visible",
      "animation"  : "shake 1s ease-in-out"
    });

  });
});
