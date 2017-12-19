$(document).ready(function(){

    // checkbox status check and toggle
    function check_toggle(el) {
        if($(el).is(':checked')){
            $(el).closest('.checkbox-single').addClass('checked');
        } else {
            $(el).closest('.checkbox-single').removeClass('checked');
        }
    }

    // check checkbox status on load
    $('input[type="checkbox"]').each(function(){
        check_toggle(this);
    });

    // watch for change in all and future (dom creation) checkboxes
    $(document).delegate('input[type="checkbox"]', 'change', function(){
        check_toggle(this);
    });

    $('.form-entry').each(function(){
        var count = $(this).children('select').length;
        if (count > 1) {
            $(this).children('select').addClass('auto-width');
        }
    });

});
