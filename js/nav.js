$('.document').ready(function(){
  
$('.navlist img').click(showNav);
  
  function showNav(event){
    event.preventDefault();
    
   $('.navOptions').toggleClass('hideMe');
    console.log('navShow');




  }
})

