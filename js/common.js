$(document).ready(function() {

	//анимация 


	//валидация
  $('form button').on('click', function (e) {
    const form = $(this).closest('form');
    let isValid = true;

    form.find('.item-form').each(function () {
      const input = $(this).find('input, textarea, select');
      const value = $.trim(input.val());

      if (value === '') {
        $(this).addClass('item-form_error');
        isValid = false;
      } else {
        $(this).removeClass('item-form_error');
      }
    });

    if (!isValid) {
      e.preventDefault(); // не отправлять форму
    } else {
      form.submit(); // можно принудительно отправить форму, если всё валидно
    }
  });


  $(document).on('input change', '.item-form input, .item-form textarea, .item-form select', function () {
    if ($(this).val().trim() !== '') {
      $(this).closest('.item-form').removeClass('item-form_error');
    }
  });


// Слайдер
const $slider = $('.billbord__slider');
const $counter = $('.slider-counter');
const $current = $counter.find('.current');
const $total = $counter.find('.total');
const $circle = $('.circle-progress .progress');

const radius = 35;
const circumference = 2 * Math.PI * radius;
let isAutoPlay = true; 

$circle.css({
  strokeDasharray: circumference,
  strokeDashoffset: circumference
});

function updateCounter(slick, currentSlide = 0) {
  const i = currentSlide + 1;
  $current.text(i);
  $total.text(slick.slideCount);
}

function startProgress() {
  $circle.css({
    transition: 'none',
    strokeDashoffset: circumference
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $circle.css({
        transition: 'stroke-dashoffset 5s linear',
        strokeDashoffset: 0
      });
    });
  });
}

function resetProgress() {
  $circle.css({
    transition: 'none',
    strokeDashoffset: circumference
  });
}

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  isAutoPlay = slick.paused === false;
});

$slider.on('init afterChange', function (event, slick, currentSlide) {
  updateCounter(slick, currentSlide);
  if (isAutoPlay) startProgress();
});

// Инициализация слайдера
$slider.slick({
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.slider-prev').on('click', () => {
  resetProgress();
  $slider.slick('slickPrev');
});

$('.slider-next').on('click', () => {
  resetProgress();
  $slider.slick('slickNext');
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
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
	});

  //слайдер каталога
   $('.slider-products').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
    	variableWidth: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow slick-arrow_main"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow slick-arrow_main"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
	});

	  //слайдер карточки
   $('.slider-for').slick({
		arrows: true,
		dots: false,
		infinite: false,
		appendArrows: $(".slider-for-controls"),
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
	});

	 $('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		variableWidth: true,
		focusOnSelect: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
		responsive: [
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 3,
		}
		}
		]
	});

	 //слайдер вопросов
   $('.slider-questions').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow slick-arrow_main"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow slick-arrow_main"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
	});

  $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(this).find('video').each(function () {
      this.pause();
      this.currentTime = 0;
	  this.classList.remove("active");
    });
  });

    $('.slider-for').on('afterChange', function(event, slick, currentSlide) {
    let currentSlideEl = $(this).find('.slick-slide[data-slick-index="' + currentSlide + '"]');
    let video = currentSlideEl.find('video')[0];
	
    if (video) {
		setTimeout(() => {
			video.classList.add("active");
		}, 100);
      video.play().catch(() => {
		
      });
    }
  });


	  //слайдер каталога
   $('.slider-products-main').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
    	variableWidth: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow slick-arrow_main"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow slick-arrow_main"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
	});

	//слайдер заказов
	  $('.slider-orders').slick({
		arrows: false,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
    variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.4852L10.1566 16.3286L3.55652 9.72844L16.5572 9.72913V8.07185H3.75747L9.77133 2.05799L8.61399 0.900657L0.514719 8.99993L9 17.4852Z" fill="black"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.4852L6.84336 16.3286L13.4435 9.72844L0.442796 9.72913V8.07185H13.2425L7.22867 2.05799L8.38601 0.900657L16.4853 8.99993L8 17.4852Z" fill="black"/></svg><div/>',
	});

   //показать больше фильтров
  $(".show-more-checkboxes").click(function() {
		if ($(this).parents(".sidebar-catalog__item").find(".list-chekboxes_hidden .checkbox:nth-child(n+4)").is(":hidden")) {
			$(this).parents(".sidebar-catalog__item").find(".list-chekboxes_hidden .checkbox:nth-child(n+4)").slideDown(200);
      $(this).html("Скрыть");
		} else {
		$(this).parents(".sidebar-catalog__item").find(".list-chekboxes_hidden .checkbox:nth-child(n+4)").slideUp(200);
     $(this).html("Показать все");
		}
	});


	 //показать больше свойств
  $(".card-content__features .link-page_features").click(function() {
		if ($(this).parents(".card-content__features").find(".hidden-features").is(":hidden")) {
			$(this).parents(".card-content__features").find(".hidden-features").slideDown(200);
      		$(this).html("Скрыть");
		} else {
			$(this).parents(".card-content__features").find(".hidden-features").slideUp(200);
			$(this).html("Все характерисики");
		}
	});

	  $(".card-block .link-page_features").click(function() {
		if ($(this).parents(".card-block").find(".hidden-features").is(":hidden")) {
			$(this).parents(".card-block").find(".hidden-features").slideDown(200);
      		$(this).html("Скрыть");
		} else {
			$(this).parents(".card-block").find(".hidden-features").slideUp(200);
			$(this).html("Все характерисики");
		}
	});

	$(".link-page_about").click(function() {
		if ($(this).parents(".card-block").find(".text-card_hidden").is(":hidden")) {
			$(this).parents(".card-block").find(".text-card_hidden").slideDown(200);
      		$(this).html("Скрыть");
		} else {
			$(this).parents(".card-block").find(".text-card_hidden").slideUp(200);
			$(this).html("Показать больше");
		}
	});
    /*range slider*/

  $('.input-range').each(function () {
	var $range = $(this).find(".range-controls__slider"),
		$from_input = $(this).find(".input-range__from"),
		$to_input = $(this).find(".input-range__to"),
		from = +$range.attr("from"),
		to = +$range.attr("to"),
		min = +$range.attr("min"),
		max = +$range.attr("max");

	function formatNumber(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	function cleanNumber(str) {
		return str.replace(/\s+/g, '');
	}

	$range.ionRangeSlider({
		type: "double",
		min: min,
		max: max,
		from: from,
		to: to,
		prettify_enabled: true,
		onChange: function () {
			updateValues();
		}
	});

	$range = $range.data("ionRangeSlider");

	var updateValues = function () {
		var res = $range.result;
		$from_input.val(formatNumber(res.from));
		$to_input.val(formatNumber(res.to));
	};

	$from_input
		.on("focus", function () {
			this.value = cleanNumber(this.value);
			this.selectionStart = this.value.length;
		})
		.on("input", function () {
			var val = cleanNumber(this.value);
			$range.update({ from: val });
		})
		.on("blur", updateValues);

	$to_input
		.on("focus", function () {
			this.value = cleanNumber(this.value);
			this.selectionStart = this.value.length;
		})
		.on("input", function () {
			var val = cleanNumber(this.value);
			$range.update({ to: val });
		})
		.on("blur", updateValues);

	updateValues();
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

  //мобильное меню
    $(".btn-menu-mobile").click(function() {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
      $(".btn-menu-mobile").addClass("active");
      $(".body").addClass("no-scroll");
		} else {
			$(".menu-mobile").slideUp(200);
      $(".btn-menu-mobile").removeClass("active");
       $(".body").removeClass("no-scroll");
		}
	});

      $(document).mouseup(function (e) {
    var container = $(".menu-mobile");
    if (container.has(e.target).length === 0){
			$(".menu-mobile").slideUp(200);
      $(".btn-menu-mobile").removeClass("active");
       $(".body").removeClass("no-scroll");
    }
  });

  $(".menu__haschild > a").click(function(e) {
    e.preventDefault();
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
      $(this).parent().siblings().show();
      $(this).siblings(".menu__submenu").hide();
       $(this).parent().parent().siblings().show();
		} else {
		  $(this).parent().addClass("active");
      $(this).siblings(".menu__submenu").show();
       $(this).parent().siblings().hide();
       $(this).parent().parent().siblings().hide();
		}
	});

    //дополнительное меню
    $(".btn-menu").click(function() {
		if ($(".popup-menu").is(":hidden")) {
			$(".popup-menu").slideDown(200);
      $(".btn-menu").addClass("active");
		} else {
			$(".popup-menu").slideUp(200);
      $(".btn-menu").removeClass("active");
		}
	});

      $(document).mouseup(function (e) {
    var container = $(".popup-menu");
    if (container.has(e.target).length === 0){
			$(".popup-menu").slideUp(200);
      $(".btn-menu").removeClass("active");
    }
  });

  //добавить в корзину
    $(".item-catalog__link").click(function(e) {
      e.preventDefault();
		$(this).toggleClass("active");
	});


  //сайдбар категорий
    $(".menu-sidebar__haschild > a").click(function(e) {
    e.preventDefault();
		if ($(this).siblings("ul").is(":hidden")) {
        $(this).parent().addClass("active");
        $(this).siblings("ul").slideDown(200);
		} else {
        $(this).parent().removeClass("active");
        $(this).siblings("ul").slideUp(200);
		}
	});

    $(".sidebar-catalog__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
  });

     $(".btn-open-sidebar").click(function() {
    $(this).toggleClass("active");
    $(".sidebar-catalog, .sidebar-personal").slideToggle(200);
  });

  //счетчик
  $('.quantity').each(function() {
		var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

$('.add-amounts__btn').click(function(event) {
	event.preventDefault();

	const $button = $(this);
	const valueAmount = parseInt($button.attr('data-value'), 10);

	const $input = $button.closest('.card-actions').find('.quantity input');
	const oldValue = parseInt($input.val(), 10) || 0;

	const newVal = oldValue + valueAmount;
	$input.val(newVal);

	$(this).siblings().removeClass("active");
	$(this).addClass("active");
});


	//выбор даты
if ($('#date-picker').length > 0) {
		const elem = document.getElementById('date-picker');
		const picker = new Datepicker(elem, {
			format: 'dd/mm/yyyy',
			language: 'ru',
			autohide: true,
		}); 
		
	}

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

	$('.tabs-modals li a').click(function(event) {
      event.preventDefault();
      $(this).parent().parent().find("li").removeClass('active');
      $(this).parent().addClass('active');
      $(".tab-pane-modals").fadeOut(0);
      var selectTab = $(this).attr("href");
      $(selectTab).fadeIn(200);
    });


	$(".input-phone").mask("+7 999 999 99 99");

	$(".input-date").mask("99/99/9999");

	//input password
	$('.hide-password').on('click', function () {
	const $btn = $(this);
	const $input = $btn.closest('.item-form').find('input');
	$btn.toggleClass('active');

	if ($input.attr('type') === 'text') {
		$input.attr('type', 'password');
		
	} else {
		$input.attr('type', 'text');
	}
	});

/*input file*/
		$("input[type='file']").change(function(){
			var filename_text = $(this).parent().siblings(".name-upload");
			var filename = $(this).val().replace(/.*\\/, "");
			filename_text.html(filename);
		});

	 // стайлер для select
	 $('select').styler();


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
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 30;

const billbords = document.querySelectorAll('.billbord');

billbords.forEach(billbord => {
  const img1 = billbord.querySelector('.billbord__img_1'); 
  const img2 = billbord.querySelector('.billbord__img_2');
  const bg = billbord.querySelector('.billbord__bg');     

  billbord.addEventListener('mousemove', (e) => {
    const rect = billbord.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / rect.width;
    const offsetY = (e.clientY - centerY) / rect.height;

    const rotateX = (offsetY * THRESHOLD).toFixed(2);
    const rotateY = (-offsetX * THRESHOLD).toFixed(2);

    // Амплитуды для каждого слоя
    const img1Strength = 1.0; // ближняя машинка
    const img2Strength = 0.6; // дальняя
    const bgStrength   = 0.2; // звезды

    img1.style.transform = `perspective(1000px) rotateY(${rotateY * img1Strength}deg)`;
    img2.style.transform = `perspective(1000px) rotateY(${rotateY * img2Strength}deg)`;
    bg.style.transform   = `perspective(1000px) rotateY(${rotateY * bgStrength}deg)`;
  });

  billbord.addEventListener('mouseleave', () => {
    img1.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    img2.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    bg.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});
