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
					action="/webgis/admin/webgisunit/add">

					<div class="form-group">
						<label for="inputName" class="col-sm-2 control-label">Tên
							đầy đủ</label>

						<div class="col-sm-10">
							<input type="text" class="form-control" placeholder="Tên đầy đủ"
								name="name" id="formAdd-Name">
						</div>
					</div>
					<div class="form-group" id="labelAdd-Name" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					<div class="form-group">
						<label for="inputName" class="col-sm-2 control-label">Tên
							viết tắt</label>

						<div class="col-sm-10">
							<input type="text" class="form-control"
								placeholder="Tên viết tắt" name="shortName"
								id="formAdd-shortName">
						</div>
					</div>
					<div class="form-group" id="labelAdd-shortName"
						style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>

					<div class="form-group">
						<label for="inputName" class="col-sm-2 control-label">Mã
							đơn vị</label>

						<div class="col-sm-10">
							<input type="text" class="form-control" placeholder="Mã đơn vị"
								name="code" id="formAdd-Code">
						</div>
					</div>
					<div class="form-group" id="labelAdd-Code" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail" class="col-sm-2 control-label">Thủ Trưởng</label>

						<div class="col-sm-10">
							<input type="text" class="form-control" name="boss"
								id="formAdd-Boss" placeholder="Giám đốc">
						</div>
					</div>
					<div class="form-group" id="labelAdd-Boss" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Địa
							chỉ</label>

						<div class="col-sm-10">
							<input type="text" class="form-control" name="address"
								required="required" id="formAdd-Address" placeholder="Địa chỉ">
						</div>
					</div>
					<div class="form-group" id="labelAdd-Address"
						style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Điện
							thoại</label>

						<div class="col-sm-10">
							<input type="text" class="form-control" name="tel"
								placeholder="Số điện thoại" id="formAdd-Tel" >
						</div>
					</div>
					<div class="form-group" id="labelAdd-Tel" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>
					<div class="form-group">
						<label for="inputExperience" class="col-sm-2 control-label">Mô
							tả</label>

						<div class="col-sm-10">
							<textarea class="form-control" name="description"
								placeholder="Mô tả đơn vị" id="formAdd-Description"></textarea>
						</div>
					</div>
					<div class="form-group" id="labelAdd-Description" style="display: none;">
						<label for="inputName" class="col-sm-2 control-label"> </label>
						<div class="col-sm-10">
							<span></span>
						</div>
					</div>

					<div class="form-group">
						<button style="display: none" type="submit" id="submitAddUnit"
							class="btn btn-danger"></button>
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