// 轮播图
$(function() {
    // var video = document.getElementsByTagName('video');
    var a = document.getElementsByClassName('swiper_text');
    for (i = 0; i < a.length; i++) {
        touch.on(a[i], 'tap', function() {
            $(this).hide();
            $(this).siblings('.picture').hide();
            $('video')[i].play();
        })
    }
})

var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
    })
    // 倒计时
var time1 = document.getElementById('time1');
var time2 = document.getElementById('time2');
var span = document.getElementById('span_');
var rank = document.getElementById('rank');
var num1 = 1972;
var num2 = 20;
var timer1;
var timer2;
time1.addEventListener('webkitAnimationEnd', function() {
    timer1 = setInterval(function() {
        num1++;
        span.innerHTML = num1;
        if (num1 == 1992) {
            clearInterval(timer1)
        }
    }, 50)
})
time2.addEventListener('webkitAnimationEnd', function() {
    timer2 = setInterval(function() {
        rank.innerHTML = num2;
        num2--;
        if (num2 < 1) {
            clearInterval(timer2);
            num2 = 1;
        }
    }, 50)
}, false)