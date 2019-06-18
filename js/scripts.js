$(function() {
    // hamburger menu animation
    if ($(window).width() < 601) {
        $("#hamburgerBtn").click(function() {
            $(this).toggleClass("open").addClass("ml-auto");
            $(".menuTop").slideToggle("slow");
            $(this).parent("nav").css("flex-direction", "column");
        })
    }

    //sections scrolling with correct offset
    function underNavSection(sections) {
        var navHeight = $("#myNavClass").height();
        sections.each(function() {
            $(this).css("padding-top", navHeight + "px")
        })
    }
    underNavSection($(".paddingSet"));

    //fixed nav
    $(window).scroll(function () {
        var navHeight = $(".navFixed").height();
        var pageYOffset = window.pageYOffset;

        if (pageYOffset > navHeight) {
            $(".navFixed").css({position: "fixed"});
        } else {
            $(".navFixed").css({position: "absolute"});
        }
        
        if (window.matchMedia("(min-width: 601px)").matches && pageYOffset > navHeight) {
            $(".navFixed").css({backgroundColor: "#222"});
        } else if (window.matchMedia("(min-width: 601px)").matches) {
            $(".navFixed").css({backgroundColor: "transparent"});
        }
    })

    // to top button animations
   $(window).scroll(function() {
        if ($(this).scrollTop() > 450) {
            $(".btnToTop").css("display", "initial");
        } else {
            $(".btnToTop").css("display", "none");
        };
    })

    $(".btnToTop").click(function() {
        $(document.documentElement).scrollTop(0);
    })

    //technology animations
    $(".stackImages > div").css("opacity", "0");
    var homeHeight = $("header").height();
    var aboutMeHeight = $(".aboutMeInfo").height();
    var headlineHeight = $(".technologies > h2").height();
    var techHeight = $("#tech1").height();
    var techScrollPosition = homeHeight + aboutMeHeight - headlineHeight;
    var techScrollPosition2 = techScrollPosition + 2 * headlineHeight + techHeight;
    var techScrollPosition3 = techScrollPosition2 + 2 * techHeight;
    $(window).scroll(function() {
        if ($(this).scrollTop() > techScrollPosition) {
            $(".stackImages > div:nth-of-type(1)").animate({opacity: 1}, 2500);
            $(".stackImages > div:nth-of-type(2)").animate({opacity: 1}, 2500);
        };
        if ($(this).scrollTop() > techScrollPosition2) {
            $(".stackImages > div:nth-of-type(3)").animate({opacity: 1}, 2500);
            $(".stackImages > div:nth-of-type(4)").animate({opacity: 1}, 2500);
        };
        if ($(this).scrollTop() > techScrollPosition3) {
            $(".stackImages > div:nth-of-type(5)").animate({opacity: 1}, 2500);
            $(".stackImages > div:nth-of-type(6)").animate({opacity: 1}, 2500);
        }
    })

    //aboutme sliding
    $(".aboutMe > img").css("position", "relative").css("right", "110vw");
    $(".aboutMeText").css("position", "relative").css("left", "110vw");
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $("header").height() && $(this).scrollTop() < techScrollPosition) {
            $(".aboutMeText").animate({
                left: "0"
            }, 2000);
            $(".aboutMe > img").animate({
                right: "0"
            }, 2000);
        }
    })
    //phone number action
    $(".phoneIcon").click(function() {
        $(".phoneBox > p").slideToggle();
    })
})