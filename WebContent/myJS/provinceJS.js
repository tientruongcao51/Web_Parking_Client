function loadCuTruocKhiFix(id, code, name, theLevel, parentid, parentName) {
	codeOld = code;
	$('#modal-update-tinh').click();
	$('.modal-body #idPro').val(id);
	$('.modal-body #codePro').val(code);
	$('.modal-body #namePro').val(name);
	var val = parentName;
	var $lsTinh = $("#lsUpdateTinh");
	var $Tinh = $("#UpdateTinh");
	var $lsHuyen = $("#lsUpdateHuyen");
	var $lsXa = $("#lsUpdateXa");

	var $notiTinh = $("#notiUpdateTinh");
	var $notiHuyen = $("#notiUpdateHuyen");
	var $notiXa = $("#notiUpdateXa");
	if (theLevel == 1) {

		$lsTinh.css("display", "none");
		$lsTinh.attr('name', '');

		$lsHuyen.css("display", "none");
		$lsHuyen.attr('name', '');

		$lsXa.css("display", "none");
		$lsXa.attr('name', '');

		$Tinh.css("display", "block");
		$Tinh.attr('name', 'parentid');

		$notiTinh.css("display", "none");
		$notiHuyen.css("display", "none");
		$notiXa.css("display", "none");
	}
	if (theLevel == 2) {
		$Tinh.css("display", "none");
		$Tinh.attr('name', '');

		$lsTinh.css("display", "block");
		$lsTinh.attr('name', 'parentid');

		$lsHuyen.css("display", "none");
		$lsHuyen.attr('name', '');

		$lsXa.css("display", "none");
		$lsXa.attr('name', '');

		$notiTinh.css("display", "block");
		$notiHuyen.css("display", "none");
		$notiXa.css("display", "none");
		$('#lsUpdateTinh option:contains(' + val + ')').prop({
			selected : true
		});
	}
	if (theLevel == 3) {
		$Tinh.css("display", "none");
		$Tinh.attr('name', '');

		$lsTinh.css("display", "none");
		$lsTinh.attr('name', '');

		$lsHuyen.css("display", "block");
		$lsHuyen.attr('name', 'parentid');

		$lsXa.css("display", "none");
		$lsXa.attr('name', '');

		$notiTinh.css("display", "none");
		$notiHuyen.css("display", "block");
		$notiXa.css("display", "none");
		$('#lsUpdateHuyen option:contains(' + val + ')').prop({
			selected : true
		});
	}
	if (theLevel == 4) {
		$Tinh.css("display", "none");
		$Tinh.attr('name', '');

		$lsTinh.css("display", "none");
		$lsTinh.attr('name', '');

		$lsHuyen.css("display", "none");
		$lsHuyen.attr('name', '');

		$lsXa.css("display", "block");
		$lsXa.attr('name', 'parentid');

		$notiTinh.css("display", "none");
		$notiHuyen.css("display", "none");
		$notiXa.css("display", "block");

		$('#lsUpdateXa option:contains(' + val + ')').prop({
			selected : true
		});
	}

}
function updateTinh() {
	$('#submitUpdateTinh').click();
	ShowLoadingSaveInfor();
}
function addTinh() {
	$('#submitAddTinh').click();
	ShowLoadingSaveInfor();
}
function selectLevel() {
	$('#selectTheLevel').change(function() {
		var $lsTinh = $("#lsTinh");
		var $Tinh = $("#Tinh");
		var $lsHuyen = $("#lsHuyen");
		var $lsXa = $("#lsXa");
		var $notiTinh = $("#notiTinh");
		var $notiHuyen = $("#notiHuyen");
		var $notiXa = $("#notiXa");
		if ($(this).val() === '1') {
			// Do something for option "b"
			$lsTinh.css("display", "none");
			$lsTinh.attr('name', '');

			$lsHuyen.css("display", "none");
			$lsHuyen.attr('name', '');

			$lsXa.css("display", "none");
			$lsXa.attr('name', '');

			$Tinh.css("display", "block");
			$Tinh.attr('name', 'parentid');

			$notiTinh.css("display", "none");
			$notiHuyen.css("display", "none");
			$notiXa.css("display", "none");
		}
		if ($(this).val() === '2') {

			$lsTinh.css("display", "block");
			$lsTinh.attr('name', 'parentid');

			$lsHuyen.css("display", "none");
			$lsHuyen.attr('name', '');

			$lsXa.css("display", "none");
			$lsXa.attr('name', '');

			$Tinh.css("display", "none");
			$Tinh.attr('name', '');

			$notiTinh.css("display", "block");
			$notiHuyen.css("display", "none");
			$notiXa.css("display", "none");
		}
		if ($(this).val() === '3') {
			$lsTinh.css("display", "none");
			$lsTinh.attr('name', '');

			$lsHuyen.css("display", "block");
			$lsHuyen.attr('name', 'parentid');

			$lsXa.css("display", "none");
			$lsXa.attr('name', '');

			$Tinh.css("display", "none");
			$Tinh.attr('name', '');

			$notiTinh.css("display", "none");
			$notiHuyen.css("display", "block");
			$notiXa.css("display", "none");
		}
		if ($(this).val() === '4') {
			$lsTinh.css("display", "none");
			$lsTinh.attr('name', '');

			$lsHuyen.css("display", "none");
			$lsHuyen.attr('name', '');

			$lsXa.css("display", "block");
			$lsXa.attr('name', 'parentid');

			$Tinh.css("display", "none");
			$Tinh.attr('name', '');

			$notiTinh.css("display", "none");
			$notiHuyen.css("display", "none");
			$notiXa.css("display", "block");
		}
	});
}
function validateFormAdd() {
	var checkCode = 0;
	var checkName = 0;
	if ($('#formAdd-Code').val() == '') {
		$('#labelAddCode').css("display", "block");
		$('#labelAddCode span').css("color", "red");
		$('#labelAddCode span').text("Bạn chưa nhập vào trường này !");
		checkCode = 0;
		checkCode = CheckCodeByKeyUp();
	} else {
		if ($('#formAdd-Code')
				.val()
				.match(
						'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\u00A0]*$')) {
			$('#labelAddCode').css("display", "none");
			if (CheckMaTrung() == 1) {
				checkCode = 1;
			} else {
				$('#labelAddCode').css("display", "block");
				$('#labelAddCode span').css("color", "red");
				$('#labelAddCode span').text("Mã đã tồn tại !");
				checkCode = 0;
				checkCode = CheckCodeByKeyUp();
			}
		} else {
			$('#labelAddCode').css("display", "block");
			$('#labelAddCode span').css("color", "red");
			$('#labelAddCode span')
					.text('Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-" !');
			checkCode = 0;
			checkCode = CheckCodeByKeyUp();
		}
	}
	if ($('#formAdd-Name').val() == '') {
		$('#labelAddName').css("display", "block");
		$('#labelAddName span').css("color", "red");
		$('#labelAddName span').text("Bạn chưa nhập vào trường này !");
		checkName = 0;
		checkName = CheckNameByKeyUp('#formAdd-Name', '#labelAddName');
	} else {
		if ($('#formAdd-Name')
				.val()
				.match(
						'^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\u00A0\\s]*$')) {
			$('#labelAddName').css("display", "none");
			checkName = 1;

		} else {
			$('#labelAddName').css("display", "block");
			$('#labelAddName span').css("color", "red");
			$('#labelAddName span').text(
					"Không được nhập số hay kí tự đặc biệt !");
			checkName = 0;
			checkName = CheckNameByKeyUp('#formAdd-Name', '#labelAddName');

		}
	}
	if (checkCode == 1 && checkName == 1) {
		 addTinh();
	}
}

function CheckCodeByKeyUp() {
	var checkCode = 0;
	$('#formAdd-Code')
			.keyup(
					function() {
						if ($('#formAdd-Code').val() == '') {
							$('#labelAddCode').css("display", "block");
							$('#labelAddCode span').css("color", "red");
							$('#labelAddCode span').text("Bạn chưa nhập vào trường này !");
							checkCode = 0;
						} else {
							if ($('#formAdd-Code')
									.val()
									.match(
											'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]*$')) {

								if (CheckMaTrung() == 1) {
									$('#labelAddCode').css("display", "block");
									$('#labelAddCode span').css("color",
											"green");
									$('#labelAddCode span').text("Ok !");
									checkCode = 1;
								} else {
									$('#labelAddCode').css("display", "block");
									$('#labelAddCode span').css("color", "red");
									$('#labelAddCode span').text(
											"Mã đã tồn tại !");
									checkCode = 0;
								}
							} else {
								$('#labelAddCode').css("display", "block");
								$('#labelAddCode span').css("color", "red");
								$('#labelAddCode span').text(
										'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-" !');
								checkCode = 0;
							}
						}
					});
	return checkCode;
}
function CheckMaTrung() {
	var a = 1;
	var code = $('#formAdd-Code').val();
	code = code.replace("\\s+", " ");
	code = code.replace("(^\\s+|\\s+$)", "");
	$("input[name='codeShow']").each(function() {
		if ($(this).val() == code) {
			a = 0;
		}
	});
	return a;
}

function validateFormUpdate() {
	var checkCode = 0;
	var checkName = 0;
	if ($('#codePro').val() == '') {
		$('#labelUpdateCode').css("display", "block");
		$('#labelUpdateCode span').css("color", "red");
		$('#labelUpdateCode span').text("Bạn chưa nhập vào trường này !");
		checkCode = 0;
		checkCode = CheckCodeByKeyUpUpdate();
	} else {
		if ($('#codePro')
				.val()
				.match(
						'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\u00A0]*$')) {
			$('#labelUpdateCode').css("display", "none");
			if (CheckMaTrungUpdate() == 1) {
				checkCode = 1;
			} else {
				$('#labelUpdateCode').css("display", "block");
				$('#labelUpdateCode span').css("color", "red");
				$('#labelUpdateCode span').text("Mã đã tồn tại !");
				checkCode = 0;
				checkCode = CheckCodeByKeyUpUpdate();
			}
		} else {
			$('#labelUpdateCode').css("display", "block");
			$('#labelUpdateCode span').css("color", "red");
			$('#labelUpdateCode span').text(
					'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-" !');
			checkCode = 0;
			checkCode = CheckCodeByKeyUpUpdate();
		}
	}
	if ($('#namePro').val() == '') {
		$('#labelUpdateName').css("display", "block");
		$('#labelUpdateName span').css("color", "red");
		$('#labelUpdateName span').text("Bạn chưa nhập vào trường này !");
		checkName = 0;
		checkName = CheckNameByKeyUp('#namePro', '#labelUpdateName');
	} else {
		if ($('#namePro')
				.val()
				.match(
						'^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\u00A0\\s]*$')) {
			$('#labelUpdateName').css("display", "none");
			checkName = 1;

		} else {
			$('#labelUpdateName').css("display", "block");
			$('#labelUpdateName span').css("color", "red");
			$('#labelUpdateName span').text(
					"Không được nhập số hay kí tự đặc biệt !");
			checkName = 0;
			checkName = CheckNameByKeyUp('#namePro', '#labelUpdateName');

		}
	}
	if (checkCode == 1 && checkName == 1) {
		 updateTinh();
	}
}
function CheckCodeByKeyUpUpdate() {
	var checkCode = 0;
	$('#codePro')
			.keyup(
					function() {
						if ($('#codePro').val() == '') {
							$('#labelUpdateCode').css("display", "block");
							$('#labelUpdateCode span').css("color", "red");
							$('#labelUpdateCode span').text(
									"Bạn chưa nhập vào trường này !");
							checkCode = 0;
						} else {
							if ($('#codePro')
									.val()
									.match(
											'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]*$')) {

								if (CheckMaTrungUpdate() == 1) {
									$('#labelUpdateCode').css("display",
											"block");
									$('#labelUpdateCode span').css("color",
											"green");
									$('#labelUpdateCode span').text("Ok !");
									checkCode = 1;
								} else {
									$('#labelUpdateCode').css("display",
											"block");
									$('#labelUpdateCode span').css("color",
											"red");
									$('#labelUpdateCode span').text(
											"Mã đã tồn tại !");
									checkCode = 0;
								}
							} else {
								$('#labelUpdateCode').css("display", "block");
								$('#labelUpdateCode span').css("color", "red");
								$('#labelUpdateCode span').text(
										'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-" !');
								checkCode = 0;
							}
						}
					});
	return checkCode;
}
function CheckMaTrungUpdate() {
	var a = 1;
	var code = $('#codePro').val();
	code = code.replace("\\s+", " ");
	code = code.replace("(^\\s+|\\s+$)", "");
	$("input[name='codeShow']").each(function() {
		if ($(this).val() != codeOld && $(this).val() == code) {
			a = 0;
		}
	});
	return a;
}