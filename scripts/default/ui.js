$(document).ready(function() {

	$('.jqimgFill').imgLiquid();

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


  /* ==========================================================================
    * 共用
  ==========================================================================*/


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
