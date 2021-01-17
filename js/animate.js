$(document).ready(function () {


    /* _________SET CONTROLLER__________ */


    var controller = new ScrollMagic.Controller(); //

    /* _________Gneral Open Doors__________ */

    var openDoors = new TimelineMax()
        .add([
				TweenMax.to("#upperGeneral", 2, {
                top: "-38%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",


            }),
				TweenMax.to("#lowerGeneral", 2, {
                bottom: "-40%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",

            })
			]);


    // open Scene
    var openScene = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 500,
        })
        .setTween(openDoors)
        .addIndicators({
            name: "openDoors"
        }) // add indicators (requires plugin)
        .triggerHook(0.2)
        .addTo(controller);


    /* _________Gneral Main ANIMATION__________ */

    // testDiv
    var test = TweenMax.to("#testDiv", 2, {
        opacity: "0.1",
    })

    //General Animation

    var generalAnimation = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 1000,
        })
        .setPin("#general")
        .setTween(test)
        .addIndicators({
            name: "generalAnimation"
        }) // add indicators (requires plugin)
        .triggerHook(0)
        .addTo(controller);

    /* _________Gneral close Doors (evtl oben einfügen)__________ */

    //General close Dors

    var closeDoors = new TimelineMax()
        .add([
				TweenMax.to("#upperGeneral", 2, {
                top: "0",
                ease: "power3.out",
                boxShadow: "0",


            }),
				TweenMax.to("#lowerGeneral", 2, {
                bottom: "0",
                ease: "power3.out",
                boxShadow: "0",

            })
			]);


    // open Scene
    var closeDoors = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 300,
        })
        .setTween(openDoors)
        .addIndicators({
            name: "closeDoors"
        }) // add indicators (requires plugin)
        .triggerHook(0.5)
        .addTo(controller);








});
