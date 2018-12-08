<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
	<section class="sidebar">
		<!-- Sidebar user panel -->
		<!-- <div class="user-panel" style="padding-top: 40px;">
			<div class="pull-left image">
				<img src="../img/no_avatar.png" class="img-circle" alt="User Image">
			</div>
			<div class="pull-left info">
				<p>${sessionScope.user.getFullname() }</p>
				<a href="#"><i class="fa fa-circle text-success"></i>
					${sessionScope.user.getUsername() }</a>
			</div>
		</div> -->
		<!-- search form -->
		<!-- /.search form -->
		<!-- sidebar menu: : style can be found in sidebar.less -->
		<ul class="sidebar-menu tree" style="padding-top: 28px;"
			data-widget="tree">
				<li class="treeview"><a href="#"> <i class="fa fa-laptop"></i>
						<span>Quản trị hệ thống</span> <span class="pull-right-container">
							<i class="fa fa-angle-left pull-right"></i>
						</span></a>
					<ul class="treeview-menu">
						<li><a href="./webgisusergroup"><i class="fa fa-users"></i>Quản trị khách hàng</a></li>
						<li><a href="./webgisuser"><i class="fa fa-user"></i>Quản trị thẻ xe</a></li>
						<li><a href="./webgisconfig"><i class="fa fa-book"></i>Quản trị xe ra vào trong ngày</a></li>
						<li><a href="/webgis/admin/webgisevenlog"><i class="fa fa-hourglass-2"></i>Nhật ký hệ thống</a></li>
					</ul>
				</li>
		</ul>
	</section>
	<!-- /.sidebar -->
</aside>
