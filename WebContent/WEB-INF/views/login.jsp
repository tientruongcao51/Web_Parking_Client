<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Hệ thống thông tin về ô nhiễm bom mìn tại Việt Nam</title>
<link rel="icon" href="/webgis/mockup-Images/vi-VN/logo_small.png" type="image/gif" sizes="16x16">
<!-- Tell the browser to be responsive to screen width -->
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
<!-- Bootstrap 3.3.6 -->
<link rel="stylesheet" href="/Web_Parking/bootstrap/css/bootstrap.min.css">
<!-- Font Awesome -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
<!-- Ionicons -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<!-- Theme style -->
<link rel="stylesheet" href="/Web_Parking/dist/css/AdminLTE.min.css">
<!-- iCheck -->
<link rel="stylesheet" href="/Web_Parking/plugins/iCheck/square/blue.css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body class="hold-transition login-page" style="background-image: url(/Web_Parking/img/bg2.jpg);">
	<div class="login-box">
		<div class="login-box-body">
			<p class="login-box-msg">Đăng nhập để bắt đầu phiên làm việc của bạn.</p>
			<form action="/Web_Parking/loginaction" method="get">
				<div class="form-group has-feedback">
					<input type="text" class="form-control" placeholder="Email"
						name="username"> <span class="form-control-feedback"><i
						class="fa fa-envelope" aria-hidden="true"></i></span>
				</div>
				<div class="form-group has-feedback">
					<input type="password" class="form-control" placeholder="Mật khẩu"
						name="password"> <span class="form-control-feedback"><i
						class="fa fa-unlock-alt" aria-hidden="true"></i></span>
				</div>
				<div class="row">
					<div class="col-xs-8">
						<div class="checkbox icheck">
							 <label> <input type="checkbox"> Lưu mật khẩu
							</label>
						</div>
					</div>
					<!-- /.col -->
					<div class="col-xs-4">
						<button type="submit" class="btn btn-primary btn-block btn-flat" style="padding-left:2px; padding-right:2px;">Đăng
							Nhập</button>
					</div>
					<!-- /.col -->
				</div>
			</form>
			<div class="social-auth-links text-center">
				<a style="padding-left: 115px;" href="/parking"
					class="btn btn-block btn-social btn-facebook btn-flat"><i
					class="fa  fa-home"></i>TRANG CHỦ</a>
			</div>

		 	<a href="#">Quên mật khẩu ?</a><br> <a href="register.html"
				class="text-center">Đăng kí người dùng mới </a> 
		</div>
	</div>

	<!-- jQuery 2.2.3 -->
	<script src="/Web_Parking/plugins/jQuery/jquery-2.2.3.min.js"></script>
	<!-- Bootstrap 3.3.6 -->
	<script src="/Web_Parking/bootstrap/js/bootstrap.min.js"></script>
	<!-- iCheck -->
	<script src="/Web_Parking/plugins/iCheck/icheck.min.js"></script>
	<script>
		$(function() {
			$('input').iCheck({
				checkboxClass : 'icheckbox_square-blue',
				radioClass : 'iradio_square-blue',
				increaseArea : '20%' // optional
			});
		});
	</script>
</body>
</html>
