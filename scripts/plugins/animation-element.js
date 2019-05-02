var $animation_elements = $('.mation');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {

            $element.addClass('in-view');

        }
			/*
				//是可以做reverse，只是animation那邊會不太順，雖然說離開畫面後使用者也看不到怪怪的地方了
			 else {
			 	$element.removeClass('in-view');
			 }
			*/
    });
}
$window.on('load', function(){
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
})