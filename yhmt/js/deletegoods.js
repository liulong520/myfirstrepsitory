//计算价格
$(function() {
	$(".add").click(function() {
		var t = $(this).parent().find('input[class*=text_box]');
		if(t.val() == "" || undefined || null) {
			t.val(0);
		}
		t.val(parseInt(t.val()) + 1)
		setTotal();
	})
	$(".min").click(function() {
		var t = $(this).parent().find('input[class*=text_box]');
		if(t.val() == "" || undefined || null) {
			t.val(0);
		}
		t.val(parseInt(t.val()) - 1)
		if(parseInt(t.val()) < 0) {
			t.val(0);
		}
		setTotal();
	})
	$(".text_box").keyup(function() {
		var t = $(this).parent().find('input[class*=text_box]');
		if(parseInt(t.val()) == "" || undefined || null || isNaN(t.val())) {
			t.val(0);
		}
		setTotal();
	})

	function setTotal() {
		var s = 0;
		$("#tab li").each(function() {
			var t = $(this).find('input[class*=text_box]').val();
			var p = $(this).find('span[class*=price]').text();
			if(parseInt(t) == "" || undefined || null || isNaN(t) || isNaN(parseInt(t))) {
				t = 0;
			}
			s += parseInt(t) * parseFloat(p);
		});
		$("#total").html(s.toFixed(2));
	}
	setTotal();
})

//删除购物车内容
var alist = document.querySelectorAll('.car-delete')
var carlists = document.querySelector('.car-lists')

for(var i = 0; i < alist.length; i++) {
	alist[i].onclick = function() {
		//获取当前oli的父级li 
		var thisli = this.parentNode
		//删除当前li标签
		carlists.removeChild(thisli)
	}
}

var ckeckalltop = $(".ckeckalltop")
var checklists = $(".shopcheckbox")
ckeckalltop.change(function() {
	if(this.checked) {
		checklists.prop('checked', true)
	} else {
		checklists.prop('checked', false)
	}
})