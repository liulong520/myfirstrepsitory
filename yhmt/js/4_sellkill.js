//倒计时
cellkilltime()

var countInterval = setInterval(cellkilltime, 1000)

function cellkilltime() {

	var counttime = countDown('2019-9-2 22:00:00')

	if(parseInt(counttime) <= 0) {
		clearInterval(countInterval)
		return
	}

	var arrtime = counttime.split('')

	var html = `  
			<span class="onbox-time font-24">${arrtime[0]}</span>
			<span class="onbox-time font-24">${arrtime[1]}</span>
			<span>：</span>
			<span class="onbox-time font-24">${arrtime[2]}</span>
			<span class="onbox-time font-24">${arrtime[3]}</span>
			<span>：</span>
			<span class="onbox-time font-24">${arrtime[4]}</span>
			<span class="onbox-time font-24">${arrtime[5]}</span>`

	document.querySelector('.cellkilltime').innerHTML = html
}
