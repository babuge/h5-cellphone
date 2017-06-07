$(function(){
    var banWb,banWba,set;
    //==监听窗口尺寸 并将window高的比宽赋给button盒子==
    $(window).resize(function(){
        dobarH();
    })
    dobarH();
    function dobarH(){
        var banH=$(window).height();
        $(".login_content").height(banH);
        $(".reg_content").height(banH);
    }




});