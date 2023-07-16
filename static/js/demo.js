function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function popup(el) {

    $(".document").toggleClass("no-scroll", true);
    $(".js-popup").toggleClass("active", false);
    $(el).toggleClass("active", true).scrollTop(0);
    return;

}


$(".js-popup-close").click(function (e) {
    e.preventDefault();
    $(".document").toggleClass("no-scroll", false);
    $(".js-popup").toggleClass("active", false);

    $(".yt-player-iframe").each(function () {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    return;
});

$("[data-popup]").click(function (e) {
    e.preventDefault();
    var el = $(this).data("popup");
    popup(el);
    return;
});

$(".s11-4 .carousel").slick({
    slidesToShow: 6,
    arrows: false,
    dots: false,
    autoplay: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
            },
        ]
});

var controller = new ScrollMagic.Controller();

$(".paroller").each(function (i) {

    var el = $(this);

    if (el.hasClass("paroller-bg")) {

    } else {

        new ScrollMagic.Scene({
                triggerElement: this,
                duration: $(window).height() * 2,
                triggerHook: "onEnter",

            })

            .setTween(this, {
                y: "100rem",
                ease: Linear.easeNone
            })
            .addTo(controller);


    }



});


$(".ball").each(function (i) {

    var el = $(this);

    new ScrollMagic.Scene({
            triggerElement: this,
            duration: $(window).height() * 2,
            triggerHook: "onEnter",

        })

        .setTween(this, {
            y: (i % 2 === 0) ? rndInt(150, 250) : rndInt(-150, -250) + "rem",
            ease: Linear.easeNone
        })
        .addTo(controller);

});

var scrollPosition = 0;

$(".js-headroom").each(function (i) {
    var headroom = $(this),
        top = 400;

    $(window).on("scroll", function () {

        var wt = $(this).scrollTop();

        headroom.toggleClass("active", wt > top);

    });

});

$(".js-swipe").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
});
