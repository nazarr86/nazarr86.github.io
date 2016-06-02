$(function(){
    var $fields = $(':input');

    $fields.on('focus', function(){
        var $tips = $(this).siblings('span');
        console.log($tips);
        $tips.toggle();
    });
});

