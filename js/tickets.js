/******************************************/
/****************TICKETS*******************/
/******************************************/
$('document').ready(function(){

console.log('ready');

$('.ticketHeader li').click(showType);


function showType(event){
	event.preventDefault();

	var getType = $(this).attr('class');
 
      if (getType !== 'gaButton' & $('.gaInfo').hasClass('reset')){
      $('.gaInfo>.ticketInfo').animate({left: "+=50%" }, 200,'easeOutBounce');
      $('.gaInfo>.ticketImage').animate({left: "-=75%" }, 200,'easeOutBounce');
      $('.gaInfo').removeClass('reset');
}
  
      if (getType !== 'vipButton' & $('.vipInfo').hasClass('reset')){
      $('.vipInfo>.ticketInfo').animate({left: "+=50%" }, 200,'easeOutBounce');
      $('.vipInfo>.ticketImage').animate({left: "-=75%" }, 200,'easeOutBounce');
      $('.vipInfo').removeClass('reset');
}   
  
      if (getType !== 'superButton' & $('.superVIPInfo').hasClass('reset')){
      $('.superVIPInfo>.ticketInfo').animate({left: "+=50%" }, 200,'easeOutBounce');
      $('.superVIPInfo>.ticketImage').animate({left: "-=75%" }, 200,'easeOutBounce');
      $('.superVIPInfo').removeClass('reset');
}
  
if ((getType === 'gaButton')&$('.gaInfo').hasClass('active')){
   console.log('nothing');
}
 else if (getType === 'gaButton'){
		console.log('GA');
    $('.gaInfo').addClass('reset active');
    $('.vipInfo').hide();
    $('.superVIPInfo').hide();
    $('.gaInfo').show();
		$('.gaInfo>.ticketInfo').animate({left: "-=50%" }, 1200,'easeOutBounce');
    $('.gaInfo>.ticketImage').animate({left: "+=75%" }, 1200,'easeOutBounce');
    $('.vipInfo').removeClass('active');
    $('.superVIPInfo').removeClass('active');
	}
else if ((getType === 'vipButton')&$('.vipInfo').hasClass('active')){
   console.log('nothing');
}
		else if (getType === 'vipButton'){
		  console.log('VIP');
     $('.vipInfo').addClass('reset active');
     $('.gaInfo').hide();
     $('.superVIPInfo').hide();
     $('.vipInfo').show();
     $('.vipInfo>.ticketInfo').animate({left: "-=50%" }, 1200,'easeOutBounce');
     $('.vipInfo>.ticketImage').animate({left: "+=75%" }, 1200,'easeOutBounce');
     $('.gaInfo').removeClass('active');
     $('.superVIPInfo').removeClass('active');
		}
 else if ((getType === 'superButton')&$('.superVIPInfo').hasClass('active')){
   console.log('nothing');
}
		else if (getType === 'superButton'){
			console.log('super');
      $('.superVIPInfo').addClass('reset active');
      $('.gaInfo').hide();
      $('.vipInfo').hide();
      $('.superVIPInfo').show();
		  $('.superVIPInfo>.ticketInfo').animate({left: "-=50%" }, 1200,'easeOutBounce');
      $('.superVIPInfo>.ticketImage').animate({left: "+=75%" }, 1200,'easeOutBounce');
      $('.gaInfo').removeClass('active');
      $('.vipInfo').removeClass('active');
    }
  
}
})
/******************************************/
/**************END TICKETS*****************/
/******************************************/



