/******************************************/
/*****************Lineup*******************/
/******************************************/



/******************************************/
/***************END LINEUP*****************/
/******************************************/


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
			$('.vipInfo').hide();
			$('.platinumInfo').hide();
	}
		else if (getType === 'vipButton'){
		  console.log('VIP');
			$('.vipInfo').show();
			$('.gaInfo').hide();
			$('.platinumInfo').hide();
		}

		else if (getType === 'platinumButton'){
			console.log('plat');
			$('.platinumInfo').show();
			$('.vipInfo').hide();
			$('.gaInfo').hide();
		}

}

})


/******************************************/
/**************END TICKETS*****************/
/******************************************/



