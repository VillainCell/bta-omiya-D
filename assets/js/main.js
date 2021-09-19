$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3200); //3.2秒後にロゴ含め真っ白背景をフェードアウト
});