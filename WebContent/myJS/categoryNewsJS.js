function load(name, id, theoder) {
	$('.modal-body #nameCategoryNews').val(name);
	$('.modal-body #theoderCategoryNews').val(theoder);
	$('.modal-body #idCategoryNews').val(id);
	$('#modal-update').click();
}
function xoa(id) {

	$.ajax({
		url : "../webgis/admin/webgiscategoryNews/deleteDad",
		data : {
			id : id
		},
		method : "get",
		scriptCharset : "utf-8",
		contentType : "text/html; charset=utf-8",
		success : function(result) {
			if (result == '0') {
				$('#xoaUnit').attr('href',
						'/webgis/admin/webgiscategorynews/delete?id=' + id);
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
function updateCategoryNews() {
	$('#submitUpdateCategoryNews').click();
}
function addCategoryNews() {
	$('#submitAddCategoryNews').click();
}
function ValidateFormAddCate() {
	var checkFullName = CheckOneCode('#formAdd-Name',
			'#labelAdd-Name');
	var checkTheOrder = CheckOneNumber('#formAdd-theOrder',
			'#labelAdd-theOrder');
	if (checkFullName == 1 && checkTheOrder == 1) {
		addCategoryNews();
	}

}

function ValidateFormUpdateCate() {
	var checkFullName = CheckOneCode('#nameCategoryNews',
			'#labelUpdate-Name');
	var checkTheOrder = CheckOneNumber('#theoderCategoryNews',
			'#labelUpdate-theOrder');
	if (checkFullName == 1 && checkTheOrder == 1) {
		updateCategoryNews();
	}
}
