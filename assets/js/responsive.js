// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-responsive");
var image = document.getElementById("header-image");
var navlist = document.getElementById("navul");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky && navbar.classList.contains("w-full")) {
    image.src = "/assets/img/making-rooms-logo-scroll.png";
    image.classList.remove("h-28");
    image.classList.add("h-16");
    navbar.classList.remove("top-12");
  } else if (window.pageYOffset < sticky && navbar.classList.contains("w-full")){
    image.src = "/assets/img/making-rooms-logo.png";
    image.classList.remove("h-16");
    image.classList.add("h-28");
    navbar.classList.add("top-12");
  }
}

function responsiveNavbar() {
  if (navbar.classList.contains('flex-row')) {
    navbar.classList.remove("top-12", "w-full", "flex-row", "justify-between");
    navlist.classList.remove("[&>*:not(:first-child)]:hidden");
    navbar.classList.add("text-center", "justify-center", "w-screen", "h-screen", "flex-col", "p-4");

  } else {
    navbar.classList.add("top-12", "w-full", "flex-row", "justify-between");
    navlist.classList.add("[&>*:not(:first-child)]:hidden");
    navbar.classList.remove("text-center", "justify-center", "w-screen", "h-screen", "flex-col", "p-4");
  }
}