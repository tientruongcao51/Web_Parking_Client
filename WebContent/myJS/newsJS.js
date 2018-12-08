function xoa(id, cateid) {
	$('#xoaUnit').attr('href',
			'/webgis/admin/webgisnews/delete?id=' + id + '&&cateid=' + cateid);
}
function updateCategoryNews() {
	$('#submitUpdateCategoryNews').click();
}
function addCategoryNews() {
	$('#submitAddCategoryNews').click();
}
$(document).ready(function() {
	$('#selectPublish').change(function() {
		if ($(this).val() == '0') {

			$('#publishDate').css("display", "none");
			$('#publishDate input').val("");
			$('#publishDate input').removeAttr("required");
			$('#publishDatenull').css("display", "block");
		} else {
			$('#publishDate input').val("");
			$('#publishDate input').attr("required", "required");
			$('#publishDate').css("display", "block");
			$('#publishDatenull').css("display", "none");
		}
	});
	$('#selectPublishNews').change(function(date) {
		if ($(this).val() == '0') {
			$('#publishDateNews').css("display", "none");
			$('#publishDateNews input').val("");
			$('#publishDateNews input').removeAttr("required");
			$('#publishDatenullNews').css("display", "block");
		} else {
			$('#publishDateNews input').val("");
			$('#publishDateNews input').attr("required", "required");
			$('#publishDateNews ').css("display", "block");
			$('#publishDatenullNews').css("display", "none");
		}
	});
});
function show() {
	alert(CKEDITOR.instances.editor1.getData());
}
function decode_utf8(s) {
	return decodeURIComponent(escape(s));
}
function htmlDecode(input) {
	return String(input).replace(/&amp;/g, '&').replace(/&quot;/g, '"')
			.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function load(files, id, title, intro, thumbnail, author, createDate, publish,
		publishDate, categoryNewsName, office, idlsCate) {
	$.ajax({
		url : "../webgis/admin/webgisnews/show",
		data : {
			id : id
		},
		method : "get",
		scriptCharset : "utf-8",
		contentType : "text/html; charset=utf-8",
		success : function(result) {

			CKEDITOR.instances.editor2.setData(htmlDecode(result));
		},
		error : function(result, status, er) {
			alert("error: " + result + " status: " + status + " er:" + er);
			// alert(data);
		}
	});

	if (publish == 1) {
		var string = "Đã xuất bản";
		$('#publishDateNews').css("display", "block");
		$('#publishDatenullNews').css("display", "none");
		var pubDate = new Date(publishDate)
		pubDate.setDate(pubDate.getDate() + 1);
		$('#publishDateNews input').val(pubDate.toISOString().substring(0, 10));
	} else {
		var string = "Chưa xuất bản";
		$('#publishDateNews').css("display", "none");
		$('#publishDatenullNews').css("display", "block");
		$('#publishDateNews input').val('');
	}
	$('#selectPublishNews option:contains(' + string + ')').prop({
		selected : true
	});
	var danhmuc = new String(categoryNewsName);
	$('#selectCateNews option:contains(' + danhmuc + ')').prop({
		selected : true
	});
	var date = new Date(createDate);
	var day = date.getDate();
	date.setDate(day + 1);
	$('#createDateNews').val(date.toISOString().substring(0, 10));
	$('#titleNews').val(title);
	$('#introNews').val(intro);
	$('#authorNews').val(author);
	$('#idNews').val(id);
	if (files != "") {
		$('#filesNews').val(files);
		$('#fileNotNull').css("display", "block");
		$('#fileNull').css("display", "none");
		$('#fileInput').attr('name', 'files');
		$('#fileInputNull').attr('name', '');
	} else {
		$('#fileNotNull').css("display", "none");
		$('#fileNull').css("display", "block");
		$('#fileInput').attr('name', '');
		$('#fileInputNull').attr('name', 'files');
	}
	if (thumbnail != "") {
		$('#showImg').val(thumbnail);
		$('#imgThumbnail').attr('src', "/webgis/photos/" + thumbnail);
		$('#imgNotNull').css("display", "block");
		$('#imgNull').css("display", "none");
		$('#thumbnailInput').attr('name', 'thumbnail');
		$('#thumbnailInputNull').attr('name', '');
	} else {
		$('#imgNotNull').css("display", "none");
		$('#imgNull').css("display", "block");
		$('#thumbnailInput').attr('name', '');
		$('#thumbnailInputNull').attr('name', 'thumbnail');
	}
	$('#officeNews').val(office);
	$('#idlsCateNews').val(idlsCate);
	$('#modal-update').click();
}

function checkCateNull(size) {
	if (size == 0) {
		$('#modal-table-null').click();
	} else {
		$('#modal-add-table-not-null').click();
	}
}
function ValidateFormAdd() {
	var checkTitle = CheckInputNull('#formAdd-Title', '#labelAdd-Title');
	var checkAuthor = CheckOneName('#formAdd-Author', '#labelAdd-Author');
	var checkCreateDate = CheckDateNull('#formAdd-createDate',
			'#labelAdd-createDate');
	if ($('#selectPublish').val() == 0) {
		if (checkTitle == 1 && checkAuthor == 1 && checkCreateDate == 1) {
			$("#modal-add-in-form").click();
		}
	} else {
		var checkpublishDate = CheckDateNull('#formAdd-publishDate',
				'#labelAdd-publishDate')
		if (checkTitle == 1 && checkAuthor == 1 && checkCreateDate == 1
				&& checkpublishDate == 1) {
			addCategoryNews();
		}
	}
}

function ValidateFormUpdate() {
	var checkTitle = CheckInputNull('#titleNews', '#labelUpdate-Title');
	var checkAuthor = CheckOneName('#authorNews', '#labelUpdate-Author');
	var checkCreateDate = CheckDateNull('#createDateNews',
			'#labelUpdate-createDate');
	if ($('#selectPublishNews').val() == 0) {
		if (checkTitle == 1 && checkAuthor == 1 && checkCreateDate == 1) {
			$("#modal-update-in-form").click();
		}
	} else {
		var checkpublishDate = CheckDateNull('#publishDateNews input',
				'#labelUpdate-publishDate')
		if (checkTitle == 1 && checkAuthor == 1 && checkCreateDate == 1
				&& checkpublishDate == 1) {
			updateCategoryNews();
		}
	}
}