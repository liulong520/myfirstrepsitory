//评论
var commentbtn= $(".appraise-right-text12")
var send = $(".send")

commentbtn.click(function(){
    $(".information").toggle()
})


send.click(function() {
	var value = $("[name=content-text]").val()
	if(value) {
		if(confirm("是否发表评论")) {
			var html = `
				<li class="comment-lists  clearfix">
						<div class="comment-lists-left fl">
							<div class="comment-lists-img">
								<img src="img/touxiang.png" width="40px" height="40px" />
							</div>
							<span class="comment-lists-text">
				    				h****o
				    			</span>
						</div>
						<div class="comment-lists-right fl">
							<span>好评</span>
							<span>|</span>
							<span>2016-11-29  16:10:45</span>
							<span class="comment-lists-text1 text-line-clamp">${value}</span>
						</div>
					</li>`
			$(".comment li:nth-child(2)").prepend(html)
			$("[name=content-text]").val('')
			$('.information').css({
				display: 'none'
			})
		}
	}
})