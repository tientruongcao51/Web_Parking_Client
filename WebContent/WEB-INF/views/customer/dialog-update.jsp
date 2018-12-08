<%@page pageEncoding="UTF-8"%>

<div class="modal fade" id="dialog-update" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Sửa thông tin khách hàng</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" accept-charset="UTF-8" method="post"
					action="/Web_Parking/parking/updateCustomer">

					<div class="form-group">
						<label for="inputName" class="col-sm-2 control-label">Tên đầy đủ</label>
						<div class="col-sm-10">
							<input id="formUpdate-Name" type="text" class="form-control"
								placeholder="Tên đầy đủ" name="name"> <input
								id="formUpdate-id" type="hidden" class="form-control"
								name="id">
						</div>
					</div>
					
					<div class="form-group" id="labelUpdate-Name" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>

					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Địa chỉ</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="formUpdate-Address"
								name="address" placeholder="Địa chỉ ">
						</div>
					</div>
					<div class="form-group" id="labelUpdate-Address"
						style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Điện thoại</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" name="phone"
								id="formUpdate-Phone" placeholder="Số điện thoại">
						</div>
					</div>
					<div class="form-group" id="labelUpdate-Tel" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Biển số</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" name="carNumber" id="formUpdate-CarNumber">
						</div>
					</div>
					<div class="form-group" id="labelUpdate-Tel" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button style="display: none" type="submit" id="submitUpdateUnit"
								class="btn btn-danger"></button>
							<a id="modal-update-in-form" data-toggle="modal"
								data-target="#dialog-noti-update"></a>
						</div>

					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn btn-default">Đóng</button>
				<input class="btn btn-warning" type="button"
					onclick="ValidateFormUpdate()" value="Sửa">
			</div>
		</div>
	</div>
</div>