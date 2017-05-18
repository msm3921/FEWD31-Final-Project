$('document').ready(function(){

 $('.artists span').on('click',function(){
      var target = $(this).html();
      var id = $(this).attr('id');
      var imageUrl=0
      var albumUrl=0
      console.log(target);
//       var target2 = target.replace(/ /g,'+');
//       console.log(target2)
    
var request =$.ajax({
        url: "https://api.spotify.com/v1/search?q=" + target.replace(' ', '+') + "&type=artist&limit=1",
        type: 'GET',
        Accept: 'application/json',
        dataType: 'json',
        "Content-Type": 'text/javascript',
        Authorization: 'Bearer BQCUfkE__mAIvgPBq4tZww1BZIKMUiVfx9LIUxKWIeK9qK-YyTQi3n1KNzMLrLLvyUK1aOJVDBT_oBNW3uW---mCTi_2cT9IGrDt3YESCSc2ea6M6bBuyqCmz-dbKFFwSqvLrK5RSMwlFEE'
    })

    request.done(function(response) {
      //debugger;
      //console.log( response.artists.items );
      if (response.artists.items.length === 0){
        return;
      }
      
      var artistId = response.artists.items[0].id;
      
      // insert all your dynamic stuff here...
      //console.log('artistId = ', artistId);
      

var request2 =$.ajax({
        url: "https://api.spotify.com/v1/artists/"+artistId+"/albums?album_type=album&market=ES&limit=1",
        type: 'GET',
        Accept: 'application/json',
        dataType: 'json',
        "Content-Type": 'text/javascript',
        Authorization: 'Bearer BQCUfkE__mAIvgPBq4tZww1BZIKMUiVfx9LIUxKWIeK9qK-YyTQi3n1KNzMLrLLvyUK1aOJVDBT_oBNW3uW---mCTi_2cT9IGrDt3YESCSc2ea6M6bBuyqCmz-dbKFFwSqvLrK5RSMwlFEE'
    })

            request2.done(function(response2) {
              //debugger;
              //console.log( response2.items );
              if (response2.items.length === 0){
                return;
              }
                  //console.log(response2);
            
              var imageUrl= response2.items[0].images[0].url;
              var albumUrl= "https://open.spotify.com/embed?uri="+response2.items[0].uri+"&theme=black";
                 console.log(imageUrl);
                 console.log(albumUrl);
                  
                 
            $('#mylightbox iframe').attr('src', albumUrl);
            $('#mylightbox div').html(target);
            $('#mylightbox img').attr('src', imageUrl);
            $('[data-featherlight]').trigger('click');
            $('html').css("overflow:hidden");
             
              // insert all your dynamic stuff here...
            }) //END REQUEST2
     
}) 
    
 return false;   }) 
  
 

})