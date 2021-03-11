$(document).ready(function () {


    /* _________SET CONTROLLER__________ */


    var controller = new ScrollMagic.Controller(); //

    /* _________Gneral Open Doors__________ */

    var mainAnimation = new TimelineMax()
        .add([
				TweenMax.to("#upperGeneral", 5, {
                top: "-38%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",


            }),
				TweenMax.to("#lowerGeneral", 5, {
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

    var msgOut = TweenMax.to("#allesGG", 2, {
        opacity: 0,
        delay: 3
    });

    //________String to Aray_________
    var str = "  Ja, alles gleich, und doch anders!";
    var words = str.split(" ");
    var obj = {
        curWord: 0
    };

    // create tween
    var msgSecuence = TweenMax.to(obj, 10, {
        curWord: words.length - 1, // animate propery curWord to number of images
        roundProps: "curWord", // only integers so it can be used as an array index
        repeat: 0, // repeat 3 times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function () {
            $("#actualWord").text(words[obj.curWord]); // set the image source

        }
    });

    var invert = new TimelineMax()
        .add([
            TweenMax.to("#actualWord", 0.1, {
                color: "#fff",

            }),
            TweenMax.to("#general", 0.1, {
                backgroundColor: "#111",
            }),

            TweenMax.to("#actualWord", 0.1, {
                opacity: "0",
                delay: 2,
            })

]);

    var mainText = TweenMax.fromTo("#generalText", 1, {
        opacity: 0,
    }, {
        opacity: 1,
        color: "white",
    });


    var reverse = new TimelineMax()
        .add([
            TweenMax.to("#generalText", 1, {
                color: "#red",

            }),
            TweenMax.to("#general", 1, {
                backgroundColor: "#fff",
            })

]);

    var closeDoors = new TimelineMax()
        .add([
        				TweenMax.staggerTo("#upperGeneral", 2, {
                top: "0",
                ease: "power3.out",
                boxShadow: "0",
                delay: 5,



            }),
        				TweenMax.staggerTo("#lowerGeneral", 2, {
                bottom: "0",
                ease: "power3.out",
                boxShadow: "0",
                delay: 5,


            })
]);




    //________________________________________________

    mainAnimation.add(msgIn).add(msgOut).add(msgSecuence).add(invert).add(mainText).add(reverse).add(closeDoors);

    // General Scene
    var generalScene = new ScrollMagic.Scene({
            triggerElement: "#general",
            duration: 10000,
        })
        .setTween(mainAnimation)
        .setPin("#general")
        .addIndicators({
            name: "GeneralAnimation"
        }) // add indicators (requires plugin)
        .triggerHook(0)
        .addTo(controller);

    //End General ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    // Project One________________________________________________________________________________________________________________________________

    var mainAnimation = new TimelineMax()
        .add([
				TweenMax.to("#upperPone", 2, {
                top: "-38%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",


            }),
				TweenMax.to("#lowerPone", 2, {
                bottom: "-40%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",


            }),

                TweenMax.fromTo("#KKpath", 2, {
                strokeDashoffset: "2106",

            }, {
                strokeDashoffset: "0",
                delay: 0.2,
            }),

            TweenMax.to("#KKschrift", 0.5, {
                delay: 2,
                opacity: 1,
                transform: "sclae(1.5)",

            })


			]);
    var popKK = new TweenMax.to("#ProjectOne svg", 1, {
        transform: "scale(10)",
        ease: Power3.easeOut,
        y: -500,
        opacity: "0",
    })

    var mainText = TweenMax.fromTo("#ProjectOne p", 1, {
        opacity: 0,
    }, {
        opacity: 1,
    });

    var slider = TweenMax.to("#imgKK", 5, {
        left: "-1050vw",

    });

    var closeDoors = new TimelineMax()
        .add([
        				TweenMax.staggerTo("#upperPone", 2, {
                top: "0",
                ease: "power3.out",
                boxShadow: "0",
                delay: 5,



            }),
        				TweenMax.staggerTo("#lowerPone", 2, {
                bottom: "0",
                ease: "power3.out",
                boxShadow: "0",
                delay: 5,


            })
]);


    mainAnimation.add(popKK).add(mainText).add(slider).add(closeDoors);

    // Project One Scene
    var generalScene = new ScrollMagic.Scene({
            triggerElement: "#ProjectOne",
            duration: 8000,
        })
        .setTween(mainAnimation)
        .setPin("#ProjectOne")
        .addIndicators({
            name: "Project1 Animation"
        }) // add indicators (requires plugin)
        .triggerHook(0)
        .addTo(controller);




    //End Project one ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    // Project Two________________________________________________________________________________________________________________________________
    var mainAnimation = new TimelineMax()
        .add([
				TweenMax.to("#upperPtwo", 2, {
                top: "-38%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",


            }),
				TweenMax.to("#lowerPtwo", 2, {
                bottom: "-40%",
                ease: "power3.out",
                boxShadow: "0px 1px 40px 16px rgba(0,0,0,0.36)",

            }),

                TweenMax.to("#tramOpen", 2, {
                left: "150%",
                delay: 0.3,
            })
			]);



    var trampath = {

        curviness: 1.5,
        autoRotate: true,
        values: [
            {
                x: -100,
                y: 300,
            },
            {
                x: 40,
                y: 400,
            },
            {
                x: 70,
                y: 170,
            },
            {
                x: -60,
                y: 170,
            },
            {
                x: 10,
                y: 470,
            },


            {
                x: 370,
                y: window.innerHeight,
            }


        ]

    };




    var tramtween = new TimelineMax()
        .add([
				TweenMax.to("#ProjectTwoText", 1, {
                opacity: "1",
            }),
            TweenMax.to($("#tramTop"), 1.2, {
                bezier: trampath,
                ease: Power1.easeInOut
            })

			]);

    var closeDoors = new TimelineMax()
        .add([
        				TweenMax.staggerTo("#upperPtwo", 2, {
                top: "0",
                ease: "power3.out",
                boxShadow: "0",
                delay: 5,

            }),
        				TweenMax.staggerTo("#lowerPtwo", 2, {
                bottom: "0",
                ease: "power3.out",
                boxShadow: "0",
                delay: 5,

            })
]);




    mainAnimation.add(tramtween).add(closeDoors);


    // Project Two Scene
    var generalScene = new ScrollMagic.Scene({
            triggerElement: "#ProjectTwo",
            duration: 8000,
        })
        .setTween(mainAnimation)
        .setPin("#ProjectTwo")
        .addIndicators({
            name: "Project2 Animation"
        }) // add indicators (requires plugin)
        .triggerHook(0)
        .addTo(controller);



    //__________________________________________________________________________________________________________________________________________________

});
