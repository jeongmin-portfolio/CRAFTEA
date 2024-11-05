// Q&A
$(".que").click(function() {
    $(this).next(".anw_wrap").stop().slideToggle(300);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".anw_wrap").siblings(".anw_wrap").slideUp(300); // 1개씩 펼치기
 });

// //Q&A

