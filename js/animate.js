$(document).ready(function () {


    /* _________SET CONTROLLER__________ */


    var controller = new ScrollMagic.Controller(); //

    /* _________Gneral Open Doors__________ */

    var mainAnimation = new TimelineMax()
        .add([
				TweenMax.to("#upperGeneral", 7, {
                top: "-38%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",


            }),
				TweenMax.to("#lowerGeneral", 3, {
                bottom: "-40%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",

            })
			]);

    var msgIn = TweenMax.fromTo("#general h2", 1, {
        opacity: 0,
    }, {
        opacity: 1,
    });

    var msgOut = TweenMax.to("#general h2", 6, {
        opacity: 0,
        delay: 5
    });

    mainAnimation.add(msgIn).add(msgOut);

    // open Scene
    var openScene = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 1000,
        })
        .setTween(mainAnimation)
        .setPin("#general")
        .addIndicators({
            name: "mainAnimation"
        }) // add indicators (requires plugin)
        .triggerHook(0)
        .addTo(controller);




});

///* _________Gneral Main ANIMATION__________ */
//
//var mainAnimation = new TimelineMax()
//
//
//});
//
//var closeDoors = new TimelineMax()
//    .add([
//        				TweenMax.staggerTo("#upperGeneral", 2, {
//                top: "0",
//                ease: "power3.out",
//                boxShadow: "0",
//
//
//            }),
//        				TweenMax.staggerTo("#lowerGeneral", 2, {
//                bottom: "0",
//                ease: "power3.out",
//                boxShadow: "0",
//
//            })
//
//
//
//mainAnimation.add(closeDoors);
//
////General Animation
//
//var generalAnimation = new ScrollMagic.Scene({
//                    triggerElement: "#general",
//                    duration: 1000,
//                })
//                .setPin("#general")
//                .setTween(mainAnimation)
//                .addIndicators({
//                    name: "generalAnimation"
//                }) // add indicators (requires plugin)
//                .triggerHook(0)
//                .addTo(controller);
