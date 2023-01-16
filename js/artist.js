
document.addEventListener("DOMContentLoaded",()=>{
  if(matchMedia("all and (min-width:320px) and (max-width: 600px)").matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.5,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }else if(matchMedia("all and (min-width:601px) and (max-width: 1023px)").matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }else if(matchMedia("all and (min-width: 1024px)").matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // window.onresize = function(){
  //   document.location.reload();
  // };

})
  