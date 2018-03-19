/*Модальное окно*/
var link = document.querySelector(".weekly__order");
var modal = document.querySelector(".add-to-cart");
var wrapper = document.querySelector(".modal-wrapper");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("add-to-cart--show");
  wrapper.classList.add("modal-wrapper--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("add-to-cart--show")) {
      modal.classList.remove("add-to-cart--show");
      wrapper.classList.remove("modal-wrapper--show");
    }
  }
});

wrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("add-to-cart--show");
  wrapper.classList.remove("modal-wrapper--show");
});

/*Переключатель главного меню на мобильной версии*/
var pageHeader = document.querySelector(".page-header");
var toggle = document.querySelector(".main-nav__toggle");

pageHeader.classList.remove("page-header--nojs");

toggle.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header--closed")) {
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--opened");
  } else {
    pageHeader.classList.add("page-header--closed");
    pageHeader.classList.remove("page-header--opened");
  }
});

/*Фоновая карта при выключенном js*/
var iframe = document.querySelector(".contacts__iframe");

iframe.classList.remove("contacts__iframe--nojs;")
