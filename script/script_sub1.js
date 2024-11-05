// About us 상단
let bush1 = document.getElementById('bush1');
let bush2 = document.getElementById('bush2');
let bush3 = document.getElementById('bush3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bush1.style.left = value * -0.5 + 'px';
    bush2.style.left = value * 0.5 + 'px';
    bush3.style.left = value * -0.5 + 'px';
})

// //About us 상단


// 형광펜 효과
//// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on');
        }
        // 그 외의 경우 'on' 클래스 제거
        else {
            entry.target.classList.remove('on');
        }
    });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
    io.observe(el);
});

// IntersectionObserver 를 등록한다.
const io2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'on2' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on2');
        }
        // 그 외의 경우 'on2' 클래스 제거
        else {
            entry.target.classList.remove('on2');
        }
    });
});

const boxElList2 = document.querySelectorAll('.highlight2');
boxElList2.forEach((el) => {
    io2.observe(el);
});
// //형광펜 효과


// Swiper
$(window).on('load', function() {
    slider();
})

function slider() {
    let swiper = undefined;
    let slideNum = $('.slider .swiper-slide').length //슬라이드 총 개수
    let slideInx = 0; //현재 슬라이드 index

    //디바이스 체크
    let oldWChk = window.innerWidth > 767 ? 'pc' : 'mo';
    sliderAct();

    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            let newWChk = window.innerWidth > 767 ? 'pc' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                sliderAct();
            }
        }, 300);
    })

    //슬라이드 실행
    function sliderAct() {
        //슬라이드 초기화 
        if (swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
        }

        //slidesPerView 옵션 설정
        let viewNum = oldWChk == 'pc' ? 4 : 2;
        //loop 옵션 체크
        let loopChk = slideNum > viewNum;

        swiper = new Swiper(".slider .inner", {
            slidesPerView: "3",
            initialSlide: slideInx,
            loop: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.slider .btn_next',
                prevEl: '.slider .btn_prev',
            },
            on: {
                activeIndexChange: function() {
                    slideInx = this.realIndex; //현재 슬라이드 index 갱신
                }
            },
        });
    }
}
// //Swiper


// 카드 스크롤 애니메이션
class CardFlipOnScroll {
    constructor(wrapper, sticky) {
      this.wrapper = wrapper
      this.sticky = sticky
      this.cards = sticky.querySelectorAll('.card')
      this.length = this.cards.length
  
      this.start = 0
      this.end = 0
      this.step = 0
    }
  
    init() {
      this.start = this.wrapper.offsetTop - 100
      this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
      this.step = (this.end - this.start) / (this.length * 2)
    }
  
    animate() {
      this.cards.forEach((card, i) => {
        const s = this.start + this.step * i
        const e = s + this.step * (this.length + 1)
  
        if (scrollY <= s) {
          card.style.transform = `
                perspective(100vw)
                translateX(100vw) 
                rotateY(180deg)
              `
        } else if (scrollY > s && scrollY <= e - this.step) {
          card.style.transform = `
                perspective(100vw)
                translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
                rotateY(180deg)
              `
        } else if (scrollY > e - this.step && scrollY <= e) {
          card.style.transform = `
                perspective(100vw)
                translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
                rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
              `
        } else if (scrollY > e) {
          card.style.transform = `
                perspective(100vw)
                translateX(0vw) 
                rotateY(0deg)
              `
        }
      })
    }
  }
  
  const mainContent1 = document.querySelector('.main-content-1')
  const sticky = document.querySelector('.sticky')
  const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
  cardFlipOnScroll.init()
  
  window.addEventListener('scroll', () => {
    cardFlipOnScroll.animate()
  })
  
  window.addEventListener('resize', () => {
    cardFlipOnScroll.init()
  })
// //카드 스크롤 애니메이션

