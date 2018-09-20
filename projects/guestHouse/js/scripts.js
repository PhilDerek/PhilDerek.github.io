
//scroll functions
window.onscroll = function() {
    scrollToShow(toTopBtn);
}

function smoothScroll(elem) {
    window.scrollTo({
      'behavior': 'smooth',
      'top': elem.offsetTop
    });
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

//lightbox
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

//hamburger menu action
function showHamburger (elem) {
    elem.classList.remove("d-none");
    elem.classList.remove("d-md-block");
    elem.classList.add("showNavbarClass");
}

function hideHamburger (elem) {
    elem.classList.add("d-none");
    elem.classList.add("d-md-block");
    elem.classList.remove("showNavbarClass");
}

var i = 1;

var hamburgerBtn = document.getElementById("hamburgerBtn");
hamburgerBtn.addEventListener("click", function() {
    var navbarMainContent = document.getElementById("navbarMainContent");
    if (i % 2 !== 0) {
        showHamburger(navbarMainContent);
    } else hideHamburger(navbarMainContent);
    i++;  
})
hamburgerBtn.addEventListener("click", function() {
    this.classList.toggle("open");
})