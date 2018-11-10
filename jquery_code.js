$(function(){

    $('#menu .navbar-nav > span a').click(function (e) {
        e.preventDefault();
    })

    $(window).click(function () {
        $('body, html').toggleClass('new_font');
    });

    div = $('#menu .navbar-nav > span:eq(1)');

    $('#menu ul > li').hide();

    $(window).click(function(e) {

        // Si ce n'est pas div ni un de ses enfants
        if(!$(e.target).is(div) && !$.contains(div[0],e.target) ) {
            $('#menu ul > li').slideUp('slow').fadeOut('slow');
        }
    });

    $(div).click(function(){

        $('#menu ul > li').slideDown('slow').fadeIn('slow').hover(

            function () {
                $(this).addClass('addClass a').stop().animate({
                        paddingLeft: '30px',
                    }, 400, 'linear',
                    function () {
                        $(this).css('background', 'white');
                    }
                );
            },
            function () {
                $(this).removeClass('addClass a').stop().animate({
                        paddingLeft: '0px',
                    }, 300, 'linear',
                    function () {
                        $(this).css('background', 'cornsilk');
                    }
                );
            }
        );


    });




});