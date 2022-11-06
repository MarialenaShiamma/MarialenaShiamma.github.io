/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $wrapper = $("#page-wrapper"),
    $banner = $("#banner"),
    $header = $("#header");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Mobile?
  if (browser.mobile) $body.addClass("is-mobile");
  else {
    breakpoints.on(">medium", function () {
      $body.removeClass("is-mobile");
    });

    breakpoints.on("<=medium", function () {
      $body.addClass("is-mobile");
    });
  }

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 1500,
    offset: $header.outerHeight(),
  });

  // Menu.
  $("#menu")
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right",
      target: $body,
      visibleClass: "is-menu-visible",
    });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function () {
      $window.trigger("scroll");
    });

    $banner.scrollex({
      bottom: $header.outerHeight() + 1,
      terminate: function () {
        $header.removeClass("alt");
      },
      enter: function () {
        $header.addClass("alt");
      },
      leave: function () {
        $header.removeClass("alt");
      },
    });
  }
})(jQuery);

/* MODAL */
var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach((item) => {
  item.addEventListener("click", (event) => {
    modalEle.style.display = "block";
    modalImage.src = event.target.src;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  modalEle.style.display = "none";
});

// Carousel item 4
$(".carousel-item-4").owlCarousel({
  //Basic Speeds
  slideSpeed: 200,
  paginationSpeed: 800,
  smartSpeed: 1000,

  //Autoplay
  autoPlay: true,
  goToFirst: true,
  goToFirstSpeed: 1000,

  // Navigation
  navigation: true,
  navigationText: ["prev", "next"],
  pagination: true,
  paginationNumbers: true,

  margin: 30,
  dots: true,
  loop: true,

  // Responsive
  responsive: true,
  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [980, 3],
  itemsTablet: [768, 2],
  itemsMobile: [479, 1],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5,
    },
  },
})(jQuery);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = document.getElementsByClassName("content")[i];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}