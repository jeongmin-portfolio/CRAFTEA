$(function () {
    // 상품 이미지 변경
    let $productPictures = $('.product_pictures'),
        $bigImg = $productPictures.find('.big_img'),
        $thumbImgList = $productPictures.find('.thumb_img li');

    /* 
    리스트를 클릭하면 그 요소에 active를 추가한다.
    클릭한 그 요소의 자식요소 img의 data-target 속성의 값을 확인해서
    큰 이미지 경로를 수정해야 한다.
    */

    $thumbImgList.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let targetImgPath = 'images/store/' + $(this).find('img').attr('data-target');

        $bigImg.attr('src', targetImgPath);
    });
    // //상품 이미지 변경

    // 상품 수량 가격 변경하기
    let $quantity = $('.quantity'),
        $unitprice = $quantity.attr('data-unitprice'),
        $qtyBtn = $quantity.find('span'),
        $qtyInput = $quantity.find('input'),
        $targetTotal = $('.total_price .price');

    /*
    $qtyBtn을 클릭할 때, 그 요소에 class명 plus가 있다는 것이
    참이면 (=플러스를 클릭했으면)
    $qtyInput value 기존값에서 1 증가
    거짓이면 (=마이너스를 클릭했으면)
    $qtyInput value 기존값에서 1 차감
    */
    $qtyBtn.click(function () {
        let currentCount = $qtyInput.val();
        if ($(this).hasClass('plus')) {
            // currentCount++;
            $qtyInput.val(++currentCount);
        }
        else {
            if(currentCount > 1){
                // currentCount--;
                $qtyInput.val(--currentCount);
            }
        }
        // 수량*단가를 변수 total에 저장하고 그것을 .price 값으로 변경되도록 한다.
        let total = (currentCount * $unitprice).toLocaleString('ko');
        $targetTotal.text(total);
    }); // $qtyBtn.click
    // //상품 수량 가격 변경하기

    // 탭메뉴
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
    // //탭메뉴
});

