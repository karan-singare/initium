$(document).ready(function(){

	var username = "";
	var password = "";
	var email_reg = /^[a-z]+[0-9a-zA-Z_\.]*@[a-z_]+\.[a-z]+$/;
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
	// === Username/Email Validations ===


	$("#login-username").focusout(function(){
		var icon = $("#login-username svg");
		var username_store = $.trim($("#login-username [name='login-username']").val());

		if(username_store.length == ""){
			$(".login-username-error").html("Username/Email is required!");
      $(".login-username-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#login-username").add(new_icon);
			username = "";
		}else{
			$(".login-username-error").html("");
			$(".login-username-error").removeClass("error");

			let new_icon = icon_check(icon);
      $("#login-username").add(new_icon);
			username = username_store;
		}
	})//close email validations

    // === Password Validations ===
	$("#login-password").focusout(function(){
		var password_store = $.trim($("#login-password [name='login-password']").val());
		var icon = $("#login-password svg");
		if(password_store.length == ""){
			$(".login-password-error").html("Password is required!");
      $(".login-password-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#login-password").add(new_icon);

      password = "";
		}else{
			$(".login-password-error").html("");
      $(".login-password-error").removeClass("error");

      let new_icon = icon_check(icon);
      $("#password").add(new_icon);
      password = password_store;
		}
});//Password validation close


	// === Submit the login form ===
	$("#login-submit").click(function(){
		if(username.length == ""){
			$(".login-username-error").html("Username/Email is required!");
      $(".login-username-error").addClass("error");

      let new_icon = icon_notification(icon);
      $("#login-username").add(new_icon);
			username = "";
		}
		if(password.length == ""){
			$(".login-password-error").html("Password is required!");
			$(".login-password-error").addClass("error");

			let new_icon = icon_notification(icon);
			$("#login-password").add(new_icon);

			password = "";
		}
		if(password.length != "" && email.length != ""){
			$.ajax({
				type : 'POST',
				url  : 'ajax/login.php?login=true',
				data : $("#login_submit").serialize(),
				dataType : "JSON",
				success : function(feedback){
					if(feedback['error'] == 'success'){

						setTimeout(function(){
                          location = feedback['msg'];
						},2000);

					}else if(feedback['error'] == 'no_password'){
						$("#login-password").addClass("border-red");
						$("#login-password").removeClass("border-green");
						$(".login-error").html(feedback['msg']);
					}else if(feedback['error'] == 'no_email'){
						$("#login-email").removeClass("border-green");
						$("#login-email").addClass("border-red");
						$(".login-error").html(feedback['msg']);
					}
				}
			})
		}
	})

});
