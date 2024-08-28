document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.block');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;

            if (blockPosition < windowHeight - 100) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});


var swiper = new Swiper(".testImotionalSwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-testi",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });