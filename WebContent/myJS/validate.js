//hàm tổng quát gồm cả check = keyup , check trước nếu sai sẽ keyup , check tên k có số .
function CheckOneName(idInput, IdDivNoti) {
	var checkName = 0;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa nhập vào trường này !");
		checkName = 0;
		checkName = CheckNameByKeyUp(idInput, IdDivNoti);
	} else {
		if ($(idInput)
				.val()
				.match(
						'^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂếưăạảấầẩẫậắằẳẵặẹẻẽềềểẾỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\u00A0\\s\-\/\,\.\(\)\\:\%]*$')) {
			$(IdDivNoti).css("display", "none");
			checkName = 1;

		} else {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span').text(
					"Không được nhập số hay kí tự đặc biệt !");
			checkName = 0;
			checkName = CheckNameByKeyUp(idInput, IdDivNoti);

		}
	}
	return checkName;
}

function CheckNameByKeyUp(idInput, IdDivNoti) {
	var check = 0;
	$(idInput)
			.keyup(
					function() {
						if ($(idInput).val() == '') {
							$(IdDivNoti).css("display", "block");
							$(IdDivNoti + ' span').css("color", "red");
							$(IdDivNoti + ' span').text(
									"Bạn chưa nhập vào trường này !");
							check = 0;
						} else {
							if ($(idInput)
									.val()
									.match(
											'^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶếẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\u00A0\-\/\,\.\(\)\\:\%]*$')) {
								$(IdDivNoti).css("display", "block");
								$(IdDivNoti + ' span').css("color", "green");
								$(IdDivNoti + ' span').text("Ok !");
								check = 1;
							} else {
								$(IdDivNoti).css("display", "block");
								$(IdDivNoti + ' span').css("color", "red");
								$(IdDivNoti + ' span')
										.text(
												"Không được nhập số hay kí tự đặc biệt !");
								check = 0;
							}
						}
					});
	return check;
}

// hàm tổng quát gồm cả check = keyup , check trước nếu sai sẽ keyup , check Mã
// , địa chỉ có số .
function CheckOneCode(idInput, IdDivNoti) {
	var checkCode = 0;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa nhập vào trường này !");
		checkCode = 0;
		checkCode = CheckCodeInKeyUp(idInput, IdDivNoti);
	} else {
		if ($(idInput)
				.val()
				.match(
						'^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếẾỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\u00A0\\s\-\/\,\.\(\)\\:\%]*$')) {
			$(IdDivNoti).css("display", "none");
			checkCode = 1;

		} else {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span').text(
					'Không được nhập kí tự đặc biệt !');
			checkCode = 0;
			checkCode = CheckCodeInKeyUp(idInput, IdDivNoti);

		}
	}
	return checkCode;
}

function CheckCodeInKeyUp(idInput, IdDivNoti) {
	var check = 0;
	$(idInput)
			.keyup(
					function() {
						if ($(idInput).val() == '') {
							$(IdDivNoti).css("display", "block");
							$(IdDivNoti + ' span').css("color", "red");
							$(IdDivNoti + ' span').text(
									"Bạn chưa nhập vào trường này !");
							check = 0;
						} else {
							if ($(idInput)
									.val()
									.match(
											'^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẾẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\u00A0\-\/\,\.\(\)\\:\%]*$')) {
								$(IdDivNoti).css("display", "block");
								$(IdDivNoti + ' span').css("color", "green");
								$(IdDivNoti + ' span').text("Ok !");
								check = 1;
							} else {
								$(IdDivNoti).css("display", "block");
								$(IdDivNoti + ' span').css("color", "red");
								$(IdDivNoti + ' span')
										.text(
												'Không được nhập kí tự đặc biệt !');
								check = 0;
							}
						}
					});
	return check;
}

function CheckOnePhoneNumber(idInput, IdDivNoti) {
	var check;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Số điện thoại chưa được nhập !");
		check = 0;
	}
	if ($(idInput).val() != '') {
		if ($(idInput).val().match("^[0-9_\-]*$")) {
			$(IdDivNoti).css("display", "none");
			check = 1;

		} else {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span')
					.text(
							'Hãy nhập đúng định dạng: xxx-xxx-xxxx (10 số) hoặc xxx-xxx-xxxxx (11 số) !');
			check = 0;
		}
	}
	return check;
}
function CheckOneNumber(idInput, IdDivNoti) {
	var check = 0;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa nhập vào trường này !");
		check = 0;
	}
	if ($(idInput).val() != '') {
		if ($(idInput).val().match("^[0-9\\.]*$")) {
			$(IdDivNoti).css("display", "none");
			check = 1;

		} else {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span')
					.text('Bạn chỉ được nhập số vào trường này !');
			check = 0;
		}
	}
	return check;
}

function CheckInputNull(idInput, IdDivNoti) {
	var check = 0;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa nhập vào trường này !");
		check = 0;
		check = CheckInputNullByKeyUp(idInput, IdDivNoti);
	} else {
		$(IdDivNoti).css("display", "none");
		check = 1;
	}
	return check;
}

function CheckInputNullByKeyUp(idInput, IdDivNoti) {
	var check = 0;
	$(idInput).keyup(function() {
		if ($(idInput).val() == '') {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span').text("Bạn chưa nhập vào trường này !");
			check = 0;
		} else {
			$(IdDivNoti + ' span').css("color", "green");
			$(IdDivNoti + ' span').text("Ok !");
			check = 1;
		}
	});
	return check;
}

function CheckDateNull(idInput, IdDivNoti) {
	var check = 0;
	if ($(idInput).val().toString() == "") {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa chọn ngày tháng năm !");
		check = 0;
	}
	if ($(idInput).val().toString() != "") {
		$(IdDivNoti).css("display", "none");
		check = 1;
	}
	return check;
}
