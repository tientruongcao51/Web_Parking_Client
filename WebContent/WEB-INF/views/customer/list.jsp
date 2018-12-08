<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<%@include file="../common/head.jsp"%>
<body class="hold-transition skin-blue-light sidebar-mini">
	<div class="wrapper">

		<%@include file="../common/body-header.jsp"%>
		<script type="text/javascript" src="/Web_Parking/myJS/validate.js"></script>
		<script type="text/javascript" src="/Web_Parking/myJS/customerJS.js"></script>
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
						<li><a href="#"><i class="fa fa-dashboard"></i> Quản lý danh mục hỗ trợ</a></li>
						<li class="active">Quản lý danh sách khách hàng</li>
					</ol>
				</div>
				
				
			</section>

			<!-- Main content -->
			<section class="content">
				<div class="row">
					<div class="col-xs-12">
						<div class="box">
							<div class="box-header">
								<h3 class="box-title">Danh sách khách hàng</h3>
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
											<th>Tên đầy đủ</th>
											<th>Số điện thoại</th>
											<th>Địa chỉ</th>
											<th>Biển số xe</th>
											<th>Lần gửi cuối</th>
											<th>Chức năng</th>

										</tr>
									</thead>
									<tbody>
										<c:set var="dem" value="0"></c:set>
										<c:forEach var="unit" items="${listCustomer }">
											<c:set var="dem" value="${dem +1 }"></c:set>
											<tr>
												<td><c:out value="${dem }" /></td>
												<td><c:out value="${unit.name }" /> 
<%-- 												<input name="codeShow" value="${unit.code }" type="hidden"></td> --%>
												<td><c:out value="${unit.phone }" /></td>
												<td><c:out value="${unit.address }" /></td>
												<td><c:out value="${unit.carNumber }" /></td>
												<td><c:out value="${unit.lastCheckIn }" /></td>
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
			url : "/Web_Parking/parking/deleteCustomer/deleteDad",
			data : {
				id : id
			},
			method : "get",
			scriptCharset : "utf-8",
			contentType : "text/html; charset=utf-8",
			success : function(result) {
				if (result == '0') {
					$('#xoaUnit').attr('href', '/Web_Parking/parking/deleteCustomer?id=' + id);
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
	function load_Unit(id) {
		
		$.ajax({
			url : "/Web_Parking/parking/loadCustomer",
			data : {
				id : id
			},
			method : "get",
			scriptCharset : "utf-8",
			contentType : "text/html; charset=utf-8",
			success : function(result) {
				var obj = JSON.parse(result);console.log(result);
				console.log(result.name);
				$('#formUpdate-id').val(obj.id);
				$('#formUpdate-Name').val(obj.name);
				$('#formUpdate-Phone').val(obj.phone);
				$('#formUpdate-Address').val(obj.address);
				$('#formUpdate-CarNumber').val(obj.carNumber);
			},
			error : function(result, status, er) {
				alert("error: " + result + " status: " + status + " er:" + er);
				// alert(data);
			}
		});
		$('#modal-update').click();
	}

	function ValidateFormAdd() {
// 		var checkFullName = CheckOneName('#formAdd-Name', '#labelAdd-Name');
// 		var checkShortName = 1;
// 		checkShortName = CheckOneName('#formAdd-shortName', '#labelAdd-shortName');
// 		var checkCode = CheckOneCodeTrung('#formAdd-Code', '#labelAdd-Code');
// 		var checkAddress = CheckOneCode('#formAdd-Address', '#labelAdd-Address');
// 		var checkBoss = CheckOneName('#formAdd-Boss', '#labelAdd-Boss');
// 		var checkTel = CheckOnePhoneNumber('#formAdd-Tel', '#labelAdd-Tel');
// 		if (checkFullName == 1 && checkShortName == 1 && checkCode == 1
// 				&& checkTel == 1 && checkBoss == 1 && checkAddress == 1) {
			$('#submitAddUnit').click();
// 		}
	}

	function ValidateFormUpdate() {
// 		var checkFullName = CheckOneCode('#formUpdate-Name', '#labelUpdate-Name');
// 		var checkShortName = CheckOneCode('#formUpdate-shortName',
// 				'#labelUpdate-shortName');
// //		var checkCode = CheckOneCodeTrungUpdate('#formUpdate-Code',
// //				'#labelUpdate-Code');
// 		var checkAddress = CheckOneCode('#formUpdate-Address',
// 				'#labelUpdate-Address');
// //		var checkBoss = CheckOneName('#formUpdate-Boss', '#labelUpdate-Boss');
// 		var checkTel = CheckOnePhoneNumber('#formUpdate-Phone', '#labelUpdate-Phone');
// 		if (checkFullName == 1 && checkShortName == 1 && checkCode == 1
// 				&& checkTel == 1 && checkBoss == 1 && checkAddress == 1) {
			$('#submitUpdateUnit').click();
// 		}
	}
	</script>
</body>
</html>

