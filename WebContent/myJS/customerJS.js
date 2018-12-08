var codeOld;

function CheckOneCodeTrung(idInput, IdDivNoti) {
	var checkCode = 0;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa nhập mã !");
		checkCode = 0;
		checkCode = CheckCodeByKeyUp(idInput, IdDivNoti);
	} else {
		if ($(idInput)
				.val()
				.match(
						'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠếàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẾẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\u00A0\/\,\.]*$')) {
			$(IdDivNoti).css("display", "none");
			var checkMa = CheckMaTrung(idInput);
			if (checkMa == 1) {
				checkCode = 1;
			} else {
				$(IdDivNoti).css("display", "block");
				$(IdDivNoti + ' span').css("color", "red");
				$(IdDivNoti + ' span').text("Mã đã tồn tại !");
				checkCode = 0;
				checkCode = CheckCodeByKeyUp(idInput, IdDivNoti);
			}
		} else {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span')
					.text(
							'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-","/" !');
			checkCode = 0;
			checkCode = CheckCodeByKeyUp(idInput, IdDivNoti);
		}
	}
	return checkCode;
}
function CheckMaTrung(idInput) {
	var a = 1;
	var code = $(idInput).val();
	code = code.replace("\\s+", " ");
	code = code.replace("(^\\s+|\\s+$)", "");
	$("input[name='codeShow']").each(function() {
		if ($(this).val() == code) {
			a = 0;
		}
	});
	return a;
}
function CheckCodeByKeyUp(idInput, IdDivNoti) {
	var checkCode = 0;
	$(idInput)
			.keyup(
					function() {
						if ($(idInput).val() == '') {
							$(IdDivNoti).css("display", "block");
							$(IdDivNoti + ' span').css("color", "red");
							$(IdDivNoti + ' span').text("Bạn chưa nhập mã !");
							checkCode = 0;
						} else {
							if ($(idInput)
									.val()
									.match(
											'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẾẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\/\,\.]*$')) {

								if (CheckMaTrung(idInput) == 1) {
									$(IdDivNoti).css("display", "block");
									$(IdDivNoti + ' span')
											.css("color", "green");
									$(IdDivNoti + ' span').text("Ok !");
									checkCode = 1;
								} else {
									$(IdDivNoti).css("display", "block");
									$(IdDivNoti + ' span').css("color", "red");
									$(IdDivNoti + ' span').text(
											"Mã đã tồn tại !");
									checkCode = 0;
								}
							} else {
								$(IdDivNoti).css("display", "block");
								$(IdDivNoti + ' span').css("color", "red");
								$(IdDivNoti + ' span')
										.text(
												'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-","/" !');
								checkCode = 0;
							}
						}
					});
	return checkCode;
}


function CheckOneCodeTrungUpdate(idInput, IdDivNoti) {
	var checkCode = 0;
	if ($(idInput).val() == '') {
		$(IdDivNoti).css("display", "block");
		$(IdDivNoti + ' span').css("color", "red");
		$(IdDivNoti + ' span').text("Bạn chưa nhập mã !");
		checkCode = 0;
		checkCode = CheckCodeByKeyUpUpdate(idInput, IdDivNoti);
	} else {
		if ($(idInput)
				.val()
				.match(
						'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂếưăạảấầẩẫậắằẳẵặẹẻẽềềểẾỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\u00A0\/\,\.]*$')) {
			$(IdDivNoti).css("display", "none");
			if (CheckMaTrungUpdate(idInput) == 1) {
				checkCode = 1;
			} else {
				$(IdDivNoti).css("display", "block");
				$(IdDivNoti + ' span').css("color", "red");
				$(IdDivNoti + ' span').text("Mã đã tồn tại !");
				checkCode = 0;
				checkCode = CheckCodeByKeyUpUpdate(idInput, IdDivNoti);
			}
		} else {
			$(IdDivNoti).css("display", "block");
			$(IdDivNoti + ' span').css("color", "red");
			$(IdDivNoti + ' span')
					.text(
							'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-","/" !');
			checkCode = 0;
			checkCode = CheckCodeByKeyUpUpdate(idInput, IdDivNoti);
		}
	}
	return checkCode;
}

function CheckCodeByKeyUpUpdate(idInput, IdDivNoti) {
	var checkCode = 0;
	$(idInput)
			.keyup(
					function() {
						if ($(idInput).val() == '') {
							$(IdDivNoti).css("display", "block");
							$(IdDivNoti + ' span').css("color", "red");
							$(IdDivNoti + ' span').text(
									"Bạn chưa nhập vào trường này !");
							checkCode = 0;
						} else {
							if ($(idInput)
									.val()
									.match(
											'^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\/\,\.]*$')) {

								if (CheckMaTrungUpdate(idInput) == 1) {
									$(IdDivNoti).css("display", "block");
									$(IdDivNoti + ' span')
											.css("color", "green");
									$(IdDivNoti + ' span').text("Ok !");
									checkCode = 1;
								} else {
									$(IdDivNoti).css("display", "block");
									$(IdDivNoti + ' span').css("color", "red");
									$(IdDivNoti + ' span').text(
											"Mã đã tồn tại !");
									checkCode = 0;
								}
							} else {
								$(IdDivNoti).css("display", "block");
								$(IdDivNoti + ' span').css("color", "red");
								$(IdDivNoti + ' span')
										.text(
												'Không được nhập kí tự đặc biệt ngoại trừ số và dấu "-","/" !');
								checkCode = 0;
							}
						}
					});
	return checkCode;
}
function CheckMaTrungUpdate(idInput) {
	var a = 1;
	var code = $(idInput).val();
	code = code.replace("\\s+", " ");
	code = code.replace("(^\\s+|\\s+$)", "");
	$("input[name='codeShow']").each(function() {
		if ($(this).val().toString() != codeOld && $(this).val() == code) {
			a = 0;
		}
	});
	return a;
	// codeOld được đặt khi load() được gọi
}
