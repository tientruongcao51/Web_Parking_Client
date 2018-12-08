<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<%@include file="../common/head.jsp"%>
<body class="hold-transition skin-blue-light sidebar-mini">
	<div class="wrapper">

		<%@include file="../common/body-header.jsp"%>
		<script type="text/javascript" src="/webgis/myJS/validate.js"></script>
		<script type="text/javascript" src="/webgis/myJS/unitJS.js"></script>
		<script type="text/javascript"
			src="http://code.jquery.com/jquery-latest.js"></script>
		<script type="text/javascript">
			
		</script>
		<!-- Left side column. contains the logo and sidebar -->
		<%@include file="../common/body-left-side.jsp"%>



		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<section class="content-header">
				<div>
					<ol class="breadcrumb"
						style="margin-bottom: -10px !important; background-color: transparent !important;">
						<li><a href="#"><i class="fa fa-dashboard"></i> Quản lý
								danh mục hỗ trợ</a></li>
						<li class="active">Quản lý danh sách đơn vị</li>
					</ol>
				</div>
				
				
			</section>

			<!-- Main content -->
			<section class="content">
				<div class="row">
					<div class="col-xs-12">
						<div class="box">
							<div class="box-header">
								<h3 class="box-title">Danh sách các đơn vị</h3>
								<button class="btn btn-primary" data-toggle="modal"
									data-target="#dialog-add"
									style="float: right; margin-right: 5px;">Thêm mới</button>
							</div>
							<!-- /.box-header -->
							<div class="box-body">
								<table id="example1" class="table table-bordered table-hover">
									<thead>
										<tr>
											<th>STT</th>
											<th>Mã đơn vị</th>
											<th>Tên đầy đủ</th>
											<th>Chức năng</th>

										</tr>
									</thead>
									<tbody>
										<c:set var="dem" value="0"></c:set>
										<c:forEach var="unit" items="${listUnit }">
											<c:set var="dem" value="${dem +1 }"></c:set>
											<tr>
												<td><c:out value="${dem }" /></td>
												<td><c:out value="${unit.id }" /> 
<%-- 												<input name="codeShow" value="${unit.code }" type="hidden"></td> --%>
												<td><c:out value="${unit.name }" /></td>
												<td><a onclick="load_Unit('<c:out value="${unit.id }" />')"><span
														class="glyphicon glyphicon-edit" title="Sửa"></span></a><a
													onclick="xoa('<c:out value="${unit.id }" />')"><span
														class="glyphicon glyphicon-trash"
														style="margin: 0px 0px 0px 10px;" title="Xóa"></span></a></td>
											</tr>
										</c:forEach>


									</tbody>

								</table>
							</div>
							<a data-toggle="modal" data-target="#dialog-delete" id="modal-delete"></a>
							<a data-toggle="modal" data-target="#dialog-delete-dad" id="modal-delete-dad"></a>
							<a id="modal-update" data-toggle="modal"
								data-target="#dialog-update"></a>
							<%@include file="dialog-add.jsp"%>
							<%@include file="dialog-update.jsp"%>
							<%@include file="dialog-noti-delete.jsp"%>

							<!-- /.example-modal -->

							<!-- /.box-body -->
						</div>
					</div>
				</div>
			</section>


			<!-- /.content -->
		</div>
		<!-- /.content-wrapper -->

		<%@include file="../common/body-footer.jsp"%>
	</div>
	<script type="text/javascript">
	function xoa(id) {
		$.ajax({
			url : "../webgis/admin/webgisunit/deleteDad",
			data : {
				id : id
			},
			method : "get",
			scriptCharset : "utf-8",
			contentType : "text/html; charset=utf-8",
			success : function(result) {
				if (result == '0') {
					$('#xoaUnit').attr('href', '/webgis/admin/webgisunit/delete?id=' + id);
					$('#modal-delete').click();
				}
				if (result == '1') {
					$('#modal-delete-dad').click();
				}
			},
			error : function(result, status, er) {
				alert("error: " + result + " status: " + status + " er:" + er);
				// alert(data);
			}
		});
		
	}
	</script>
</body>
</html>

