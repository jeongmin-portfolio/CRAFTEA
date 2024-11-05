// Parallax
let cloudLeft1 = document.getElementById('cloud_left1');
let cloudRight1 = document.getElementById('cloud_right1');
let cloudRight2 = document.getElementById('cloud_right2');
let cloudLeft2 = document.getElementById('cloud_left2');

let orange = document.getElementById('orange');
let apple = document.getElementById('apple');
let berry = document.getElementById('berry');
let blueberry = document.getElementById('blueberry');
let peach = document.getElementById('peach');


let text = document.getElementById('text');
// let cans = document.getElementById('cans');

let circle = document.getElementById('circle');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    cloudLeft1.style.left = value * -3 + 'px';
    cloudRight1.style.left = value * 3 + 'px';
    cloudRight2.style.left = value * 1 + 'px';
    cloudLeft2.style.left = value * -1 + 'px';

    orange.style.marginTop = value * 1 + 'px';
    apple.style.marginTop = value * 1 + 'px';
    berry.style.left = value * -0.5 + 'px';
    blueberry.style.left = value * -0.2 + 'px';
    peach.style.left = value * 0.2 + 'px';

    text.style.marginTop = value * 1 + 'px';
    // cans.style.marginTop = value * 1 + 'px';

    circle.style.marginTop = value * -0.4 + 'px';
})
// Parallax

// Swiper
var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 4,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    // autoplay: {
    //     delay: 2500,//자동으로 넘어가기 전 머무르는 시간
    //     disableOnInteraction: false,
    // },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
    },
    pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        clickable: true,
    },
});
// Swiper


