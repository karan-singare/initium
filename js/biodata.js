$(document).ready(function(){
	var bio_name     = "";
	var bio_email    = "";
	var bio_phone    = "";
	var bio_whatsapp    = "";
	var bio_college    = "";
	var bio_state    = "";
	var name_reg = /^[a-z_-]+$/i;
  var email_reg = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;
  var phone_reg = /^[0-9]{10,}$/;
  var password_reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  function icon_notification(icon) {
    let url = icon.children().attr("xlink:href");
    let new_url = url.split("-")[0] + "-" + "notification";
    icon.children().attr("xlink:href", new_url);
    icon.removeClass("green-fill");
    icon.addClass("red-fill");
    return icon;
  }
  function icon_check(icon) {
    let url = icon.children().attr("xlink:href");
    let new_url = url.split("-")[0] + "-" + "check-circle";
    icon.children().attr("xlink:href", new_url);
    icon.addClass("green-fill");
    return icon;
  }
  function icon_loader(icon) {
    let url = icon.children().attr("xlink:href");
    let new_url = url.split("-")[0] + "-" + "loader";
    icon.children().attr("xlink:href", new_url);
    icon.addClass("loading");
    return icon;
  }
	 // === Name Validations ===
	$("#bio_name").focusout(function(){
    var icon = $("#bio_name svg");
  	var bio_name_store = $.trim($("#bio_name [name='bio_name']").val());

  	if(bio_name_store.length == ""){
    	$(".bio_name-error").html("Name is required!");
      $(".bio_name-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#bio_name").add(new_icon);

    	bio_name = "";
  	}else if(name_reg.test(bio_name_store)){
			let new_icon = icon_check(icon);
			$("#bio_name").add(new_icon);

			bio_name = bio_name_store;

  	}else{
      $(".bio_name-error").html("Alphabates only");
    	$(".bio_name-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#bio_name").add(new_icon);

    	bio_name = "";
  	}

	})	//Close Name Validations


	// * === Email Validation === *
	$("#email").focusout(function(){
    var icon = $("#bio_email svg");
		var bio_email_store = $.trim($("#bio_email [name='bio_email']").val());

      if(bio_email_store.length == ""){
        $(".bio_email-error").html("Email is required!");
        $(".bio_email-error").addClass("error");

        let new_icon = icon_notification(icon);
        $("#bio_email").add(new_icon);

      	bio_email = "";
      }else if(bio_email_reg.test(bio_email_store)){
				let new_icon = icon_check(icon);
				new_icon.removeClass("loading");
				$("#bio_email").add(new_icon);

				bio_email = bio_email_store;
      }else{
        $(".bio_email-error").html("Invalid email");
      	$(".bio_email-error").addClass("error");

        let new_icon = icon_notification(icon);
        $("#bio_email").add(new_icon);

      	bio_email = "";
      }
	})//Close Email Validations




    // * === Submit the form === *
	$("#signup-submit").click(function(){

    if(username.length == ""){
      var icon = $("#username svg");
      $(".username-error").html("Username is required!");
      $(".username-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#username").add(new_icon);
    }

    if(email.length == ""){
      var icon = $("#email svg");
      $(".email-error").html("Email is required!");
      $(".email-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#email").add(new_icon);
    }

    if(password.length == ""){
      var icon = $("#password svg");
      $(".password-error").html("Password is required!");
      $(".password-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#password").add(new_icon);

      password = "";
    }

    if(confirm.length == ""){
      var icon = $("#confirm svg");
      $(".confirm-error").html("Confirm Password is required!");
      $(".confirm-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#confirm").add(new_icon);

      confirm = "";
    }
    if(username.length != "" && email.length != "" && password.length != "" && confirm.length != ""){
    	$.ajax({
    		type : 'POST',
    		url  : 'ajax/signup.php?signup=true',
    		data : $("#signup_submit").serialize(),
    		dataType : 'JSON',
    		beforeSend : function(){
            $('.card__submit svg').addClass('loading');
    		},
    		success : function(feedback){
    			setTimeout(function(){
              if(feedback['msg'] == "signup_success"){
        				location = "index.php";
    			    }
    			},3000)
    		}
    	})
    }
	})

})
