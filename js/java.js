window.onload = function(){
    const swiper = new Swiper('#mainbanner', {
        // Optional parameters
        // effect: "fade",
        //기본값은 스와이퍼
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '#mainbanner .swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '#mainbanner .swiper-button-next',
          prevEl: '#mainbanner .swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
      
      });
}