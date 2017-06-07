$(function(){
    var banWb,banWba,set;
    //==监听窗口尺寸 并将window高的比宽赋给button盒子==
    $(window).resize(function(){
        dobarH();
    })
    dobarH();
    function dobarH(){
        var banW=$(window).width();
        var banH=$(window).height();
        $("#bodH").height(banH);
        // $(".userCenter").height(banW/2.5);
        $(".userbar").height(banW*0.16);
        var theW=$(".vip_menu_bg").width();
        $(".vip_menu_bg").height(theW);
    }
});