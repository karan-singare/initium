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
  function icon_unlock(icon) {
    let url = icon.children().attr("xlink:href");
    let new_url = url.split("-")[0] + "-" + "unlock";
    icon.children().attr("xlink:href", new_url);
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
			var icon = $(".login-submit svg")
			$.ajax({
				type : 'POST',
				url  : 'ajax/login.php?login=true',
				data : $("#login_submit").serialize(),
				dataType : "JSON",
				beforeSend: function() {
					$('.card__submit svg').addClass("loading");
				},
				success : function(feedback){
					console.log(feedback);
					if(feedback['msg'] == 'login_success'){
						setTimeout(function(){
							$('.card__submit svg').removeClass("loading");
							new_icon = icon_check($('.card__submit svg'));
							$('.card__submit').add(new_icon);
							new_icon = icon_unlock($('.card__logo'));
							$('#login_submit .card__logo').add(new_icon);
						},2000);
						setTimeout(function(){
							location = "index.php";
						}, 2300);

					}else if(feedback['msg'] == 'wrong_password'){
						$('.card__submit svg').removeClass("loading");
						var icon = $("#login-password svg");
						$(".login-password-error").html("Incorrect Password!");
						$(".login-password-error").addClass("error");

						let new_icon = icon_notification(icon);
						$("#login-password").add(new_icon);

						password = "";
					}else if(feedback['msg'] == "username_not_found"){
						$('.card__submit svg').removeClass("loading");
						var icon = $("#login-username svg");
						$(".login-username-error").html("Username does not exist!");
			      $(".login-username-error").addClass("error");

			      let new_icon = icon_notification(icon);
			      $("#login-username").add(new_icon);
						username = "";
					}else if (feedback['msg'] == 'email_not_found') {
						$('.card__submit svg').removeClass("loading");
						var icon = $("#login-username svg");
						$(".login-username-error").html("Email does not exist!");
			      $(".login-username-error").addClass("error");

			      let new_icon = icon_notification(icon);
			      $("#login-username").add(new_icon);
						username = "";
					}
				}
			})
		}
	})

});
