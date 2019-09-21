//实名认证

$('#identity').click(function(){
	$(this).closest('.vip-box-left').siblings().children().css({display: 'none'})
	$('.vip-identity').css({
		display: 'block'
	})
})
//订单
$('#dingdan').click(function(){
	$(this).closest('.vip-box-left').siblings().children().css({display: 'none'})
	$('.vip-box-right').css({
		display: 'block'
	})
})
//我的优惠券
$('#coupon').click(function(){
	$(this).closest('.vip-box-left').siblings().children().css({display: 'none'})
    $('.vip-coupon').css({
		display: 'block'
	})
})
//我的积分
$('#integral').click(function(){
	$(this).closest('.vip-box-left').siblings().children().css({display: 'none'})
    $('.vip-integral').css({
		display: 'block'
	})
})