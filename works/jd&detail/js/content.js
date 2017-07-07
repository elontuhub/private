$(function(){
	//头部选项
$('.hinner .left').hover(function(){
	$('.hinner .left').removeClass('ac');
	$(this).addClass('ac');
},
function(){
	$('.hinner .left').removeClass('ac');
	$('.hinner .left').eq(0).addClass('ac');
})
//搜索框点击
$('.htmt .ft').click(function(){
	$(this).val('');
})
	//选择尺码
	$('.z3 li').click(function(){
			$('.z3 li').removeClass('ac');
			$(this).addClass('ac');
	})
	//选择数量
	$('.d0 .d1 .d11').click(function(){
		var a=$('.d0 .p0').html();
		a++;
		$('.d0 .p0').html(a);
	})
	$('.d0 .d1 .d22').click(function(){
			var a=$('.d0 .p0').html();
		a--;
		if (a<1) {
			a=1
		}
		$('.d0 .p0').html(a);
		})
	//选项卡1
	function x1(){
	var i=0
	$('.mml .mm0').click(function(){
		var i=$(this).index();
		$('.mml .mm0').removeClass('ac');
		$(this).addClass('ac');
		$('.mml .t img,.mml .t1 img').attr({'src':"images/fd"+i+".jpg"});
	})
	$('.mml .left').click(function() {
		if (i<1) {
			i=1
		}
		$('.mml .t img,.mml .t1 img').attr({'src':"images/fd"+i+".jpg"});
		i--;
		$('.mml .mm0').removeClass('ac');
		$('.mml .mm0').eq(i).addClass('ac');
	})
	$('.mml .right').click(function() {
	i++;
	i++;
	if(i>4){
		i=5;
	}
	$('.mml .t img,.mml .t1 img').attr({'src':"images/fd"+i+".jpg"});
	i--;
	if (i>4) {
		i=4
	}
	$('.mml .mm0').removeClass('ac');
	$('.mml .mm0').eq(i).addClass('ac');
	})
	}
	x1()
	//放大镜
	$('.mml .t').mousemove(function(ev){
		$('.mml .t span').show();
		$('.mml .t1').show();
		var x=ev.pageX-$(this).offset().left-$('.mml .t span').width()/2;
		var y=ev.pageY-$(this).offset().top-$('.mml .t span').height()/2;
		if (x<0) {
			x=0;
		}
		if (x>$(this).width()-$('.mml .t span').width()) {
			x=$(this).width()-$('.mml .t span').width();
		}
		if (y<0) {
			y=0;
		}
		if (y>$(this).height()-$('.mml .t span').height()) {
			y=$(this).height()-$('.mml .t span').height();
		}
		$('.mml .t span').css({'left':x,'top':y})
		$('.mml .t1 img').css({'left':-2.24*x,'top':-2.24*y})
	})
	$('.mml .t').mouseleave(function(){
		$('.mml .t span').hide();
		$('.mml .t1').hide();
	})
	//选项卡2
	$('.m2b ul').eq(0).hide();
	$('.m2 .ph1').hover(function(){
		$('this').addClass('ac');
		$('.m2 .ph2').removeClass('ac');
		$('.m2b ul').eq(0).show()
		$('.m2b ul').eq(1).hide();
	},
	function(){
		$('.m2 .ph1').addClass('ac');
	})
		$('.m2 .ph2').hover(function(){
		$('this').addClass('ac');
		$('.m2 .ph1').removeClass('ac');
		$('.m2b ul').eq(1).show()
		$('.m2b ul').eq(0).hide();
	},
	function(){
		$('.m2 .ph2').addClass('ac');
	})
})