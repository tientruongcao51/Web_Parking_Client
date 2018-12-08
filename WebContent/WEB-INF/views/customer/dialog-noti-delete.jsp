<%@page pageEncoding="UTF-8"%>
<div class="modal fade" id="dialog-delete" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">

				<div class="alert alert-danger alert-dismissible">
					<h4>
						<i class="icon fa fa-ban"></i> Thông báo !
					</h4>
					<p>Bạn có chắc chắn muốn xóa ?</p>
				</div>
			</div>

			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn btn-default">Thoát</button>
				<a id="xoaUnit"><button type="button" class="btn btn-danger"
						value="">Xóa</button></a>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>

<div class="modal fade" id="dialog-delete-dad" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">

				<div class="alert alert-warning alert-dismissible">
					<button type="button" class="close" data-dismiss="alert"
						aria-hidden="true">×</button>
					<h4>
						<i class="icon fa fa-warning"></i> Thông báo !
					</h4>
					<p>Bạn cần phải xóa dữ liệu con trước !</p>
				</div>
			</div>

			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn btn-default">Đóng</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>