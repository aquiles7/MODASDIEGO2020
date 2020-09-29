$(document).ready(function() {
    
    $('input[type="checkbox"]').on('click', function() {
        
        var name = $(this).val();
        
        if( $(this).is(':checked') ){
            
            function showProduct() {
                $('.pro[category="'+name+'"]').show();
                $('.pro[category="'+name+'"]').css('transition', 'all .4s');
                $('.pro[category="'+name+'"]').css('transform', 'scale(1)');
            } setTimeout(showProduct, 400);
            
        } else {
            
            $('.pro[category="'+name+'"]').css('transition', 'all .4s');
            $('.pro[category="'+name+'"]').css('transform', 'scale(0)');
            function hideProduct() {
                $('.pro[category="'+name+'"]').hide();
            } setTimeout(hideProduct, 400);
            
        };
        
    });
    
});