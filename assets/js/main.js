/*=====  OPEN MENU  ======*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=====  CLOSE MENU  ======*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=====  HERO SLIDER  ======*/
const swiper = new Swiper(".hero__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper1 = new Swiper(".hero__sub", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
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
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

/*=====  BACK TO TOP  ======*/
function backToTop() {
  const backToTopBtn = document.getElementById("back-to-top");

  // check if scroll is more than 200 viewport height then add class "show"
  if (this.scrollY >= 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", backToTop);


// var r = $("link[rel=next]").attr("href")
//       , o = $(".js-load-posts");
//     o.click(function(e) {
//         e.preventDefault();
//         e = r.split(/page/)[0] + "page/" + pagination_next_page_number + "/";
//         $.ajax({
//             url: e,
//             beforeSend: function() {
//                 o.text(t(pagination_loading_text)),
//                 o.addClass("c-btn--loading")
//             }
//         }).done(function(e) {
//             e = $(".js-post-card-wrap", e);
//             $(".js-grid").append(e),
//             o.text(t(pagination_more_posts_text)),
//             o.removeClass("c-btn--loading"),
//             pagination_next_page_number++,
//             pagination_next_page_number > pagination_available_pages_number && o.addClass("c-btn--disabled").attr("disabled", !0)
//         })
//     })


// description 
function description() {
  location.href = 'description.html';
}