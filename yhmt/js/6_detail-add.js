//加减数量 
$(".add").click(function() {
		
	var n = $(this).prev().html();
	var num = parseInt(n) + 1;
	if (num == 0) {
		return;
	}
	$(this).prev().html(num);
});
$(".jian").click(function() {
	var n = $(this).next().html();
	var num = parseInt(n) - 1;
	if (num == 0) {
		return;
	}
	$(this).next().html(num);
});


var imgbox= $('.detailt-img-box img')
    
var pre = $('.detail-left-pre')
var next = $('.detail-left-next')
var index = 0
    
//$(this).closest('.detail-big-img').siblings('.detail-img').remove()
imgbox.click(function(){
    var imgboxsrc = $(this).attr('src')
    	
    var html = `<img class="small-img" src="${imgboxsrc}" width="400px" height="400px"/>`
    	
    $('.jqzoom').append(html)
    	
    return
})

    //点击下一个
pre.click(function(){
	index++
	if(index<imgbox.length-4) {
		$('.detailt-img-box').css({
			left: '-=70'
		})
	}else{
			
		index=1
		$('.detailt-img-box').css({
			left: '140'
		})
    }
})
	//点击上一个
next.click(function(){
    index++
	console.log(11)
	if (index<imgbox.length-5) {
		$('.detailt-img-box').css({
			left: '+=70'
		})
	}else{
//		index++
		$('.detailt-img-box').css({
			left: '-140'
		})
	}
})