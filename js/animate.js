$(document).ready(function () {


    var controller = new ScrollMagic.Controller(); //


    var openDoors = new TimelineMax()
        .add([
				TweenMax.to("#upperGeneral", 2, {
                top: "-30%",
                ease: "power3.out",


            }),
				TweenMax.to("#lowerGeneral", 2, {
                bottom: "-30%",
                ease: "power3.out"

            })
			]);


    // open Scene
    var openScene = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 300,
        })
        .setTween(openDoors)
        .addIndicators({
            name: "openDoors"
        }) // add indicators (requires plugin)
        .triggerHook(0.2)
        .addTo(controller);

    //General Animation

    var generalAnimation = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 700,
        })
        .setPin("#general")
        .addIndicators({
            name: "generalAnimation"
        }) // add indicators (requires plugin)
        .triggerHook(0)
        .addTo(controller);









});
