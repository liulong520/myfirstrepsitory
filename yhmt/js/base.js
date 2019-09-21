//底部、侧边、头部等公共部分的逻辑
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName

//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[]

var asideLists =  document.querySelectorAll(".asidebar-bar")
//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间， 给每一个单独添加移入时间
for(var i = 0; i< asideLists.length; i++) {
	
	asideLists[i].onmouseenter = function() {
		
		//this  指向当前函数的执行的对象  li ,没有指向window
		//获取子节点
		var bar = this.children[1]
		if (!bar) {
			return
		}
		//需要right的值从45 变到 35
		//定时器  让一个时间延迟执行  时间可以自定义
		//setInterval(延迟执行的动作， 延迟的时间)
		var right = 45
		var timer = setInterval(function(){

			right = right-1;
			if(right<=35) {
				//clearInterval(定时器名字)
				clearInterval(timer)
			}else {
				bar.style.right = right+'px'
			}
		}, 10)
	}
}


//返回顶部
var returntop=document.querySelector('.return-top')
returntop.onclick=function(){
	
	var scrolltop=document.body.scrollTop || document.documentElement.scrollTop
	
	var timer=setInterval(function  () {
		scrolltop=scrolltop-50
		
		document.body.scrollTop=scrolltop
		document.documentElement.scrollTop=scrolltop
		if (scrolltop<=0) {
			clearInterval(timer)
		}
	},1)
}


//点击控件内容弹出
var slidebars=document.querySelectorAll('.aside-slide-bar')
var asideslide=document.querySelector('.aside-slide')

for (var i=0;i<slidebars.length;i++) {
	slidebars[i].onclick=function(){
		
		var right=''
		if (asideslide.currentStyle) {
			right=asideslide.currentStyle.right
		} else{
			right=getComputedStyle(asideslide,false)['right']
		}
		
		
		right=parseInt(right)
		var speed= 0
		//classList获取元素类名   数据类型为对象
		//className获取元素类名   数据类型为字符串
		//classList.add 往元素上添加一个类型    如添加‘on’ this.classList.add('on')
		//this.classList.remove('on') 移除“on"
		
		className = this.className
		//className.indexOf('on') 查找类名字符串中是否有on 这个类名
		//如果有返回下标 没有返回-1
		if (right>-264 && className.indexOf('on') >=0) {
			//回去   35 -264
			speed=-12
			this.classList.remove('on')
			
		} else{
			//出来 -262  35
			speed=12
			this.classList.add('on')
			
			//判读是购物车还是客服
			//判断是否有购物车这个类名
			var cart=document.querySelector('.aside-slide-car')
			var server=document.querySelector('.aside-slide-server')
			
			if (className.indexOf('asidebar-car')>=0 ){
				
				//将当前元素的下一个元素节点的on去掉
				this.nextElementSibling.classList.remove('on')
				cart.style.display='block'
				server.style.display='none'
			}else{
				//显示客服
				cart.style.display='none'
				server.style.display='block'
				//将当前元素的上一个元素节点的on去掉
				this.previousElementSibling.classList.remove('on')
			}
		}
		
		var timer=window.setInterval(function  () {
			
			right+=speed
			
			if ((right>35 && speed>0)||(right<-264 && speed<0)) {
				clearInterval(timer)
			} else{
				asideslide.style.right=right+'px'
			}
		},10)
	}
}