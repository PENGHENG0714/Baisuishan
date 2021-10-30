function setRem() {
    // 设计稿宽度和设备宽度
    var uiW = 375;
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    // 定义比例
    var html_ = document.getElementsByTagName('html')[0];

    html_.style.fontSize = (winW / uiW) * 10 + "px"
}
// 调用函数
setRem();
window.onresize = setRem;

// 导航栏
var side = document.getElementsByClassName('side')[0];
var line = document.getElementsByClassName('line')[0];
var del = document.getElementsByClassName('del')[0];
var ipt1 = document.getElementsByClassName('ipt1');
var dob = document.getElementsByClassName('dob');
touch.on(line, 'tap', function () {
    side.style.display = 'block';
    ipt1[0].style.display = 'block';
})
touch.on(del, 'tap', function () {
    side.style.display = 'none';
    dob[0].style.display = "none";
})


touch.on(ipt1[0], 'tap', function () {
    ipt1[0].style.display = "none";
    dob[0].style.display = "block";
})
