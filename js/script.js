$(document).ready(function() {
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  var galleryTop = new Swiper(".gallery-top", {
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var swiper = new Swiper(".article-slider", {
    direction: "vertical",
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  new Swiper(".gallery-slider", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  $(".arrtop").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });

  (function() {
    $("[data-lightbox]").each(function() {
      var el = $(this),
        config = {
          delegate: el.is("a") ? undefined : el.data("lightbox") || "a",
          gallery: {
            enabled: true,
            tPrev: "Poprzednie",
            tNext: "NastÄpne",
            tCounter: "%curr%/%total%"
          },
          mainClass: "mfp-fade",
          removalDelay: 300,
          type: "image"
        };
      if (el.data("lightboxConfig")) {
        config = el.dataConfig("lightboxConfig", config);
      }
      el.magnificPopup(config);
    });
    $(".simple-ajax-popup-align-top").magnificPopup({
      type: "ajax",
      alignTop: true,
      overflowY: "scroll" // as we know that popup content is tall we set scroll overflow by default to avoid jump
    });
    $(".ajax-popup").magnificPopup({
      type: "ajax",
      mainClass: "whiteBackground"
    });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    $('[target="_lightbox"]').each(function() {
      var a = $(this),
        c = {
          mainClass: "mfp-fade",
          removalDelay: 300,
          type: "image"
        };
      if (a.attr("rel")) {
        a = $('[rel="' + a.attr("rel") + '"]');
        c.gallery = {
          enabled: true,
          tPrev: "Poprzednie",
          tNext: "NastÄpne",
          tCounter: "%curr%/%total%"
        };
      }
      a.magnificPopup(c);
    });
  })();
});
