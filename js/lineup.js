$('document').ready(function(){

	$('.artists a').click(popUp);


	function popUp(event){
		event.preventDefault();

		var target = $(this).html();

		console.log(target);

		$('.artists').addClass(popUp);

	}

})