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

    var msgIn = TweenMax.fromTo("#allesGG", 1, {
        opacity: 0,
    }, {
        opacity: 1,
    });

    var msgOut = TweenMax.to("#allesGG", 6, {
        opacity: 0,
        delay: 5
    });

    //________String to Aray_________
    var str = "  This is an amazing sentence.";
    var words = str.split(" ");
    //    console.log(words);    //["This", "is", "an", "amazing", "sentence."]
    var obj = {
        curWord: 0
    };

    // create tween
    var msgSecuence = TweenMax.to(obj, 100, {
        curWord: words.length - 1, // animate propery curWord to number of images
        roundProps: "curWord", // only integers so it can be used as an array index
        repeat: 0, // repeat 3 times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function () {
            $("#actualWord").text(words[obj.curWord]); // set the image source
            console.log("onUpdate");

        }
    });



    //________________________________________________

    mainAnimation.add(msgIn).add(msgOut).add(msgSecuence);

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


    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
        openScene.duration($(this).val());
    });

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
