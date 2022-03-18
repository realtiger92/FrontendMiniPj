
//1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//slick.js

$(function(){
    $('.visual .slide').slick({
        arrows: false,  //화살표
        dots: false, //인디케이스 해제
        fade: true,//페이드효과
        autoplay: true,//자동재생
        autoplaySpeed:4000,// 재생시간
        pauseOnHover: false,//마우스 호버시 정지
        pauseOnFocus: false //포커스시 정지
    });
    
    //slide2
    $('.intro_dining .slide2').slick({
        arrows: false,  //화살표
        dots: false, //인디케이스 해제
        fade: false,//페이드효과
        autoplay: true,//자동재생
        autoplaySpeed:4000,// 재생시간
        pauseOnHover: false,//마우스 호버시 정지
        pauseOnFocus: false //포커스시 정지
    });
});

//탭메뉴
$(function(){
    $('.introduce .roomInfo .tab li a').on('click', function(){
        var num = $('.introduce .roomInfo .tab li a').index($(this));
        $('.introduce .roomInfo .tabBox').removeClass('on');
        $('.introduce .roomInfo .tabBox:eq('+ num +')').addClass('on'); 
    });
});



//패밀리 사이트
$(function(){
    $('.txt_wrap .btn_fam ').on('click', function(){
        $('.fam_site_wrap .item_wrap').slideToggle();
    });
});

//햄버거버튼
$(function(){
    $('header .menuOpen').on('click', function(){
        $('header .menuWrap').addClass('on');
    });
    $('.menuWrap .close').on('click', function(){
        $('.menuWrap').removeClass('on');
    });
});











