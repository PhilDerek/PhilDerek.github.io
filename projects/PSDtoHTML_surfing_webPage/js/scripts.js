$(document).ready(function() {
    
    var deskBoxWidth = document.querySelector(".surfboard1").offsetWidth;

    var boardBox = $(".boardBox");
    var leftPosition = 0;
    var newPosition = 0;
    var clickTimes = 0;

    $("#shopArrowLeft").click(function() {       
        clickTimes++;
        if (newPosition < 0) {
            newPosition = leftPosition + (deskBoxWidth * clickTimes);
            $(boardBox).animate({
                left: newPosition
            }, 800);
        } else {
            if (window.matchMedia("(min-width: 901px)").matches) {
                newPosition = -(3 * deskBoxWidth);
                clickTimes = -3;
            } else if (window.matchMedia("(min-width: 601px) and (max-width: 900px)").matches) {
                newPosition = -(4 * deskBoxWidth);
                clickTimes = -4;
            } else if (window.matchMedia("(max-width: 600px)").matches) {
                newPosition = -(5 * deskBoxWidth);
                clickTimes = -5;
            }
            $(boardBox).animate({
                left: newPosition
            }, 1500);
        }
    })

    $("#shopArrowRight").click(function() {
        clickTimes--;
        if (window.matchMedia("(min-width: 901px)").matches) {
            if (newPosition > -(3 * deskBoxWidth)) {
                newPosition = leftPosition + (deskBoxWidth * clickTimes);
                $(boardBox).animate({
                    left: newPosition
                }, 800);
            } else {
                newPosition = 0;
                clickTimes = 0;
                $(boardBox).animate({
                    left: newPosition
                }, 1500);
            }
        } else if (window.matchMedia("(min-width: 601px) and (max-width: 900px)").matches) {
            if (newPosition > -(4 * deskBoxWidth)) {
                newPosition = leftPosition + (deskBoxWidth * clickTimes);
                $(boardBox).animate({
                    left: newPosition
                }, 800);
            } else {
                newPosition = 0;
                clickTimes = 0;
                $(boardBox).animate({
                    left: newPosition
                }, 1500);
            }
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            if (newPosition > -(5 * deskBoxWidth)) {
                newPosition = leftPosition + (deskBoxWidth * clickTimes);
                $(boardBox).animate({
                    left: newPosition
                }, 800);
            } else {
                newPosition = 0;
                clickTimes = 0;
                $(boardBox).animate({
                    left: newPosition
                }, 1500);
            }
        }
        
    })

    
    var howManyImages = document.querySelectorAll(".boardBox img");
    
    for (var i = 1; i <= howManyImages.length; i++) {
        var boardBackgroundWidth = $(".boardBackground").width();
        var surfboardImage = $(".surfboard" + [i] + " img").width();
        $(".surfboard" +[i]+ " img").css("left", boardBackgroundWidth * .5 - surfboardImage * .5);
    }

    
    if ($(window).width() < 600) {
        $("#hamburgerBtn").click(function() {
            $(this).toggleClass("open").addClass("ml-auto");
            $("#menuTop").slideToggle("slow");
            $(this).parent("nav").css("flex-direction", "column");
        });

        $("header").removeClass("container");
    }

    
    if (window.matchMedia("(min-width: 601px)").matches) {
        $(".mainHeaderText").css("position", "relative").css("left", "-50vw").animate({
            left: "0"
        }, 1500); 
    } else {
        $(".mainHeaderText p:nth-of-type(2)").css("position", "relative").css("left", "110vw").animate({
            left: "0"
        }, 1500);
    }
    
    
    $(".pushEmailBtn").click(function (event) {
        event.preventDefault();
        var emailRegEx = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i
        var emailInput = $(".emailInput").val();
        var formChildren = document.getElementById("form").childElementCount;
        if (emailRegEx.test(emailInput)) {
            $(".submitSuccessScreen").toggle();
            $(".emailInput").val("");
            
            if (formChildren > 2) {
                $("span").remove();
            }
        } else {
            $(".emailInput").css({boxShadow: "0px 0px 5px 0px red"});

            if (formChildren < 3) {
                $(this).parent().append("<span>This email is invalid</span>").css({color: "red"});
            }
        }
    })

    $(".closeScreen").click(function() {
        $(".submitSuccessScreen").css({display: "none"});
        $(".emailInput").css({boxShadow: "none"});
    })

    
    $(window).scroll(function () {
        var navHeight = $(".fixedNav").height();
        var pageYOffset = window.pageYOffset;
        if (window.matchMedia("(min-width: 601px)").matches) {
            if (pageYOffset > navHeight) {
                $(".fixedNav").css({position: "fixed", backgroundColor: "rgba(156, 196, 207, .8)", paddingRight: "12%"});
                $(".linkStyle").css({color: "#000"});
            } else {
                $(".fixedNav").css({position: "absolute", backgroundColor: "transparent", paddingRight: "30px"});
                $(".linkStyle").css({color: "#FFF"});
            }
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            if (pageYOffset > navHeight) {
                $(".fixedNav").css({position: "fixed"});
            } else {
                $(".fixedNav").css({position: "absolute"});
            }
        }
    })
})