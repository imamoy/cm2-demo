$('#onePage_report').each(function(){
    $('.onePage_report-btn').click(function(){
        $('.onePage_report-pop').show();
        $('.pop_bg').show();
    });
    $('.pop_bg').click(function(){
        $('.onePage_report-pop').hide();
        $('.pop_bg').hide();
    });
});