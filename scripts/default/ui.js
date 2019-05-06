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
				}
			]
	});


	/* ==========================================================================
    * page
	==========================================================================*/

	$('#home').each(function(){
		
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
    * 螢幕縮放動作
  ==========================================================================*/
  $(window).resize(function() {
  	resizeCss();
  });

  function resizeCss() {

  }
  /*document END*/
});
