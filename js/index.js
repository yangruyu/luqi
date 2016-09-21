$(function () {
    function normal() {
       $('.words span').text('HI!');
       $('.inner-circle').css({
           border:'15px solid #fff'
       })
    $('.out-circle').css({
        transition:'all .8s ease',
        transform:'scale(1.05,1.05)'
    }).delay(800).queue(function(){
        $(this).css({
            transform:'scale(1,1)',
        }).dequeue();
    })
    $('.inner-circle').delay(1600).queue(function () {
        $(this).css({
            transition:'all 1s ease',
            transform:'scale(0.85,0.85)'
        }).dequeue();
    }).delay(1000).queue(function(){
        $(this).css({
            transform:'scale(1,1)'
        }).dequeue();
    })
   };
    function speed() {
        $('.words span').text('我很生气');
        $('.inner-circle').css({
            border:'15px solid red'
        })
        $('.out-circle').css({
            transition:'all .4s ease',
            transform:'scale(1.05,1.05)'
        }).delay(400).queue(function(){
            $(this).css({
                transform:'scale(1,1)',
            }).dequeue();
        })
        $('.inner-circle').delay(800).queue(function () {
            $(this).css({
                transition:'all .6s ease',
                transform:'scale(0.85,0.85)'
            }).dequeue();
        }).delay(600).queue(function(){
            $(this).css({
                transform:'scale(1,1)'
            }).dequeue();
        })
    };
    function second() {
        $('.words span').text('我很开心');
        $('.inner-circle').css({
            border:'15px solid green'
        })
        $('.out-circle').css({
            transition:'all .4s ease',
            transform:'scale(1.05,1.05)'
        }).delay(400).queue(function(){
            $(this).css({
                transform:'scale(1,1)',
            }).dequeue();
        })
        $('.inner-circle').delay(800).queue(function () {
            $(this).css({
                transition:'all .6s ease',
                transform:'scale(0.85,0.85)'
            }).dequeue();
        }).delay(600).queue(function(){
            $(this).css({
                transform:'scale(1,1)'
            }).dequeue();
        })
    };
    function ciacle() {
        setTimeout(function () {
            normal();//2000
        },0);
        setTimeout(function () {
            speed();//2000
        },3600);
        setTimeout(function () {
            second();//2000
        },6000);
    }
    ciacle();
    setInterval(ciacle,8600);
})