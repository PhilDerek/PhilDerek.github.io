window.onscroll = function() {
    scrollToShow(toTopBtn);
}
function smoothScroll(elem) {
    var navElem = document.getElementById("navElem");
    if (window.matchMedia("(max-width: 600px)").matches) {
        window.scroll({
            behavior: "smooth",
            top: elem.offsetTop,
            left: 0
        })
    } else {
        window.scroll({
            behavior: "smooth",
            top: elem.offsetTop - navElem.offsetHeight,
            left: 0
        });
    }   
}
function scrollToShow(btn) {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        btn.style.display = "initial";
    } else btn.style.display = "none";
}

var navbarFirstLink = document.getElementById("navbarFirstLink");
var navbarSecondLink = document.getElementById("navbarSecondLink");
var navbarThirdLink = document.getElementById("navbarThirdLink");
var navbarFourthLink = document.getElementById("navbarFourthLink");

var scrollToAbout = document.getElementById("aboutSection");
var scrollToGallery = document.getElementById("gallerySection");
var scrollToPrice = document.getElementById("priceSection");
var scrollToContact = document.getElementById("contactSection");

var navbarMainContent = document.getElementById("navbarMainContent");

navbarFirstLink.addEventListener("click", function() {
    smoothScroll(scrollToAbout);
})

navbarSecondLink.addEventListener("click", function() {
    smoothScroll(scrollToGallery);
})

navbarThirdLink.addEventListener("click", function() {
    smoothScroll(scrollToPrice);
})

navbarFourthLink.addEventListener("click", function() {
    smoothScroll(scrollToContact);
})

var scrollToTopPoint = document.getElementById("scrollToTopPoint");
var toTopBtn = document.getElementById("toTopBtn");

toTopBtn.addEventListener("click", function() {
    smoothScroll(scrollToTopPoint);
})


function openModal() {
    cityModal.style.display = "block";
    document.body.style.overflow = "hidden";
}
    
function closeModal() {
    cityModal.style.display = "none";
    document.body.style.overflow = "auto";
}
    
var slideIndex = 1;
showSlides(slideIndex);
    
function nextImage(n) {
    showSlides(slideIndex += n);
}
    
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function backSlide(n) {
    showSlides(slideIndex -= n);
}
    
function showSlides(n) {
    var bigScreenModal = document.querySelectorAll(".bigScreenModal");
    if (n > bigScreenModal.length) {slideIndex = 1}
    if (n < 1) {slideIndex = bigScreenModal.length}
    for (var i = 0; i < bigScreenModal.length; i++) {
        bigScreenModal[i].style.display = "none";
    }
    
    bigScreenModal[slideIndex - 1].style.display = "block";
}

var close = document.getElementById("closeIcon");
close.addEventListener("click", function(){
    closeModal();
});

var img1 = document.getElementById("img1"),
    img2 = document.getElementById("img2"),
    img3 = document.getElementById("img3"),
    img4 = document.getElementById("img4");

img1.addEventListener("click", function() {
    openModal();
    currentSlide(1);
})

img2.addEventListener("click", function() {
    openModal();
    currentSlide(2);
})

img3.addEventListener("click", function() {
    openModal();
    currentSlide(3);
})

img4.addEventListener("click", function() {
    openModal();
    currentSlide(4);
})

var arrowBack = document.getElementById("arrowBack"),
    arrowNext = document.getElementById("arrowNext");

arrowBack.addEventListener("click", function() {
    backSlide(1);
})

arrowNext.addEventListener("click", function() {
    nextImage(1);
})

var cityModal = document.getElementById("cityModal");

window.addEventListener("click", function(e) {
    if (e.target == cityModal) {
        closeModal();
    }
})


hamburgerBtn.addEventListener("click", function() {
    this.classList.toggle("open");
})

window.addEventListener("scroll", function () {
    var myNavClass = document.querySelector(".myNavClass");
    var pageYOffset = window.pageYOffset;
    if (window.matchMedia("(min-width: 601px)").matches) {
        if (pageYOffset > myNavClass.offsetHeight) {
            myNavClass.style.position = "fixed";
            myNavClass.style.backgroundColor =  "#F5F6F7";
            myNavClass.style.width = "90%";
        } else {
            myNavClass.style.position = "absolute";
            myNavClass.style.backgroundColor =  "transparent";
            myNavClass.style.width = "100%";
        }
    } else if (window.matchMedia("(max-width: 600px)").matches) {
        if (pageYOffset > myNavClass.offsetHeight) {
            myNavClass.style.position = "fixed";
            myNavClass.style.width = "100%";
        } else {
            myNavClass.style.position = "absolute";
        }
    }
})
