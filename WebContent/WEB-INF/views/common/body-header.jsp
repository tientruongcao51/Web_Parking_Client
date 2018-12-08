<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<header class="main-header" style="background-color: #048bcd">

	<!-- Logo -->
	<a href="/webgis" class="logo" style=" padding-bottom: 70px;padding-top: 5px;background-color: #066c9e">
	<span class="logo-mini"><img id="logo"
						src="/Web_Parking/img/iconCar.png"
						alt="logo" style="height: 28px"></span>
				<span class="logo-lg"><img id="logo"
						src="/Web_Parking/img/iconCar.png"
						alt="logo" style="height: 70px"></span>
	</a>
	<!-- Header Navbar: style can be found in header.less -->
	<nav class="navbar navbar-static-top">
		<!-- Sidebar toggle button-->
		<a href="#" class="sidebar-toggle" data-toggle="offcanvas" style="padding-top: 27px; padding-bottom: 26px;"
			role="button"> <span class="sr-only">Toggle navigation</span>
		</a>

		<div class="navbar-custom-menu" >
				<ul class="nav navbar-nav" style="padding-top: 20px;float: left !important;">
					<li>
					
					<div style="font-size:20px; font-weight:bold; margin-top: 0px; color: #eee">
									PARKING
								</div>
					
					</li>
				</ul>
			<ul class="nav navbar-nav" style="float:right !important;">
				<!-- Messages: style can be found in dropdown.less-->
				<!-- User Account: style can be found in dropdown.less -->
				<li class="dropdown user user-menu" style="padding-top: 10px;"><a style="padding-top: 20px;padding-bottom: 21px;" href="#"
					class="dropdown-toggle" data-toggle="dropdown"> <img
						src="../img/no_avatar.png" class="user-image" alt="User Image">
						<span class="hidden-xs">${sessionScope.user.getFullname() }</span>
				</a>
					<ul class="dropdown-menu">
						<!-- User image -->
						<li class="user-header" ><img src="../img/no_avatar.png"
							class="img-circle" alt="User Image">

							<p>
								${sessionScope.user.getFullname() } -
								${sessionScope.user.getUsername() } <small>Thành viên
									trang WebGIS</small>
							</p></li>
						<!-- Menu Body -->
						<!-- Menu Footer-->
						<li class="user-footer">
							<div class="pull-left">
								<a onclick="openInfo()" class="btn btn-default btn-flat">Thông
									tin</a>
							</div>
							<div class="pull-right">
								<a href="../admin/logout" class="btn btn-default btn-flat">Đăng
									xuất</a>
							</div>
						</li>
					</ul></li>
				<!-- Control Sidebar Toggle Button -->
				<!--  <li><a href="/webgis"><span
						class="glyphicon glyphicon-home" title="Trang chủ"></span></a></li>-->
			</ul>
		</div>
	</nav>
	<a id="openInfo" data-toggle="modal" data-target="#dialog-info-user"></a>
	<script type="text/javascript">
		function openInfo() {
			$('#openInfo').click();
		}
	</script>
	
   <link rel="shortcut icon" href="favicon.ico"/>

</header>
<div class="modal fade" id="dialog-info-user" role="dialog">
	<div class="modal-dialog ">
		<div class="modal-content">
			<div class="modal-header">
				<h4>Thông tin người dùng</h4>
			</div>
			<div class="modal-body">
				<div class="box-body">
					<table class="table">
						<tbody>

							<tr>
								<th style="width: 30%">Tài khoản :</th>
								<td>${sessionScope.user.getUsername() }</td>
							</tr>

							<tr>
								<th>Họ và tên :</th>
								<td>${sessionScope.user.getFullname() }</td>
							</tr>

							<tr>
								<th>Email :</th>
								<td>${sessionScope.user.getEmail() }</td>
							</tr>
							<tr>
								<th>Số điện thoại :</th>
								<td>${sessionScope.user.getPhone() }</td>
							</tr>

							<tr>
								<th>Đơn vị :</th>
								<td>${sessionScope.user.getUnitShortname() }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
			</div>
		</div>
	</div>
</div>