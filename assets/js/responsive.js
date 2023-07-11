// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-responsive");
var image = document.getElementById("header-image");


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky && navbar.className != "navbar responsive") {
    image.src = "assets/img/making-rooms-logo-scroll.png";
    image.classList.remove("h-28");
    image.classList.add("h-16");
    navbar.classList.remove("top-12");
  } else {
    image.src = "assets/img/making-rooms-logo.png";
    image.classList.remove("h-16");
    image.classList.add("h-28");
    navbar.classList.add("top-12");
  }
}

function responsiveNavbar() {
  if (navbar.className === "navbar" || navbar.className === "navbar sticky") {
    navbar.classList.remove("sticky");
    navbar.classList.add("responsive");
    
  } else {
    navbar.classList.add("sticky")
    navbar.classList.remove("responsive");
    
  }
}