window.addEventListener('load', function() {
    var jd = new JD();
    jd.categoryLeftSwiper();
    jd.categoryRightSwiper();
    jd.categoryLeftClick();
});

var JD = function() {

}

JD.prototype = {
    // 分类左侧的滑动效果
    categoryLeftSwiper: function() {
        //调用swiper的初始化方法
        var swiper = new Swiper('.category-left .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //支持鼠标滚轮
            mousewheel: true
        });
    },
    categoryLeftClick:function(){
        var slideUl = document.querySelector('.category-left .swiper-slide');
        //给所有的li添加一个索引
        var lis = slideUl.children;
        for(var i = 0 ; i < lis.length;i++){
            lis[i].index = i;
        }
        slideUl.addEventListener('click',function(e){
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            e.target.parentNode.classList.add('active');
            var liHeight = e.target.parentNode.offsetHeight;
            var liIndex = e.target.parentNode.index;
            var translateY = - liIndex * liHeight;
            var maxTranslateY = document.querySelector('.category-left').offsetHeight - slideUl.offsetHeight;
            if(translateY < maxTranslateY){
                translateY = maxTranslateY;
            }
            document.querySelector('.category-left .swiper-wrapper').style.transform = 'translate3d(0px, '+translateY+'px, 0px)';
            document.querySelector('.category-left .swiper-wrapper').style.transition = 'all 0.3s';
        })
    },
    //分类右侧的滑动效果
    categoryRightSwiper: function() {
        //调用swiper的初始化方法
        var swiper = new Swiper('.category-right .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //添加滚动条
	        scrollbar: {
	            el: '.swiper-scrollbar',
	        },
            //支持鼠标滚轮
            mousewheel: true
        });
    }
}
