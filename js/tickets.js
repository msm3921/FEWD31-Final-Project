/******************************************/
/****************TICKETS*******************/
/******************************************/
$('document').ready(function(){

console.log('ready');

$('.ticketHeader a').click(showType);

function showType(event){
	event.preventDefault();

	var getType = $(this).attr('class');

	if (getType === 'gaButton'){
		console.log('GA');
			$('.gaInfo').show();
			$('.ticketImage').animate({
				'marginRight':0},800
			);
			$('.ticketInfo').animate({
				'marginLeft':0},800
			);
			$('.startInfo').hide();
			$('.vipInfo').hide();
			$('.platinumInfo').hide();
	}
		else if (getType === 'vipButton'){
		  console.log('VIP');
			$('.vipInfo').show();
			$('.startInfo').hide();
			$('.gaInfo').hide();
			$('.platinumInfo').hide();
		}

		else if (getType === 'platinumButton'){
			console.log('plat');
			$('.platinumInfo').show();
			$('.startInfo').hide();
			$('.vipInfo').hide();
			$('.gaInfo').hide();
		}

}

})



/******************************************/
/**************END TICKETS*****************/
/******************************************/



