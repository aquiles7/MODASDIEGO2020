$(document).ready(function() {
    
    $('#btn_top').fadeOut();
    
   $(window).scroll(function(){
       
       if($(this).scrollTop() > 40 ){
           $('#btn_top').fadeIn();
       } else {
           $('#btn_top').fadeOut();
       }
       
   });

    
    $('#btn_top').click(function(){
        
        $('html, body').animate({scrollTop: 0}, 800);
        
    });
    
});