//步骤一跳转至步骤二
$('.find-btn').click(function(){
	$('.step2').css({display: 'block'})
	$(this).closest('.step1').css({display: 'none'})
})
//步骤二跳转至步骤三
$('.step2 .find-btn').click(function(){
	$('.step3').css({display: 'block'})
	$(this).closest('.step2').css({display: 'none'})
//倒计时5秒钟跳转到登陆页面
    jump(5)
    function jump (count) {
    	window.setTimeout(function () {
    		count--
    		if (count>0) {
    			$('#timedown').html(count)
    			jump(count)
    		} else{
    			window.location.href="12.0_login.html"
    		}
    	},1000)
    }
})
