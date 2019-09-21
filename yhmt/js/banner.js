
window.onload = function(){
	carsoul()
}

function carsoul(){
	if(autoIntervarl){
		clearInterval(autoIntervarl)
	}
	//获取轮播图盒子
	var cursoalslide = document.querySelector('.cursoal-slide')
	//获取轮播图盒子每一张图片
	var cursoalimg = document.querySelectorAll('.banner-cursoal img')
	
	var bannercursoal = document.querySelector('.banner-cursoal')
	//点击按钮
	var abtn = document.querySelectorAll('.cursoal-btn')
	//圆点
	var adot = document.querySelectorAll('.cursoal-dot li')
	
	//可以获取以下属性方法 ：offsetWidth offsetHeight  offsetLeft offsetTop
	var imgwidth = cursoalimg[0].offsetWidth
	
	var imglength = cursoalimg.length
	//获取图片集cursoalslide的宽度：imgwidth * imglength
	cursoalslide.style.width = imgwidth * imglength + 'px'
	
	//标记图片下标
	var index = 0
	//当前圆点的下标
	var dotIndex = 0
	var autoIntervarl = null
	
	autoAnimate()
	
	function autoAnimate() {
		autoIntervarl = setInterval(function() {
			animate(-10, 'left')
		}, 2000)
	}
	
	function animate(speed, position) {
		changeDot(position)
		//图片滚动执行一次到imglength - 1停止滚动
		var timer = setInterval(function() {
			var left = cursoalslide.offsetLeft + speed
			cursoalslide.style.left = left + 'px'
	
			var curIndex = 0; //表示即将要运动到图片的下标
			if(position == 'left') {
				curIndex = index + 1
			} else {
				curIndex = index - 1
			}
	
			if((left <= -(curIndex) * imgwidth && speed < 0) || (left >= -curIndex * imgwidth && speed > 0)) {
				clearInterval(timer)
				index = curIndex
	
				//4. 判断运动到最后一张是返回显示第一张
				if(index >= imglength - 1) {
					index = 1;
					cursoalslide.style.left = -imgwidth + 'px'
				} else if(index <= 0) {
					index = imglength - 2
					cursoalslide.style.left = -index * imgwidth + 'px'
				}
			}
		}, 10)
	}
	//点击箭头滑动图片
	for(var i = 0; i < abtn.length; i++) {
		abtn[i].onclick = function() {
			var className = this.className
			if(className.indexOf('pre') >= 0) {
				//左箭头  图片往右走
				animate(10, 'right')
			} else {
				//右箭头 图片往左走
				animate(-10, 'left')
			}
		}
	}
	
	//圆点跟随图片位置显示图片相应的位置
	function changeDot(position) {
	
		if(position == 'left') {
			dotIndex++
		} else {
			dotIndex--
		}
	
		if(dotIndex > adot.length - 1) {
			dotIndex = 0
		} else if(dotIndex < 0) {
			dotIndex = adot.length - 1
		}
	
		for(var i = 0; i < adot.length; i++) {
			//当移动到adot[i]上时移除'on'
			adot[i].classList.remove('on')
		}
	
		adot[dotIndex].classList.add('on')
	
	}
	
	//鼠标移入时暂停
	bannercursoal.onmouseenter = function() {
		clearInterval(autoIntervarl)
	}
	//鼠标移开时执行autoAnimate()
	bannercursoal.onmouseleave = function() {
		autoAnimate()
	}
	
	//浏览器监听事件，解决切换。作用是当页面别隐藏是计时器停在那里，这里表现为图片停在原地
	document.addEventListener('webkitvisibilitychange', function() {
		var isHidden = document.webkitVisibilityState
		if(isHidden == 'hidden') {
			clearInterval(autoIntervarl)
		} else {
			autoAnimate()
		}
	})
	
	for(var i = 0; i < adot.length; i++) {
	
		adot[i].dot = i
		adot[i].onclick = function() {
	
			if(this.dot < dotIndex) {
				//点击圆点左边
				index = this.dot + 2
				dotIndex = this.dot + 1
	
				animate(10, 'right')
			} else {
	
				index = this.dot
				dotIndex = this.dot - 1
				animate(-10, 'left')
			}
		}
	}
}





