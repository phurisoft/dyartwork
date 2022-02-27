$(function() {
  "use strict";

  // Preloader
  var loader = $(".loader");
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var o = 0;
  loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
  });
  do {
    loader.animate(
      {
        width: o
      },
      10
    );
    o += 3;
  } while (o <= 400);
  if (o === 402) {
    loader.animate({
      left: 0,
      width: "100%"
    });
    loader.animate({
      top: "0",
      height: "100vh"
    });
  }
  setTimeout(function() {
    $(".loader-wrapper").fadeOut("fast");
    loader.fadeOut("fast");
  }, 3500);
  var wind = $(window);

  // Main footer
  var footer = $("footer").outerHeight();
  $("main").css("marginBottom", footer);

  // Burger Menu
  var burgerMenu = function() {
    $(".js-bauen-nav-toggle").on("click", function(event) {
      event.preventDefault();
      var $this = $(this);
      if ($("body").hasClass("offcanvas")) {
        $this.removeClass("active");
        $("body").removeClass("offcanvas");
      } else {
        $this.addClass("active");
        $("body").addClass("offcanvas");
      }
    });
  };

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function() {
    $(document).click(function(e) {
      var container = $("#bauen-aside, .js-bauen-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-bauen-nav-toggle").removeClass("active");
        }
      }
    });
    $(window).scroll(function() {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-bauen-nav-toggle").removeClass("active");
      }
    });
  };

  // Sub Menu
  $(".bauen-main-menu li.bauen-sub>a").on("click", function() {
    $(this).removeAttr("href");
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp();
    } else {
      element.addClass("open");
      element.children("ul").slideDown();
      element
        .siblings("li")
        .children("ul")
        .slideUp();
      element.siblings("li").removeClass("open");
      element
        .siblings("li")
        .find("li")
        .removeClass("open");
      element
        .siblings("li")
        .find("ul")
        .slideUp();
    }
  });
  $(".bauen-main-menu>ul>li.bauen-sub>a").append(
    '<span class="holder"></span>'
  );

  // Document on load.
  $(function() {
    burgerMenu();
    mobileMenuOutsideClick();
  });

  var wind = $(window);
  // ScrollIt
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -70
  });

  // Navbar scrolling background
  wind.on("scroll", function() {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar"),
      logo = $(".navbar:not(.nav-box) .logo> img");
    if (bodyScroll > 100) {
      navbar.addClass("nav-scroll");
      logo.attr("src", "img/logo.png");
    } else {
      navbar.removeClass("nav-scroll");
      logo.attr("src", "img/logo.png");
    }
  });

  // close navbar-collapse when a clicked
  $(".navbar-nav a").on("click", function() {
    $(".navbar-collapse").removeClass("show");
  });

  // Sections background image from data background
  var pageSection = $(".bg-img, section");
  pageSection.each(function(indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  // Animations
  var contentWayPoint = function() {
    var i = 0;
    $(".animate-box").waypoint(
      function(direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;
          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .animate-box.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated");
                  } else {
                    el.addClass("fadeInUp animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      {
        offset: "85%"
      }
    );
  };
  $(function() {
    contentWayPoint();
  });

  //  YouTubePopUp
  $("a.vid").YouTubePopUp();

  // Testimonials owlCarousel
  $(".testimonials .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: false,
    dots: true,
    nav: false,
    navText: [
      "<span class='lnr ti-angle-left'></span>",
      "<span class='lnr ti-angle-right'></span>"
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Projects owlCarousel
  $(".projects .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  // Blog Home owlCarousel
  $(".bauen-blog .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  // Team owlCarousel
  $(".team .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    mouseDrag: true,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Clients owlCarousel
  $(".clients .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 10,
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // MagnificPopup
  $(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      preload: [0, 1]
    }
  });
  $(".magnific-youtube, .magnific-vimeo, .magnific-custom").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 300,
    preloader: false,
    fixedContentPos: false
  });

  //  Scroll back to top
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function() {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  jQuery(window).on("scroll", function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function(event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});

// Slider
$(document).ready(function() {
  var owl = $(".header .owl-carousel");
  // Slider owlCarousel
  $(".slider .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    margin: 0,
    autoplay: true,
    smartSpeed: 500,
    nav: true,
    navText: [
      '<i class="ti-angle-left" aria-hidden="true"></i>',
      '<i class="ti-angle-right" aria-hidden="true"></i>'
    ]
  });
  // Slider owlCarousel
  $(".slider-fade .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    margin: 0,
    autoplay: true,
    smartSpeed: 500,
    animateOut: "fadeOut",
    nav: true,
    navText: [
      '<i class="ti-angle-left" aria-hidden="true"></i>',
      '<i class="ti-angle-right" aria-hidden="true"></i>'
    ]
  });
  owl.on("changed.owl.carousel", function(event) {
    var item = event.item.index - 2; // Position of the current item
    $("h4").removeClass("animated fadeInUp");
    $("h1").removeClass("animated fadeInUp");
    $("p").removeClass("animated fadeInUp");
    $(".butn-light").removeClass("animated fadeInUp");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("h4")
      .addClass("animated fadeInUp");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("h1")
      .addClass("animated fadeInUp");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("p")
      .addClass("animated fadeInUp");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find(".butn-light")
      .addClass("animated fadeInUp");
  });
});

// Preloader page
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};
//Pace.on('done', function () {
//    $('#preloader').addClass("isdone");
//    $('.loading-text').addClass("isdone");
//});
Pace.on("done", function() {
  $("#preloader")
    .delay(500)
    .fadeOut(800);
});

// Accordion Box
if ($(".accordion-box").length) {
  $(".accordion-box").on("click", ".acc-btn", function() {
    var outerBox = $(this).parents(".accordion-box");
    var target = $(this).parents(".accordion");

    if (
      $(this)
        .next(".acc-content")
        .is(":visible")
    ) {
      //return false;
      $(this).removeClass("active");
      $(this)
        .next(".acc-content")
        .slideUp(300);
      $(outerBox)
        .children(".accordion")
        .removeClass("active-block");
    } else {
      $(outerBox)
        .find(".accordion .acc-btn")
        .removeClass("active");
      $(this).addClass("active");
      $(outerBox)
        .children(".accordion")
        .removeClass("active-block");
      $(outerBox)
        .find(".accordion")
        .children(".acc-content")
        .slideUp(300);
      target.addClass("active-block");
      $(this)
        .next(".acc-content")
        .slideDown(300);
    }
  });
}

var chart = new OrgChart(document.getElementById("tree"), {
  template: 'diva',
  layout: OrgChart.treeRightOffset,
  enableDragDrop: false,   
  enableSearch: false,
  scaleInitial: 0.5,
  mouseScrool: OrgChart.action.none,
  levelSeparation: 30,
  nodeBinding: {
    img_0: "img",
    field_0: "name",
    field_1: "title",
  },
  nodes: [
    { id: 1, title: "ประธานกรรมการ", name: "",  img: "" },
    { id: 2, pid:1,  title: "ผจก.ฝ่ายบริหารคุณภาพ", name: "",  img: "" },
    { id: 3, pid:1,  title: "ผจก.ฝ่ายขายและการตลาด", name: "",  img: "" },
    { id: 4, pid:1,  title: "ฝ่ายบริหารโครงการ", name: "",  img: "" },
    { id: 5, pid:1,  title: "ฝ่ายสำนักงาน", name: "",  img: "" },
    { id: 6, pid:1,  title: "ฝ่ายกฎหมาย", name: "",  img: "" },
    { id: 7, pid:2,  title: "ฝ่าบควบคุมเอกสาร", name: "",  img: "" },
    { id: 8, pid:2,  title: "ฝ่ายตรวจสอบคุณภาพ", name: "",  img: "" },
    { id: 9, pid:3,  title: "ฝ่ายขาย/การตลาด", name: "",  img: "" },
    { id: 10, pid:3, title: "ฝ่ายประเมินราคา", name: "",  img: "" },
    { id: 11, pid:4, title: "ผู้อำนวยการโครงการ (โซน A)/3 โครงการ", name: "",  img: "" },
    { id: 12, pid:4, title: "ผู้อำนวยการโครงการ (โซน B)/3 โครงการ", name: "",  img: "" },
    { id: 13, pid:4, title: "ผู้อำนวยการโครงการ (โซน C)/3 โครงการ", name: "",  img: "" },
    { id: 14, pid:5, tags: ["assistant"],title: "แผนกจัดซื้อ", name: "",  img: "" },
    { id: 15, pid:5, tags: ["assistant"],title: "แผนกบัญชี", name: "",  img: "" },
    { id: 16, pid:5, tags: ["assistant"],title: "แผนกการเงิน", name: "",  img: "" },
    { id: 17, pid:5, tags: ["assistant"],title: "แผนกคลังสินค้า", name: "",  img: "" },
    { id: 18, pid:5, tags: ["assistant"],title: "แผนกซ่อมบำรุง", name: "",  img: "" },
    { id: 19, pid:5, tags: ["assistant"],title: "แผนกบุคคล", name: "",  img: "" },
    { id: 20, pid:5, tags: ["assistant"],title: "จป.วิชาชีพ", name: "",  img: "" },
   
]
});
