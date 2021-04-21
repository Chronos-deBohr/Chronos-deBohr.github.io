    /* menu nav toggle */
    $("#nav_toggle").on("click", function() {
        $(this).toggleClass("active");
        $("#nav").toggleClass("active")

    });

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('collapse');

        $(blockId).slideToggle();
    });

    $("[data-slider]").slick({
        infinite: true,
        fae: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    var $reviewsSlider = $('.reviews-slider');
if ($reviewsSlider.length) {
  $reviewsSlider.slick({
    accessibility: false,
    centerMode: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }]
  });
}


var preloader = document.getElementById("preloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interpreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interpreloader);preloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(preloader);},100);};
