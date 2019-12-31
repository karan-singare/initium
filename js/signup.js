$(document).ready(function(){
	var username     = "";
	var email    = "";
	var password = "";
	var confirm  = "";
	var name_reg = /^[a-z_-]+$/i;
  var email_reg = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;
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
	$("#username").focusout(function(){
    var icon = $("#username svg");
  	var username_store = $.trim($("#username [name='username']").val());

  	if(username_store.length == ""){
    	$(".username-error").html("Username is required!");
      $(".username-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#username").add(new_icon);

    	username = "";
  	}else if(name_reg.test(username_store)){
      $.ajax({
            type : 'POST',
            url  : 'ajax/signup.php',
            dataType : 'JSON',
            beforeSend : function(){
              $(".username-error").html("");
              $(".username-error").removeClass("error");

              let new_icon = icon_loader(icon);
              $("#username").add(new_icon);
            },
            data : {'check_username' : username_store},
            success : function(feedback){
              setTimeout(function(){
                if(feedback['msg'] == 'username_not_found'){
                  let new_icon = icon_check(icon);
                  new_icon.removeClass("loading");
                  $("#username").add(new_icon);

                  username = username_store;
              }else if(feedback['msg'] == 'username_found'){
                $(".username-error").html("Username already exists!");
                $(".username-error").addClass("error");
                let new_icon = icon_notification(icon);
                new_icon.removeClass("loading");
                $("#username").add(new_icon);

                username = "";
              }
						},1000);

            }
      });
  	}else{
      $(".username-error").html("Alphabates, dashes and hyphens only");
    	$(".username-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#username").add(new_icon);

    	username = "";
  	}

	})	//Close Name Validations


	// * === Email Validation === *
	$("#email").focusout(function(){
    var icon = $("#email svg");
		var email_store = $.trim($("#email [name='email']").val());

      if(email_store.length == ""){
        $(".email-error").html("Email is required!");
        $(".email-error").addClass("error");

        let new_icon = icon_notification(icon);
        $("#email").add(new_icon);

      	email = "";
      }else if(email_reg.test(email_store)){
        	$.ajax({
                type : 'POST',
                url  : 'ajax/signup.php',
                dataType : 'JSON',
                beforeSend : function(){
                  $(".email-error").html("");
                  $(".email-error").removeClass("error");

                  let new_icon = icon_loader(icon);
                  $("#email").add(new_icon);
                },
                data : {'check_email' : email_store},
                success : function(feedback){
                	setTimeout(function(){
                    if(feedback['msg'] == 'email_not_found'){
                      let new_icon = icon_check(icon);
                      new_icon.removeClass("loading");
                      $("#email").add(new_icon);

	                    email = email_store;
                	}else if(feedback['msg'] == 'email_found'){
                		$(".email-error").html("Email already exists!");
                    $(".email-error").addClass("error");
                    let new_icon = icon_notification(icon);
                    new_icon.removeClass("loading");
                    $("#email").add(new_icon);

                    email = "";
                	}
								},1000);

                }
        	});
      }else{
        $(".email-error").html("Invalid email");
      	$(".email-error").addClass("error");

        let new_icon = icon_notification(icon);
        $("#email").add(new_icon);

      	email = "";
      }
	})//Close Email Validations

	// Validate Password
  $("#password").focusout(function(){
    var icon = $("#password svg");
    var password_store = $.trim($("#password [name='password']").val());

    if(password_store.length == ""){
      $(".password-error").html("Password is required!");
      $(".password-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#password").add(new_icon);

      password = "";
    }else if(password_reg.test(password_store)){
      $(".password-error").html("");
      $(".password-error").removeClass("error");

      let new_icon = icon_check(icon);
      $("#password").add(new_icon);
      password = password_store;
    }else{
      $(".password-error").html("min 8 chars, use number, upper and lowercase atleast once");
      $(".password-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#password").add(new_icon);

      password = "";
    }

  })	//Close Password Validations

	// Validate Confimr Password
  $("#confirm").focusout(function(){
    var icon = $("#confirm svg");
    var confirm_store = $.trim($("#confirm [name='confirm']").val());

    if(confirm_store.length == ""){
      $(".confirm-error").html("Confirm Password is required!");
      $(".confirm-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#confirm").add(new_icon);

      confirm = "";
    }else if(confirm_store !== password){
      $(".confirm-error").html("Password does not match!");
      $(".confirm-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#confirm").add(new_icon);

      confirm = "";
    }else{
      $(".confirm-error").html("");
      $(".confirm-error").removeClass("error");

      let new_icon = icon_check(icon);
      $("#confirm").add(new_icon);
      confirm = confirm_store;
    }

  })	//Close Confirm Validations


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
