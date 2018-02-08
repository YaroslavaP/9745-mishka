/*Меню на мобильнике*/
var navMenu = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMenu.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if ( navMenu.classList.contains("main-nav--closed") ) {
    navMenu.classList.remove("main-nav--closed");
    navMenu.classList.add("main-nav--opened");
  } else {
    navMenu.classList.add("main-nav--closed");
    navMenu.classList.remove("main-nav--opened");
  }
});

/*Модальное окно*/
var btn = document.querySelectorAll(".modal-open");
var modal_bg = document.querySelector(".modal-bg");
var modal = document.querySelector(".modal");
var close = document.querySelector(".add-to-cart");

for ( var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(event) {
    event.preventDefault();
    modal_bg.classList.add("modal-show");
    modal.classList.add("modal-show");
  })
};

close.addEventListener("click", function(event) {
  event.preventDefault();
  if ( modal_bg.classList.contains("modal-show") ) {
    modal_bg.classList.remove("modal-show");
    modal.classList.remove("modal-show");
  }
});

modal_bg.addEventListener("click", function(event) {
  event.preventDefault();
  if ( modal_bg.classList.contains("modal-show") ) {
    modal_bg.classList.remove("modal-show");
    modal.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if ( modal_bg.classList.contains("modal-show") ) {
      modal_bg.classList.remove("modal-show");
      modal.classList.remove("modal-show");
    }
  }
})

/*карта*/

var mapOpen = document.querySelector(".contacts__map");

mapOpen.classList.remove("contacts__map--no-js");
