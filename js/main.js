$(function () {

    $('.navbar-toggler > img').click(function() {
        if ($('.navbar-toggler > img').attr('src') == 'style/navbar.ico') {
            $('.navbar-toggler > img').attr('src') == 'style/close.png';
        } else{
            $('.navbar-toggler > img').attr('src') == 'style/navbar.ico';
        }
    });
});