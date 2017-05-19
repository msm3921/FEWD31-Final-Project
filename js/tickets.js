/******************************************/
/****************TICKETS*******************/
/******************************************/
$('document').ready(function(){

console.log('ready');

$('.ticketHeader li').click(showType);


 function showType(event){
  event.preventDefault();

  // window.addEventListener('resize',function(){
  // if(window.innerWidth > 600){
  var getType = $(this).attr('class');
 
      if (getType !== 'gaButton' & $('.gaInfo').hasClass('reset')){
      $('.gaInfo>.ticketImage').animate({left: "+=35%" }, 200,'easeOutBounce');
      $('.gaInfo>.ticketInfo').animate({left: "-=110%" }, 200,'easeOutBounce');
      $('.gaInfo').removeClass('reset');
}
  
      if (getType !== 'vipButton' & $('.vipInfo').hasClass('reset')){
      $('.vipInfo>.ticketImage').animate({left: "+=35%" }, 200,'easeOutBounce');
      $('.vipInfo>.ticketInfo').animate({left: "-=110%" }, 200,'easeOutBounce');
      $('.vipInfo').removeClass('reset');
}   
  
      if (getType !== 'superButton' & $('.superVIPInfo').hasClass('reset')){
      $('.superVIPInfo>.ticketImage').animate({left: "+=35%" }, 200,'easeOutBounce');
      $('.superVIPInfo>.ticketInfo').animate({left: "-=110%" }, 200,'easeOutBounce');
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
     $('.gaInfo>.ticketImage').animate({left: "-=35%" }, 1200,'easeOutBounce');
   $('.gaInfo>.ticketInfo').animate({left: "+=110%" }, 1200,'easeOutBounce');
    $('.vipInfo').removeClass('active');
    $('.superVIPInfo').removeClass('active');


} //end gaButton


else if ((getType === 'vipButton')&$('.vipInfo').hasClass('active')){
   console.log('nothing');
}
    else if (getType === 'vipButton'){
      console.log('VIP');
     $('.vipInfo').addClass('reset active');
     $('.gaInfo').hide();
     $('.superVIPInfo').hide();
     $('.vipInfo').show();
     $('.vipInfo>.ticketImage').animate({left: "-=35%" }, 1200,'easeOutBounce');
     $('.vipInfo>.ticketInfo').animate({left: "+=110%" }, 1200,'easeOutBounce');
     $('.gaInfo').removeClass('active');
     $('.superVIPInfo').removeClass('active');

} //end vipButton


 else if ((getType === 'superButton')&$('.superVIPInfo').hasClass('active')){
   console.log('nothing');
}
    else if (getType === 'superButton'){
      console.log('super');
      $('.superVIPInfo').addClass('reset active');
      $('.gaInfo').hide();
      $('.vipInfo').hide();
      $('.superVIPInfo').show();
      $('.superVIPInfo>.ticketImage').animate({left: "-=35%" }, 1200,'easeOutBounce');
      $('.superVIPInfo>.ticketInfo').animate({left: "+=110%" }, 1200,'easeOutBounce');
      $('.gaInfo').removeClass('active');
      $('.vipInfo').removeClass('active');


} //end superButton

// } //end inner window

// }) //end window.addEventListener

} //end showType

}) //end document.ready

/******************************************/
/**************END TICKETS*****************/
/******************************************/



