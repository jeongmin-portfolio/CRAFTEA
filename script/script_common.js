// 서브메뉴
$(function(){
    $('.nav> li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
});
// //서브메뉴

// Aos
AOS.init({
    duration: 1200 //aos 나타나는 속도
});
// //Aos
