$(document).ready(function() {

	$('.jqimgFill').imgLiquid();
	
		var wow = new WOW(
			{
				boxClass:     'wow',  
				offset:       10   
			}
		);
		wow.init();

	/* ==========================================================================
    * 變數定義
  ==========================================================================*/
  resizeCss();


	/* ==========================================================================
		[header]
 	==========================================================================*/
	$('#header').each(function() {
		$(this).css("visibility","visible");
		$(".menu-toggle").click(function() {
			$(this).toggleClass('active');
			$(this).next(".menu").toggleClass('active');
		});

		if (jQuery(window).width() < 991) { 
			$('.sub-toggle').click(function(){
                $(this).find('.sub-nav').slideToggle();
            });
		}
	});

	$(".goTop").click(function () {
			$("html,body").animate({
					scrollTop: 0
			}, 1300, 'easeInOutCubic');
			return false;
	});

	$('.lang-btn').click(function(){
		$('.lang-nav').slideToggle();
	});


  /* ==========================================================================
    * 共用
	==========================================================================*/

	$("a.anchor").on('click', function(event) {

		if (this.hash !== "") {
		  event.preventDefault();
	
		  // Store hash
		  var hash = this.hash;

		  $('html, body').animate({
			scrollTop: $(hash).offset().top - 90
		  }, 800, function(){
	   
			window.location.hash = hash;
		  });
		} // End if
	});
	
	$('.l-chartNews .slider').slick({
		fade: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.slider_qty3 .slider').slick({
			dots: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
	});

	$('#app .new-arrival .slider').slick({
		fade: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.banner-slider .slider').slick({
		fade: true,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});

	/* ==========================================================================
    * page
	==========================================================================*/

	$('#about').each(function(){
		$('.team-item').click(function(){
			$(this).children('.team-hover').toggleClass('active').parent().siblings().children('.team-hover').removeClass('active');
		});
	});

	$('#seminar').each(function(){
		$('#header').addClass('nobg');
		$(window).scroll(function (){
			if ($(this).scrollTop() < 500) {
				$('#header').addClass('nobg');
			} else {
				$('#header').removeClass('nobg');
			}
		});
		if (jQuery(window).width() < 991) { 
			$('.seminar-advantage .slider').slick({
				dots: false,
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}

		$('.seminar_news .slider').slick({
			dots: false,
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			initialSlide: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

	$('#realestate').each(function(){
		if (jQuery(window).width() < 991) { 
			$('.realestateBanner').slick({
				arrows: false,
				dots: true,
				fade: true,
				autoplay: 5000
			});
			$('.realestate_btn').click(function(){
				$('.realestate_card').show();
				$('.pop_bg').show();
			});
			$('.pop_bg').click(function(){
				$('.realestate_card').hide();
				$('.pop_bg').hide();
			});
		}
		
		$(window).scroll(function() {
			if ($(this).scrollTop() > 500) {
			  $('.realestate_card').addClass('active');
			} else {
				$('.realestate_card').removeClass('active');
			}
		});

	});
	
	/* ==========================================================================
			IE 9 不支援 placeholder
	==========================================================================*/
	(function ($) {
   $.support.placeholder = ('placeholder' in document.createElement('input'));
	})(jQuery);

	//fix for IE7 and IE8
	$(function () {
    if (!$.support.placeholder) {
	    $("[placeholder]").focus(function () {
	      if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
	     }).blur(function () {
	  	  if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
		}).blur();

		$("[placeholder]").parents("form").submit(function () {
	    $(this).find('[placeholder]').each(function() {
	      if ($(this).val() == $(this).attr("placeholder")) {
	        $(this).val("");
	        }
	     });
			});
	  }
	});

	/* ==========================================================================
			頁籤
	==========================================================================*/

	$(function() {
		var _showTab = 0;
		var $defaultLi = $('ul.cutover li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().removeClass('show');

		$('ul.cutover li').click(function() {
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

			return false;
		}).find('a').focus(function() {
			this.blur();
		});
	});

  /* ==========================================================================
    * 螢幕縮放動作
  ==========================================================================*/
  $(window).resize(function() {
  	resizeCss();
  });

  function resizeCss() {

  }
  /*document END*/
});
