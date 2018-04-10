//初始化
{
    var mySwiper = new Swiper('.swiper-container',{
        autoplay:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
    var mySwiper1 = new Swiper('.swiper-container1',{
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
}
// {
//     var iscroll = new IScroll('.content',{
//         mouseWheel: true,
//         scrollbars: true,//在iScroll初始化时开启鼠标滚轮支持和滚动条支持
//         shrinkScrollbars:"scale",
//         fadeScrollbars:true,
//         click:true//手机上可以点击
//     });
// }