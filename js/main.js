$(document).ready(function(){
    // function to see chekcbox status and add/remove relevant container classes
    function check_toggle(el) {
        if($(el).is(':checked')){
            $(el).closest('.checkbox-single').addClass('checked');
        } else {
            $(el).closest('.checkbox-single').removeClass('checked');
        }
    }
    // watch for change in checkboxes
    $('input[type="checkbox"]').each(function(){
        check_toggle(this);
        $(this).on('change', function(){
            check_toggle(this);
        });
    });
});
