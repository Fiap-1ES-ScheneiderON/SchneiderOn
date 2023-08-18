document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

// scripts.js
function playAllVideos() {
  var videos = document.querySelectorAll('.meuVideo');
  videos.forEach(function(video) {
      video.play();
  });
}

document.addEventListener("DOMContentLoaded", function() {
  playAllVideos();
});
