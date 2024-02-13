// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

var swiper = new Swiper(".popular-content", {
  slidesPerView: 4,
  spaceBetween: 11,
  // centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// show video
let playButton = document.querySelector(".play-movie");
let closebtn = document.querySelector(".close-video")
// let video = document.querySelector(".video-container");

playButton.onclick =()=>{
  document.querySelector(".video-container").style.display="flex";
  // auto play when click on btn
  document.querySelector('#myvideo').play()
};

closebtn.onclick =()=>{
  document.querySelector(".video-container").style.display="none";
};



