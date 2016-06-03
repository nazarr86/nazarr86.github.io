$(function(){
    $(':input').hover(
        function(){
           $(this).siblings('span').show();
        },
        function(){
            $(this).siblings('span').hide();
        }
    );

    var $button = $('button');
    $button.on('click', function(e){
        e.preventDefault();
        var $helps = $('span').toggle();
    })
});
