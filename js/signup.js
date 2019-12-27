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
      $(".username-error").html("");
      $(".username-error").removeClass("error");

      let new_icon = icon_check(icon);
      $("#username").add(new_icon);

  	  username = username_store;
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
		var email_store = $.trim($("#email").val());
        if(email_store.length == ""){
        $(".email-error").html("Email is required!");
	    $("#email").addClass("border-red");
	    $("#email").removeClass("border-green");
	    email = "";
        }else if(email_reg.test(email_store)){
        	$.ajax({
                type : 'POST',
                url  : 'ajax/signup.php',
                dataType : 'JSON',
                beforeSend : function(){
                $(".email-error").html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
                },
                data : {'check_email' : email_store},
                success : function(feedback){
                	setTimeout(function(){
                    if(feedback['error'] == 'email_success'){
                		$(".email-error").html("<div class='text-success'><i class='fa fa-check-circle'></i> available</div>");
	                    $("#email").addClass("border-green");
	                    $("#email").removeClass("border-red");
	                    email = email_store;
                	}else if(feedback['error'] == 'email_fail'){
                		$(".email-error").html("Sorry this email is already exist!");
	                    $("#email").addClass("border-red");
	                    $("#email").removeClass("border-green");
	                    email = "";
                	}
                	},3000);

                }
        	});
        }else{
        $(".email-error").html("Invalid Email Formate!");
	    $("#email").addClass("border-red");
	    $("#email").removeClass("border-green");
	    email = "";
        }
	})//Close Email Validations

	// Validate Password
	$("#password").focusout(function(){
    var password_store = $.trim($("#password").val());
    if(password_store.length == ""){
    	$(".password-error").html("Password is required!");
    	$("#password").addClass("border-red");
	    $("#password").removeClass("border-green");
	    password = "";
    }else if(password_reg.test(password_store)){
        $(".password-error").html("<div class='text-success'><i class='fa fa-check-circle'></i> Your Password Is Strong!</div>");
    	$("#password").addClass("border-green");
	    $("#password").removeClass("border-red");
	    password = password_store;
    }else{
    	$(".password-error").html("8 characters or longer. Combine upper and lowercase letters and numbers");
    	$("#password").addClass("border-red");
	    $("#password").removeClass("border-green");
	    password = "";
    }
	})//Close Password Validations

	// Validate Confirm Password
	$("#confirm").focusout(function(){
     var confirm_store = $.trim($("#confirm").val());
     if(confirm_store.length == ""){
     $(".confirm-error").html("Confirm Password is required!");
     $("#confirm").addClass("border-red");
	 $("#confirm").removeClass("border-green");
	 confirm = "";
     } else if(confirm_store != password){
     $(".confirm-error").html("Password is not matched!");
     $("#confirm").addClass("border-red");
	 $("#confirm").removeClass("border-green");
	 confirm = "";
     }else{
     $(".confirm-error").html("");
     $("#confirm").addClass("border-green");
	 $("#confirm").removeClass("border-red");
	 confirm = confirm_store;
     }
	})//Close Confirm Password

    // * === Submit the form === *
	$("#submit").click(function(){
    if(name.length == ""){
    $(".name-error").html("Name is required!");
	$("#name").addClass("border-red");
	$("#name").removeClass("border-green");
	name = "";
    }

    if(email.length == ""){
    $(".email-error").html("Email is required!");
	$("#email").addClass("border-red");
	$("#email").removeClass("border-green");
	email = "";
    }

    if(password.length == ""){
    $(".password-error").html("Password is required!");
	$("#password").addClass("border-red");
	$("#password").removeClass("border-green");
	password = "";
    }

    if(confirm.length == ""){
    $(".confirm-error").html("Confirm Password is required!");
	$("#confirm").addClass("border-red");
	$("#confirm").removeClass("border-green");
	confirm = "";
    }
    if(name.length != "" && email.length != "" && password.length != "" && confirm.length != ""){
    	$.ajax({
    		type : 'POST',
    		url  : 'ajax/signup.php?signup=true',
    		data : $("#signup_submit").serialize(),
    		dataType : 'JSON',
    		beforeSend : function(){
            $(".show-progress").addClass('progress')
    		},
    		success : function(feedback){
    			setTimeout(function(){
               if(feedback['error'] == "success"){
    			location = feedback.msg;
    			}
    			},3000)
    		}
    	})
    }
	})

})






/*code for sliding in out of the login and signup card*/

$(document).ready(function() {

  $('.header__main__btns .register').click(function() {
    $('.card--signup').css({
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
    }, 300);
  });

  $('.header__main__btns .login').click(function() {
    $('.card--login').css({
      "visibility" : "visible",
      "animation" : "slideInRight .3s ease-in-out"
    });
  });

  $('.card--login a').click(function() {
    $('.card--login').css({"animation" : "slideOutUp .3s ease-in-out"});

    setTimeout(function(){
      $('.card--login').css({ "visibility" : "hidden"});
      $('.card--signup').css({
        "animation" : "slideInRight .3s ease-in-out",
        "visibility" : "visible"
      });
    }, 300);
  });

  $('.card__close').click(function() {
    $('.card').css({"animation" : "slideOutUp .3s ease-in-out"});
    setTimeout(function(){
      $('.card').css({ "visibility" : "hidden"});
    }, 300);
  });

});
