$(document).ready(function () {
    console.log("ready!");


    var controller = new ScrollMagic.Controller();

    // General Tween
    var upper = TweenMax.to("#upperGeneral", 2, {
        top: "-50%",
    });

    var lower = TweenMax.to("#lowerGeneral", 2, {
        top: "+50%",
    });


    // Upper Scene
    var upperScene = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 400,
        })
        .setTween(upper)
        .addIndicators({
            name: "tween css class"
        }) // add indicators (requires plugin)
        .setPin("#general")
        .triggerHook(0)
        .addTo(controller);

    // Lower Scene
    var lowerScene = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 400,
        })
        .setTween(lower)
        .setPin("#general")
        .triggerHook(0)
        .addTo(controller);





});
