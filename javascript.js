
    $(document).ready(function(){
    $(".banner .pic li:not(:first-child)").hide();
    //鼠标点击下方按钮，图片进行切换效果
    $(".anniu li").click(function(){
        var num=$(this).index();
        $(this).toggleClass("on").siblings().removeAttr("class");
        $(".banner .pic li").filter(":visible").fadeOut(500).parent().children().eq(num).fadeIn(1000);
        $(".txt").text($(".pic li img").eq(num).attr("alt"));
    });
    //左右按钮显示或隐藏效果
    $(".banner").hover(function(){
        $(".lr").show();
    },function(){
        $(".lr").hide();
    });
    //点击左右按钮，图片进行左右切换效果
    var a = 0;
    $(".right").click(function(){
        a++;
        a = a % 5;
        $(".banner .pic li").filter(":visible").fadeOut(500).parent().children().eq(a).fadeIn(1000);
        $(".anniu li").eq(a).toggleClass("on").siblings().removeAttr("class");
        $(".txt").text($(".pic li img").eq(a).attr("alt"));
    });
    $(".left").click(function(){
        a--;
        a = a % 5;
        if(a<0){a=4}
        $(".banner .pic li").filter(":visible").fadeOut(500).parent().children().eq(a).fadeIn(1000);
        $(".anniu li").eq(a).toggleClass("on").siblings().removeAttr("class");
        $(".txt").text($(".pic li img").eq(a).attr("alt"));
    });
    //图片自动轮播效果
    var timer = setInterval(function(){
        a++;
        a = a % 5;
        $(".banner .pic li").filter(":visible").fadeOut(500).parent().children().eq(a).fadeIn(1000);
        $(".anniu li").eq(a).toggleClass("on").siblings().removeAttr("class");
        $(".txt").text($(".pic li img").eq(a).attr("alt"));
    },6000);
})
