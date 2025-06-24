$(document).ready(function() {


	//слайдер
  const $slider = $('.billbord__slider');
  const $counter = $('.slider-counter');
  const $current = $counter.find('.current');
  const $total = $counter.find('.total');
  const $circle = $('.circle-progress .progress');

  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  $circle.css({
    strokeDasharray: circumference,
    strokeDashoffset: circumference
  });

  // Обновление счётчика
  function updateCounter(slick, currentSlide = 0) {
    const i = currentSlide + 1;
    $current.text(i);
    $total.text(slick.slideCount);
  }

  // Анимация прогресс-бара
  function startProgress() {
    $circle.css({
      transition: 'none',
      strokeDashoffset: circumference
    });
    setTimeout(() => {
      $circle.css({
        transition: 'stroke-dashoffset 5s linear',
        strokeDashoffset: 0
      });
    }, 50);
  }

  // Назначаем обработчики до инициализации
  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
    updateCounter(slick, currentSlide);
    startProgress();
  });

  // Инициализация слайдера
  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
	speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //слайдер каталога на мобильных
  $('.slider-cards-mobile').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
    variableWidth: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});


  //выпадающее меню
  $(".btn-catalog").click(function() {
		if ($(".menu-dropdown").is(":hidden")) {
			$(".menu-dropdown").slideDown(200);
      $(".btn-catalog").addClass("active");
      $(".header").addClass("header__menu");
		} else {
			$(".menu-dropdown").slideUp(200);
      $(".btn-catalog").removeClass("active");
       $(".header").removeClass("header__menu");
		}
	});

    $(document).mouseup(function (e) {
    var container = $(".menu-dropdown");
    if (container.has(e.target).length === 0){
			$(".menu-dropdown").slideUp(200);
      $(".btn-catalog").removeClass("active");
       $(".header").removeClass("header__menu");
    }
  });

   //попап корзина
  $(".btn-basket").click(function() {
		if ($(".popup-cart").is(":hidden")) {
			$(".popup-cart").slideDown(200);
      $(".btn-basket").addClass("active");
		} else {
			$(".popup-cart").slideUp(200);
      $(".btn-basket").removeClass("active");
		}
	});

    $(document).mouseup(function (e) {
    var container = $(".popup-cart");
    if (container.has(e.target).length === 0){
			$(".popup-cart").slideUp(200);
      $(".btn-basket").removeClass("active");
    }
  });

  //табы
$('.tabs li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);

    $('.tab-pane').find(".slider-cards-mobile").slick('setPosition');
  });

  // Кастомные стрелки
  $('.slider-prev').on('click', () => $slider.slick('slickPrev'));
  $('.slider-next').on('click', () => $slider.slick('slickNext'));

	$(".input-phone").mask("+7 (999) 999-99-99");




	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});



	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

