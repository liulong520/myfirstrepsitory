//轮播图上传图片
var requesturl ='http://192.168.43.20:3001/';

var request=new XMLHttpRequest();


request.open("get",requesturl+'getBanner',true)

request.send();

request.onreadystatechange = function(){
	
	console.log(request.readyState)
	
	if (request.readyState == 4) {
		console.log(request.responseText)
		var result =JSON.parse(request.responseText)
		console.log(result)
		if(result.success == true){
			var lists = result.list
			var slide = document.querySelector('.cursoal-slide')
			
			var html = ''
			for (var i=0;i<lists.length;i++) {
				
				html += '<img src="${requesturl + lists[i].img}" />'
			}
			slide.innerHTML=html
		}
		
	}
}
