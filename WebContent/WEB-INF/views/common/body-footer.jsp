<%@page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!--<footer class="main-footer">
   <div class="pull-right hidden-xs">
      <b>Version</b> 2.3.8
    </div>
    <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
    reserved. 
 </footer>
-->
</div>
<div id="footer" class="row">
	<div class="col-md-12">
		<div class="zone zone-footer">
			<!--Widget: Footer-->
			<div>
				<p align="center">
				</p>
			</div>
		</div>
	</div>
</div>
	<script>
		$('#footer p').css('border-top', '#d2d6de');
		$('#footer p').css('background-color', '#d2d6de');
		$('#footer p').css('padding-top', '10px');
		$('#footer p').css('color', '#333');
	</script>



<!-- /Web_Parking/wrapper
<script>
    $(function(){           
        if (!Modernizr.inputtypes.date) {
            $('input[type=date]').datepicker({
                  dateFormat : 'yy-mm-dd'
                }
             );
        }
    });
</script> 
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script>
    $(function(){
         // Find any date inputs and override their functionality
         $('input[type="date"]').datepicker();
    });
</script>-->
<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
	$.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.6 -->
<script src="/Web_Parking/bootstrap/js/bootstrap.min.js"></script>
<!-- daterangepicker -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>
<script src="/Web_Parking/plugins/daterangepicker/daterangepicker.js"></script>

<!-- InputMask -->
<script src="/Web_Parking/plugins/input-mask/jquery.inputmask.js"></script>
<script
	src="/Web_Parking/plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
<script src="/Web_Parking/plugins/input-mask/jquery.inputmask.extensions.js"></script>


<!-- datepicker -->
<script src="/Web_Parking/plugins/datepicker/bootstrap-datepicker.js"></script>

<!-- Bootstrap WYSIHTML5 -->
<script
	src="/Web_Parking/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
<!-- Slimscroll -->
<script src="/Web_Parking/plugins/slimScroll/jquery.slimscroll.min.js"></script>

<!-- FastClick -->
<script src="/Web_Parking/plugins/fastclick/fastclick.js"></script>
<!-- Select2 -->
<script src="/Web_Parking/plugins/select2/select2.full.min.js"></script>
<!-- jvectormap -->
<script src="/Web_Parking/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script
	src="/Web_Parking/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>

<!-- DataTables -->
<script src="/Web_Parking/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="/Web_Parking/plugins/datatables/dataTables.bootstrap.min.js"></script>

<!-- AdminLTE App -->
<script src="/Web_Parking/dist/js/app.min.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script>
	$(function() {
		//$("#example1").DataTable();
		$('#example1').DataTable({
				"language" : {
					"decimal" : "",
					"emptyTable" : "Không có dữ liệu để hiển thị",
					"info" : "Đang xem từ _START_ đến _END_ trong tổng số _TOTAL_ phần tử",
					"infoEmpty" : "Đang xem từ 0 đến 0 trong tổng số 0 phần tử",
					"infoFiltered" : "(lọc ra từ _MAX_ phần tử)",
					"infoPostFix" : "",
					"thousands" : ",",
					"lengthMenu" : "Hiển thị : _MENU_ phần tử",
					"loadingRecords" : "Đang tải...",
					"processing" : "Đang xử lý...",
					"search" : "Tìm kiếm:",
					"zeroRecords" : "Không tìm thấy kết quả",
					"paginate" : {
						"first" : "Đầu",
						"last" : "Cuối",
						"next" : "Sau",
						"previous" : "Trước"
					},
				}

			});
	});
</script>
