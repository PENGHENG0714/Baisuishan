function setRem() {
    // 设计稿宽度和设备宽度
    var uiW = 375;
    var winW = document.documentElement.clientWidth,
    // 定义比例
    var html_ = document.getElementsByTagName('html')[0];

    html_.style.fontSize = (winW / uiW) * 10 + "px"
}
// 调用函数
setRem();
window.onresize = setRem;
