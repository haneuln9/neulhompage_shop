const neul_slide = new Swiper('#neul_slide',{
    autoplay: {delay:5000,
        disableOnInteraction: false //버튼 클릭후 자동 재생
    },
    loop:true
    // navigator: {
    //     prevEl: '#neul_slide .swiper-button-prev',
    //     nextEl: '#neul_slide .swiper-button-next',
    // }
})
//---------------------------------리뷰 사진
const review_slide = new Swiper('#review_slide',{
    slidesPerView: 3,
    spaceBetween:91,
    autoplay:{delay:2000,
        disableOnInteraction:false
    },
    loop:true
})