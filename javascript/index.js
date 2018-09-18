$(document).ready(function(){
    var time = 5000;
    countDown(time)
});

var countDown = function(time) {
    setTimeout(function(){
        $('.loading').hide();
        $('html').css('background-color','black');
        $('body').css('background-color','black');
        $('.picture').append('<img src="media/picture.png"/>');
        var audio = new Audio('media/audio.mp3');
        audio.play();
    },time)
}