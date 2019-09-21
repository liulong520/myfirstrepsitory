//success function(){}回调函数  在参数中传入一种方法
//datatype json string
//options Object
function ajaxpackage (options) {
	console.log(options)
	//1.创建加载
	var request =new XMLHttpRequest()
	//2.打开请求 
	request.open(options.type || 'get',options.url,options.propogation)
	//3.发送请求
	request.send(options.data || null)
	//4.监听请求状态
	request.onreadystatechange=function(){
		if (request.readyState ==4 && request.status ==200) {
			var data = request.responseText
			if (options.datatype == 'json') {
				data = JSON.parse(data)
			}
			options.success(data)
		}
		
	}
}