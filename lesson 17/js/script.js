$(document).ready(function() {


    $('.main_btna, .main_btn, [href="#sheldure"]').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    });

});