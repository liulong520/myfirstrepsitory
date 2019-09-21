//在登陆界面切换到注册页面
$('.login-box').click(function() {
	$('.register').css({
		display: 'block'
	})
	$(this).closest('.login').css({
		display: 'none'
	})

})

//在注册页面切换到登陆页面
$('.register-box').click(function() {
	$('.login').css({
		display: 'block'
	})
	$(this).closest('.register').css({
		display: 'none'
	})
})

//登录界面用户名、密码非空验证

$('.login-button').click(function() {
	//用户名、密码不为空，此时，跳转到首页
	if($(".login-username").val() != "" && $(".login-password").val() != "") {
		window.location.href = "1.0.html"
	} else {
	//用户名、密码中有一个为空，则页面不跳转
		if ($(".login-username").val() != "" && $(".login-password").val() == "") {
			$(".login-password").focus()
			alert("密码不能为空！")
		} else{
			$(".login-username").focus()
			alert("用户名不能为空！")
		}
	}
})

