$(document).ready(function () {

    if (mobileAndTabletcheck()) {
        screen.orientation.lock("portrait-primary");
    } else {
        console.log("not a phone or tablet");
    }



    if (document.getElementById('main-wrapper') != null) {

        var originalBGplaypen = $("#main-wrapper").css("background-color"),
            x, y, xy, bgWebKit, bgMoz,
            lightColor = "rgba(255,255,255,0.75)",
            gradientSize = getWidth() > 500 ? getWidth() / 620 * 50 : 75;

        //    console.log('Width:  ' + getWidth());
        //    console.log('Height: ' + getHeight());

        $('#main-wrapper').css('height', getHeight() + 'px');
        $('#main-wrapper').css('width', getWidth() + 'px');


        //    var container = document.getElementById('main-wrapper');
        //    init(container, getWidth(), getHeight(), '#000');

        $('#main-wrapper').mousemove(function (e) {

            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;
            xy = x + " " + y;

            bgWebKit =
                "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize +
                ", from(" + lightColor +
                "), to(rgba(255,255,255,0.0))), " +
                originalBGplaypen;

            bgMoz =
                "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " +
                lightColor + " 0%, " + originalBGplaypen +
                " " + gradientSize + "px)";

            $(this)
                .css({
                    background: bgWebKit
                })
                .css({
                    background: bgMoz
                });

        }).mouseleave(function () {
            $(this).css({
                background: originalBGplaypen
            });
        });

        // partical Js

        /* ---- particles.js config ---- */

        if (document.getElementById("particles-js") != null) {

            particlesJS.load('particles-js', 'particles.json', function () {
                console.log('particles.js loaded - callback');
            });


            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 380,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });

        } else {
            console.log(document.getElementById("particles-js"));
        }
    } else if (document.getElementById('mainMap') != null) {
        if (document.getElementById('notAdd') != null) {
            $('#mainMap').css('height', getHeight() + 'px');
//            $('#mainMap').css('width', getWidth() + 'px');
        } else if (document.getElementById('cont') != null) {
            // do nothing  
//            document.querySelector('#form[data-layout-type="mobile"] div[data-role="form-footer"]').className = "hide";
            
//            setTimeout(function () {
//                var footer = $('iframe')[0];
//                console.log(footer);
//            }, 500);
            
            
        } else {
            //            $('#mainMap').css('height', getHeight() + 50 + 'px');
//            $('#mainMap').css('width', getWidth() + 'px');


            $('#svg').css('height', getHeight() + 'px');
//            $('#svg').css('width', getWidth() + 'px');


            $('#svg1').css('height', getHeight() + 'px');
//            $('#svg1').css('width', getWidth() + 'px');


            $('#svg2').css('height', getHeight() + 'px');
//            $('#svg2').css('width', getWidth() + 'px');


            $('#svg3').css('height', getHeight() + 'px');
//            $('#svg3').css('width', getWidth() + 'px');

            // Draw lines
            var line = $('#line');
            var line1 = $('#line1');
            var line2 = $('#line2');
            var line3 = $('#line3');

            var div1 = $('#one');
            var div2 = $('#two');
            var div3 = $('#three');
            var div4 = $('#four');

            var x1 = div1.offset().left + (div1.width() / 2);
            var y1 = div1.offset().top + (div1.height() / 2);

            var x2 = div2.offset().left + (div2.width() / 2);
            var y2 = div2.offset().top + (div2.height() / 2);

            var x3 = div3.offset().left + (div3.width() / 2);
            var y3 = div3.offset().top + (div3.height() / 2);

            var x4 = div4.offset().left + (div4.width() / 2);
            var y4 = div4.offset().top + (div4.height() / 2);

            line.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2);
            line1.attr('x1', x2).attr('y1', y2).attr('x2', x3).attr('y2', y3);
            line2.attr('x1', x3).attr('y1', y3).attr('x2', x4).attr('y2', y4);
            line3.attr('x1', x4).attr('y1', y4).attr('x2', x1).attr('y2', y1);
        }
    }

    // start my work carsoul 

    if (document.querySelector('.carousel') != null) {
        var carousel = document.querySelector('.carousel');
        var cellCount = 3;
        var selectedIndex = 0;

        function rotateCarousel() {
            var angle = selectedIndex / cellCount * -360;
            carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';

            var falsh = document.getElementById('flash');
            flash.className = "flash";
            setTimeout(function () {
                flash.className = "";
            }, 500);
        }

        var prevButton = document.querySelector('.previous-button');
        prevButton.addEventListener('click', function () {
            selectedIndex--;
            rotateCarousel();
        });

        var nextButton = document.querySelector('.next-button');
        nextButton.addEventListener('click', function () {
            selectedIndex++;
            rotateCarousel();
        });

    }

});


function createCanvas(parent, width, height) {
    var canvas = {};
    canvas.node = document.createElement('canvas');
    canvas.context = canvas.node.getContext('2d');
    canvas.node.width = width || 100;
    canvas.node.height = height || 100;
    //    canvas.node.id = "cc";
    parent.appendChild(canvas.node);
    return canvas;
}

function init(container, width, height, fillColor) {

    var canvas = createCanvas(container, width, height);
    var ctx = canvas.context;

    // define a custom fillCircle method
    ctx.fillCircle = function (x, y, radius, fillColor) {
        this.fillStyle = fillColor;
        this.beginPath();
        this.moveTo(x, y);
        this.arc(x, y, radius, 0, Math.PI * 2, false);
        this.fill();
    };
    ctx.clearTo = function (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fillRect(0, 0, width, height);
    };
    ctx.clearTo(fillColor || "#ddd");

    // bind mouse events
    canvas.node.onmousemove = function (e) {

        if (!canvas.isDrawing) {

            var originalBGplaypen = "rgba(0,0,0)",
                x, y, xy, bgWebKit, bgMoz,
                lightColor = "rgba(255,255,255,0.75)",
                gradientSize = getWidth() / 620 * 50;


            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;
            xy = x + " " + y;

            bgWebKit =
                "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize +
                ", from(" + lightColor +
                "), to(rgba(255,255,255,0.0))), " +
                originalBGplaypen;

            bgMoz =
                "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " +
                lightColor + " 0%, " + originalBGplaypen +
                " " + gradientSize + "px)";

            $(this)
                .css({
                    background: bgWebKit
                })
                .css({
                    background: bgMoz
                });

            return;
        }
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var radius = getWidth() / 620 * 25; // or whatever
        var fillColor = '#fff';
        ctx.fillCircle(x, y, radius, fillColor);
    };
    canvas.node.onmousedown = function (e) {
        canvas.isDrawing = true;
    };
    canvas.node.onmouseup = function (e) {
        canvas.isDrawing = false;
    };
}

function getWidth() {
    return Math.max(
        //        document.body.scrollWidth,
        //        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

$(window).resize(function () {
    if (document.getElementById('main-wrapper') != null) {
        var originalBGplaypen = $("#main-wrapper").css("background-color"),
            x, y, xy, bgWebKit, bgMoz,
            lightColor = "rgba(255,255,255,0.75)",
            gradientSize = getWidth() > 500 ? getWidth() / 620 * 50 : 75;

        console.log('Width:  ' + getWidth());
        console.log('Height: ' + getHeight());

        $('#main-wrapper').css('height', getHeight() + 'px');
        $('#main-wrapper').css('width', getWidth() + 'px');


        $('#main-wrapper').mousemove(function (e) {

            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;
            xy = x + " " + y;

            bgWebKit =
                "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize +
                ", from(" + lightColor +
                "), to(rgba(255,255,255,0.0))), " +
                originalBGplaypen;

            bgMoz =
                "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " +
                lightColor + " 0%, " + originalBGplaypen +
                " " + gradientSize + "px)";

            $(this)
                .css({
                    background: bgWebKit
                })
                .css({
                    background: bgMoz
                });

        }).mouseleave(function () {
            $(this).css({
                background: originalBGplaypen
            });
        });
    } else
    if (document.getElementById('mainMap') != null) {
        $('#mainMap').css('height', getHeight() + 50 + 'px');
        $('#mainMap').css('width', getWidth() + 'px');
    }

});

window.addEventListener('load', function () {
    setTimeout(function () {
        var center = document.getElementById('centerAnimation');
        center.className = "center hide";
    }, 1500);

    var left = document.getElementById('loadL');
    left.className = "leftPart animationLeft";
    var right = document.getElementById('loadR');
    right.className = "rightPart animationRight";
    setTimeout(function () {
        var loading = document.getElementById('loadingScreen');
        loading.remove();
    }, 4000);

})



//window.addEventListener("scroll", function () {
//    //    to do
//});

//// Add smooth scrolling to all links
//$(document).ready(function () {
//    $("a").on('click', function (event) {
//
//        // Make sure this.hash has a value before overriding default behavior
//        if (this.hash !== "") {
//            // Prevent default anchor click behavior
//            event.preventDefault();
//
//            // Store hash
//            var hash = this.hash;
//
//            // Using jQuery's animate() method to add smooth page scroll
//            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//            $('html, body').animate({
//                scrollTop: $(hash).offset().top
//            }, 800, function () {
//
//                // Add hash (#) to URL when done scrolling (default click behavior)
//                window.location.hash = hash;
//            });
//        } // End if
//    });
//});
