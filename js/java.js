window.onload = function(){
    const swiper = new Swiper('#mainbanner', {
        // effect: "fade",
        //기본값은 스와이퍼
        loop: true,
        pagination: {
          el: '#mainbanner .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#mainbanner .swiper-button-next',
          prevEl: '#mainbanner .swiper-button-prev',
        },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
      });

      const swiper2 = new Swiper('#secondbanner', {
        // Optional parameters
        // effect: "fade",
        //기본값은 스와이퍼
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
      
        // If we need pagination
        pagination: {
          el: '#secondbanner .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '#secondbanner .swiper-button-next',
          prevEl: '#secondbanner .swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
      
      });
}