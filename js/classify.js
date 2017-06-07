$(function(){
	//分类栏
	$(".left-item").children("div").each(function(i){
		$(this).click(function(){
			$(".left-item").children("div").removeClass("active");
			$(this).addClass("active");
			$(".rt-bar").attr("hidden","");
			$(".rt-bar").eq(i).removeAttr("hidden");
		})
	})
	// tabs导航
	$(".nav-ul").each(function(i){
		$(this).click(function(){
			$(".nav-ul").removeClass("active");
			$(this).addClass("active");
		})
	})

	//banner
	var banWb,banWba,set;
    //==监听窗口尺寸 并将window高的比宽赋给button盒子==
    $(window).resize(function(){
        dobarH();
        // keyword();//keyword部分函数窗口监听
        midbanH();//监听middle banner img高度
        imgprudH();//监听产品img高度
    })
    dobarH();
    function dobarH(){
        var banW=$(window).width();
        var iH=355/750;
        $(".butbarl").height(banW*iH);
        $(".butbr").height(banW*iH);
        $(".banner-bar").height(banW*iH);
        $(".imgbana").css({"height":banW*iH,"width":banW});
        banWb=banW;
        banWba=-banW;
    }
    //==banner轮播==默认为四张轮播
    $(".banner-bar").find("a").eq(0).css({"z-index":"6"});
    var i=0;
    var shu=0;
    $(".ban-butl").click(function(){
        clearInterval(set);
        i--;
        if(i<0){
            i=3;
        }
		$(".dot-bar").children(".dot").removeClass("active");
		$(".dot-bar").children(".dot").eq(i).addClass("active");		
        $(".banner-bar").find("a").css({"z-index":0});
        $(".banner-bar").find("a").css({"left":0});
        $(".banner-bar").find("a").eq(shu).css({"z-index":4});
        $(".banner-bar").find("a").eq(shu).stop().animate({"left":banWb+"px"},500);
        $(".banner-bar").find("a").eq(i).css({"z-index":6});
        $(".banner-bar").find("a").eq(i).css({"left":banWba+"px"}).stop().animate({"left":0},500);
        shu=i;
        set=setInterval(go,4000);
    })
    $(".ban-butr").click(function(){
        clearInterval(set);
        i++;
        if(i>3){
            i=0;
        }
		$(".dot-bar").children(".dot").removeClass("active");
		$(".dot-bar").children(".dot").eq(i).addClass("active");		
        $(".banner-bar").find("a").css({"z-index":0});
        $(".banner-bar").find("a").eq(shu).css({"z-index":4}).animate({"left":banWba+"px"},500).css({"left":0});
        $(".banner-bar").find("a").eq(i).css({"z-index":6});
        $(".banner-bar").find("a").eq(i).css({"left":banWb+"px"}).stop().animate({"left":0},500);
        shu=i;
        set=setInterval(go,4000);
    })
    function go(){
        i++;
        if(i>3){
            i=0;
        }
		$(".dot-bar").children(".dot").removeClass("active");
		$(".dot-bar").children(".dot").eq(i).addClass("active");		
        $(".banner-bar").find("a").css({"z-index":0});
        $(".banner-bar").find("a").eq(shu).css({"z-index":4}).animate({"left":banWba+"px"},500).css({"left":0});
        $(".banner-bar").find("a").eq(i).css({"z-index":6});
        $(".banner-bar").find("a").eq(i).css({"left":banWb+"px"}).stop().animate({"left":0},500);
        shu=i;
    }
    var set=setInterval(go,4000);
    //middle banner 高度监测
    midbanH();
    function midbanH(){
        var midW=$(window).width();
        var midH=(441/1280)*midW;
        $(".bannerbar").css({"height":midH+"px"});
    };



















});