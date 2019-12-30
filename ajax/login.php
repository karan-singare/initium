<?php include '../connection/db.php'; ?>
<?php include '../functions/functions.php'; ?>
<?php


function login(){
	GLOBAL $db;
	if($_GET['login_form'] && $_GET['login_form'] == 'true'){
		$email = $_POST['login_email'];
		$password = $_POST['login_password'];
		$Query = $db->prepare("SELECT * FROM users WHERE email = ?");
		$Query->execute(array($email));
		if($Query->rowCount() != 0){
        $r = $Query->fetch(PDO::FETCH_OBJ);
        $db_password = $r->password;
        if(password_verify($password, $db_password)){
        $id = $r->id;
        $_SESSION['user_id'] = $id;
        echo json_encode(['error' => 'success', 'msg' => 'profile/index.php']);
        }else{
        echo json_encode(['error' => 'no_password', 'msg' => 'Please Enter Correct Password!']);
        }
		}else{
			echo json_encode(['error' => 'no_email', 'msg' => 'Please Enter Correct Email!']);
		}
	}
}
	if (isset($_GET['login']) && $_GET['login'] == 'true') {
		$username = $_POST['login-username'];
		$password = $_POST['login-password'];


		if (filter_var($username, FILTER_VALIDATE_EMAIL)) {
			if (check_email($username)) {
					$sql = "select password, username from users where email = ?";
			} else {
				$feedback['msg'] = "email_not_found";
			}
		} elseif (check_username($username)) {
			$sql = "select password, username from users where username = ?";
		} else {
			$feedback['msg'] = "username_not_found";
		}

		if (check_username($username) || check_email($username)) {
			$query = $db->prepare($sql);
			$query->execute([$username]);

			if ($query->rowCount() != 0) {
				$data = $query->fetch(PDO::FETCH_OBJ);
				$db_password = $data->password;
				if (password_verify($password, $db_password)) {
					$_SESSION['username'] = $data->username;
					$_SESSION['first_time_login'] = "true";
					$feedback['msg'] = "login_success";
				} else {
					$feedback['msg'] = "wrong_password";
				}
			}
		}
		echo json_encode($feedback);

	}

 ?>
