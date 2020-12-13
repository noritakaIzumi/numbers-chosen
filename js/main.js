(function(){

	let messages = {
		1:'1を選びましたね。\nつまりAですね。めくります。',
		2:'2を選びましたね。\n左から2番めのカードをめくります。',
		3:'3を選びましたね。\n左から3番めのカードをめくります。',
		4:'4を選びましたね。\n右から4番目のカードをめくります。',
		5:'5を選びましたね。\n右から5番目のカードをめくります。',
		6:'では、すべてのカードを表に向けます。',
	};

	var flipCard = function(target){
		var $currentElm = $('#no' + target + '-back');
		var $targetElm = $('#no' + target + '-face');
		var parent = $currentElm.parent();

		parent.addClass("animate");
		$targetElm.addClass("animate");
		var timer = setTimeout(function() {
			$currentElm.removeClass("active").addClass("animate");
			$targetElm.removeClass("animate").addClass("active");
			parent.removeClass("animate").addClass("animateEnd");
			var timer = setTimeout(function() {
				parent.removeClass("animateEnd");
				$currentElm.removeClass("animate");
				parent.removeClass("animate");
			}, 500);
		}, 500);
		return false;
	};


	$(document).ready(function(){
		console.log('Start');



		$(".btn").click(function() {
			$('.btn-list').addClass('clear');

			let target = $(this).text();

			alert(messages[target]);

			if(target == 1 || target == 2 || target == 5){
				flipCard(2);
			}else if(target == 3 || target == 4){
				flipCard(3);
			}else if(target == 6){
				flipCard(1);
				flipCard(3);
				flipCard(5);
			}

			var timer = setTimeout(function(){
				alert('赤いカードを選びましたね？');
			}, 2000);

		});
	});
})();