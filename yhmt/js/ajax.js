
//推荐商品渲染
var requesturl = 'http://192.168.97.242:3001/'

for(var j = 0; j < 3; j++) {
	sendajax(j)
}

function sendajax(id) {
	$.ajax({
		type: "get",
		url: requesturl + 'lists?id=' + id,
		async: true,
		dataType: 'json',
		success: function(res) {
			console.log(res)
			if(res.success) {
				var lists = res.list

				var html = ''
				for(var i = 0; i < lists.length; i++) {

					html += `<li >
									<img src="${ requesturl + lists[i].img}" />
									<div class="text-ellipsis">
										${lists[i].title}
									</div>
									<span class="text-main">¥${lists[i].price}</span>
								</li>`
				}
				$('.recommand-lists').eq(id).html(html)
			}
		}
	})
}

//首页轮播图渲染
$.ajax({
	type: "get",
	url: requesturl + 'getBanner',
	async: true,
	dataType: 'json',
	success: function(res) {
		console.log(res)
		if(res.success) {
			var lists = res.list

			var html = ''
			for(var i = 0; i < lists.length; i++) {

				html += `<img src="${requesturl + lists[i].img}" />`
			}
			$('.cursoal-slide').html(html)
		}
	}
})