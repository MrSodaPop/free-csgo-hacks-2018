$(document).ready(function(){
    $('html').keypress(countDown);
    $('html').click(countDown);
});

var countDown = function(time) {
    if(complete){return}else{complete=true};
    time = 3200;
    $('.instruction').hide();
    $('.loading').show();
    setTimeout(function(){
        $('.loading').hide();
        $('html').css('background-color','black');
        $('body').css('background-color','black');
        $('.picture').append('<img src="media/picture.png"/>');
        var audio = new Audio('media/audio.mp3');
        audio.play();
    },time)
}

var complete = false;