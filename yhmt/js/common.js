/*
 *countDown   倒计时
 * @param future date 表示倒计时结束时间   IS NOT NUll
 * @param history date 表示倒计时开始时间
 * 将时间转换为相差的时分秒字符串返回
 */

function countDown(future, histry) {

	if(!histry) {
		//当前时间距离1970年1月1日毫秒数
		histry = new Date().getTime()
	} else {
		histry = new Date(histry).getTime()
	}
	//倒计时结束时间距离1970年的毫秒数
	future = new Date(future).getTime()

	//倒计时相差的毫秒数
	var distance = future - histry

	if(distance <= 0) {
		return '000000'
	}

	//距离毫秒数- 小时毫秒数 =  分钟毫秒数 + 秒的毫秒数
	//1小时  1*60*60*1000
	//向下取整 Math.floor()
	var hours = Math.floor(distance / (60 * 60 * 1000))

	//1分钟 1*60*1000

	var minutes = Math.floor((distance - hours * 60 * 60 * 1000) / (60 * 1000))

	var seconds = Math.floor((distance - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000)

	return changeLength(hours) + changeLength(minutes) + changeLength(seconds)
}

/*
 *changeLength   将一位数的时间转换为两位数
 * @param num string|number 表示转换的字符   IS NOT NUll
 */
function changeLength(num) {
	//判断长度
	num = String(num)

	if(num.length <= 1) {
		num = '0' + num
	}

	return num
}

//倒计时
timemethy()

var countInterval = setInterval(timemethy, 1000)

function timemethy() {

	var counttime = countDown('2019-9-3 12:00:00')

	if(parseInt(counttime) <= 0) {
		clearInterval(countInterval)
		return
	}

	var arrtime = counttime.split('')

	var html = `  
			<span class="time">${arrtime[0]}</span>
			<span class="time">${arrtime[1]}</span>
			<span>：</span>
			<span class="time">${arrtime[2]}</span>
			<span class="time">${arrtime[3]}</span>
			<span>：</span>
			<span class="time">${arrtime[4]}</span>
			<span class="time">${arrtime[5]}</span>`

	document.querySelector('.count-down').innerHTML = html
}

//tab 切换
function changetab(parentclass) {
	var parent = document.querySelector(parentclass)
	var tabtitle = parent.querySelectorAll('.tab-title')
	var tablists = parent.querySelectorAll('.tab-lists')

	for(var i = 0; i < tabtitle.length; i++) {

		tabtitle[i].index = i
		tabtitle[i].onmouseenter = function() {
			for(var j = 0; j < tablists.length; j++) {
				tabtitle[j].classList.remove('active')
				tablists[j].classList.remove('active')
			}

			this.classList.add('active')

			tablists[this.index].classList.add('active')
		}
	}
}

//调用tab切换
//changetab('.tab-box')
changetab('.tab-box1')
changetab('.tab-box2')
changetab('.tab-box3')

//<!--jQuery tab切换-->
$(".tab-title").mouseenter(function() {

	$(this).addClass('active')
	$(this).siblings().removeClass('active')
	console.log($(this).siblings().removeClass('active'))
	var index = $(this).index()

	var parent = $(this).parents('.tab-box')

	var ele = parent.find('.tab-lists')
	ele.eq(index).addClass('active')

	ele.eq(index).siblings().removeClass('active')
})