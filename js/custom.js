$(document).ready(function(){	

    
    
    //top_tab_menu(생김)랑 top_tab_box(유지)에 마우스엔터하면 생김
    
    
    $(".top_tab_menu >ul >li, .top_tab_box>div").mouseenter(function(){
        
        var list = $(this).index();
        var hei = $(".top_tab_box >div").eq(list).height();

        
        $(".top_tabWrap").stop().animate({"height":hei},500);

        $(".top_tab_box >div").stop().hide();
        $(".top_tab_box >div").eq(list).stop().show();
        
    });
    
    
    //top_tab_menu랑 top_tab_box벗어나면 사라짐
    //이거 안됨..
    $(".top_tab_menu >ul >li, .top_tab_box>div").mouseleave(function(){
        
        var list = $(this).index();
        var hei = $(".top_tab_box >div").eq(list).height();
        
        $(".top_tabWrap").stop().animate({"height":0},500);
        $(".top_tab_box >div").stop().hide();
    
    });   
    

    
    //top_tab_menu li의 tab_box 보고있을때 class(show) 적용 
    
    $(".top_tab_menu >ul >li").mouseenter(function(){

        var list = $(this).index();
        
        $(".top_tab_menu >ul >li").removeClass("show");    
        $(this).addClass("show");    
        
        
        $(".top_tab_box>div").eq(list).addClass("show");

    
    });
    
    
    
    /** visual slide 버튼 오버 **/
    $(".navi li").click(function(){
        
        var list = $(this).index();
        
        $(".navi li").removeClass("on_navi");    
        $(this).addClass("on_navi");    

        
        
    });


    
    
    //center의 tab_menu 구현
    
    
    $(".tabMenu ul li").click(function(){
        
        var list = $(this).index();
        var hei = $(".tab_box >div").eq(list).height();

        $(".tabMenu ul li").removeClass("on");    
        $(this).addClass("on");    


        $(".tabWrap").stop().animate({"height":hei},1000);

        $(".tab_box >div").stop().fadeOut(1000);
        $(".tab_box >div").eq(list).stop().fadeIn(1000);
        
        
    });


});
