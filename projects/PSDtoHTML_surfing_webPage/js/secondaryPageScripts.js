$(document).ready(function() {
    // surfboard description and line animation
    function createLineSurfboardDescription (x1, y1, x2, y2, lineName) {
        var pointsDistance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    
        var middlePointX = (x1 + x2) / 2;
        var middlePointY = (y1 + y2) / 2;
    
        var lineSlopeRad = Math.atan2(y1 - y2, x1 - x2);
        var lineSlopeDegrees = lineSlopeRad * 180 / Math.PI;
    
        var line = document.getElementById(lineName);
        line.style.width = pointsDistance + "px";
        line.style.height = "2px";
        line.style.backgroundColor = "#000";
        line.style.position = "absolute";
        line.style.top = middlePointY + "px";
        line.style.left = (middlePointX - (pointsDistance / 2)) + "px";
        line.style.transform = "rotate(" + lineSlopeDegrees + "deg)";
    }
    
    var rect2 = document.querySelector(".surfboardDescription").getBoundingClientRect();
    
    var newElem2 = document.getElementById("dotTest2");
    newElem2.style.top = window.pageYOffset + rect2.top + "px";
    newElem2.style.left = rect2.left + rect2.width / 2 + "px";
    document.body.appendChild(newElem2);

    if (window.matchMedia("(min-width: 1200px)").matches) {
        $(".desk").hover(
            function() {
                var x1Value = $(this).offset().left + $(this).outerWidth() / 3;
                var y1Value = $(this).offset().top + $(this).outerHeight();    
                var x2Value = rect2.left + rect2.width / 2;
                var y2Value = newElem2.getBoundingClientRect().top + window.pageYOffset;
                createLineSurfboardDescription(x1Value, y1Value, x2Value, y2Value, "line");
                $("#line").stop().fadeIn();
            }, function() {
                $("#line").stop().fadeOut();
            }
        );
    }
    

    //fixed waves animation
    var savedScrollDistance = 0;
    $(window).scroll(function() {
        if (document.body.getBoundingClientRect().top > savedScrollDistance) {
            $(".fixedWave").css("top", "100%").addClass("waveAnimeClass");
            $(".backboard").css("transform", "rotate(0)");
        } else {
            $(".fixedWave").css("top", "40%").addClass("waveAnimeClass");
            $(".backboard").css("transform", "rotate(180deg)");
        };

        savedScrollDistance = document.body.getBoundingClientRect().top;
    })

    //Contact text show
    $(".jQueryClick").click(function() {
        $(this).siblings().fadeToggle( "fast", "linear" );
    })
})





