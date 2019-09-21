 //注册验证
   $.extend($.validator,{
		messages:{
			required: "不能为空.",
			email: "请输入正确的邮箱.",
			url: "请输入正确的地址.",
			equalTo: "两次密码不一样.",
			rangelength: $.validator.format( "请输入6~18为字符." )
		}
	})
	
	$('.validateform').validate({
		
		rules:{
			email:{
				required: true,
			    email: true
			},
			password:{
				required: true,
				rangelength: [6,18]
			},
			repassword:{
				equalTo: $('[name=password]')
			},
			mobile:{
				required: true,
				tel: true
			}
		},
		messages:{
			email:{
				required: '邮箱不能为空'
			}
		}
	})
	$.validator.addMethod('tel',function(value,element){
		
		var reg = /^1[1356789]\d{9}$/
		
		return reg.test(value)
	},'请输入手机号')
	
