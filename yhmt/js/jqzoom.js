//1.offset()
//获取匹配元素在当前视口的相对偏移。返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效
//2.position()
//获取匹配元素相对父元素的偏移。返回的对象包含两个整型属性：top 和 left。为精确计算结果，请在补白、边框和填充属性上使用像素单位。此方法只对可见元素有效。
//3.width() content的宽度
//4.innerwidth() content+padding
//5.outerwidth() content+padding+border

(function($){
	$.fn.jqzoom = function(options){
		
		var _this=this
		
		var smallimg=$(_this).find('.small-img')
		var smallwidth=smallimg.width()
		var smallheight=smallimg.height()
		
		var popwidth = 0, popheight=0
		var bigwidth=0, bigheight=0
		
		$(_this).mouseenter(function(){
			
			var smallsrc=smallimg.attr('src')
			
			var bightml =`
						<div class="zoom-big" style="width:${options.offwidth}px; height:${options.offheight}px">
							<img src="${smallsrc}" width="800px" height="800px"/>
						</div>`
			
			$(_this).append('<div class="zoom-pop" style="width:50px;height:50px"></div>')
			$(_this).append(bightml)
			
			var bigimg = $(_this).find('.zoom-big img')
			
			bigwidth = bigimg.width()
			bigheight = bigimg.height()
			
			var popx = smallwidth/bigwidth*options.offwidth
			var popy = smallheight/bigheight*options.offheight
			popwidth = popx
			popheight = popy
			$(_this).find('.zoom-pop').css({
				width: popx,
				height: popy
			})
			
		})
        
        $(_this).mouseleave(function(){
        	$(_this).find('.zoom-pop').remove()
        	$(_this).find('.zoom-big').remove()
        })
        $(_this).mousemove(function(e){
        	var pagex=e.pageX
        	var pagey=e.pageY
        	
        	var offsetx = $(_this).offset().left
        	var offsety = $(_this).offset().top
        	
        	var popx = pagex - offsetx - popwidth/2
        	var popy = pagey - offsety - popheight/2
        	
        	popx=popx < 0 ? 0 : popx
        	popy=popy < 0 ? 0 : popy
        	
        	popx=popx > (smallwidth-popwidth) ? (smallwidth-popwidth) : popx
        	popy=popy > (smallheight-popheight) ? (smallheight-popheight)  : popy
        	
        	$('.zoom-pop').css({
        		left: popx,
        		top: popy
        		
        	})
        	
        	$(_this).find('.zoom-big img').css({
        		left: -popx*(bigwidth/smallwidth),
        		top: -popy*(bigheight/smallheight)
        	})
        })
	}
})(jQuery)
