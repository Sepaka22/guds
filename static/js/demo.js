function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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