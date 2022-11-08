$(window).on('scroll', function () {
    var minNavBarHeight = 60;
    var maxNavBarHeight = 110;

    if ($(window).scrollTop() > (maxNavBarHeight - minNavBarHeight)) {
        $('#header').css({ 'position': 'fixed', 'height': minNavBarHeight });
        $('#navBar').css('margin-top', -5);
    } else {
        $('#header').css({ 'position': 'static', 'height': maxNavBarHeight });
        $('#navBar').css('margin-top', 45.6);
    }
});
