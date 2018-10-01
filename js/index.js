//采用对象来封装函数可以减少全局变量的污染,函数多了就可以叫框架.
window.addEventListener('load',function(){
    var jd = new JD();
    jd.searchGradient();
    jd.downTime();
    jd.silde();
});

/*封装一个京东构造函数对象*/
var JD = function (){

};
/*往对象原型中添加函数*/
JD.prototype = {
    //顶部滚动背景色渐变事件
    searchGradient: function(){
        window.addEventListener('scroll',gradientFUN);
        gradientFUN();
        //封装成一个函数,是页面一打开就就调用一次函数,避免出现打开页面出现渐变背景色
        function gradientFUN(){
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            //console.log(scrollTop);
            var slideHeight = document.querySelector('#slide').offsetHeight;
            var opacity = 0;
            if(scrollTop < slideHeight){
                opacity = (scrollTop/ slideHeight)*1;
            }else{
                opacity = 1;
            }
            document.querySelector('#header').style.backgroundColor = 'rgba(222,24,27,' + opacity+')';       
        };
    },
    //秒杀倒计时事件
    downTime:function(){
        //设置一个未来时间
        var futureTime = new Date(2018,7,30,14,0,0).getTime();
        //获取当前时间
        var nowTime = new Date().getTime();
        //将时间转为秒数
        var time = Math.floor((futureTime - nowTime) / 1000);
        var spans = document.querySelectorAll('.seckill-time span');
        var timeId ;
        //不封装函数,页面打开就加载倒计时的话,会有延迟效果
        timeId = setInterval(setSeckill,1000)
        setSeckill();
        function setSeckill(){
            time--;
            if(time <= 0){
                time = 7200
            }
            // 或者让time = 0;并且清除计时器,也是一种方案
            var hour = Math.floor(time / 3600)%24;
            var minute = Math.floor(time / 60) % 60;
            var second = Math.floor(time % 60);
            spans[0].innerHTML = Math.floor(hour/10);
            spans[1].innerHTML = Math.floor(hour%10);
            spans[3].innerHTML = Math.floor(minute/10);
            spans[4].innerHTML = Math.floor(minute%10);
            spans[6].innerHTML = Math.floor(second/10);
            spans[7].innerHTML = Math.floor(second%10);
        };
    },
    //轮播图轮播事件
    silde:function(){
         //初始化轮播图
         var mySwiper = new Swiper('.swiper-container', {
            //自动轮播图的参数
            autoplay: {
                //自动轮播图的间隔时间
                delay: 1000,
                //在手指滑动后是否要再次开启自动轮播图
                disableOnInteraction: false,
            },
            //无缝轮播图参数
            loop: true,
            //初始化小圆点 注意页面需要有这个容器
            pagination: {
                el: '.swiper-pagination',
            },           
        });
    }
};