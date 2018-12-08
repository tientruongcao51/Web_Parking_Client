<%@page pageEncoding="UTF-8"%>

<div class="modal fade" id="dialog-add" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Thêm mới một đơn vị</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" accept-charset="UTF-8" method="post"
					action="/Web_Parking/parking/addCustomer" name="add">
					<div class="form-group">
						<label for="inputName" class="col-sm-2 control-label">Tên đầy đủ</label>
						<div class="col-sm-10">
							<input id="formAdd-Name" type="text" class="form-control"
								placeholder="Tên đầy đủ" name="name"> <input
								id="formAdd-idUnit" type="hidden" class="form-control"
								name="id">
						</div>
					</div>
					
					<div class="form-group" id="formAdd-Name" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>

					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Địa chỉ</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="formAdd-Address"
								name="address" placeholder="Địa chỉ ">
						</div>
					</div>
					<div class="form-group" id="formAdd-Address"
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
								id="formAdd-Tel" placeholder="Số điện thoại">
						</div>
					</div>
					<div class="form-group" id="formAdd-Tel" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Biển số</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" name="carNumber" id="formAdd-CarNumber" >
						</div>
					</div>
					<div class="form-group" id="formAdd-Tel" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>

					<div class="form-group">
						<button  type="submit" id="submitAddUnit"
							class="btn btn-danger" style="display: none"></button>
					</div>
					<a id="modal-add-in-form" data-toggle="modal"
						data-target="#dialog-noti-add"></a>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn btn-default">Đóng</button>
				<input class="btn btn-success" type="button" value="Thêm mới"
					onclick="ValidateFormAdd()">
			</div>
		</div>
	</div>
</div>