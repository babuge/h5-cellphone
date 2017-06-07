$(function(){
    var banWb,banWba,set;
    //==监听窗口尺寸 并将window高的比宽赋给button盒子==
    $(window).resize(function(){
        dobarH();
    })
    dobarH();
    function dobarH(){
        var banH=$(window).height();
    }
    //送货方式
    $("#tranId").children("a").click(function(){
        $("#tranId").children("a").removeClass("active");
        $(this).addClass("active");
    });

    //数量加减
      
        //获得文本框对象
        var t = $("#text_box");
        //初始化数量为1,并失效减
        $('#min').attr('disabled',true);
        //数量增加操作
        $("#add").click(function(){    
        t.val(parseInt(t.val())+1)
        if (parseInt(t.val())!=1){
        $('#min').attr('disabled',false);
        $('#min').css({"color":"#333"});
        }

        }) 
        //数量减少操作
        $("#min").click(function(){
        t.val(parseInt(t.val())-1);
        if (parseInt(t.val())==1){
        $('#min').attr('disabled',true);
        $('#min').css({"color":"#999"});

        }

        });

    // vip
    $(".order_lev").click(function(){
        $(".order_lev").removeClass("active");
        $(this).addClass("active");
    })


});