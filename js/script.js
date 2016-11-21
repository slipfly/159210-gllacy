/**
 * Created by null on 20.11.2016.
 */

if (document.querySelector(".cart-content")) {
  //переменные для содержимого корзины
  var cartContent = document.querySelector(".cart-content");
  var cartFullBtn = document.querySelector(".cart-full");

  cartFullBtn.addEventListener("click", function (event) {
    event.preventDefault();
    cartContent.classList.toggle("modal-show");
    cartContent.classList.toggle("animat-for-cart-full");
  });
}

if (document.querySelector(".sort-by")) {
  //переменные для сортировки в каталоге
  var sortListBtn = document.querySelector(".sort-by");
  var sortList = document.querySelector(".sort-by .sub-menu");

  sortListBtn.addEventListener("click", function (event) {
    event.preventDefault();
    sortList.classList.toggle("modal-show");
    sortList.classList.toggle("animat-for-sort-list");
  });
}

if (document.querySelector(".modal-overlay")) {
  //переменные для логина на главной
  var loginBtn = document.querySelector(".header-btn-login");
  var loginForm = document.querySelector(".modal-content-login");
  var loginLogin = loginForm.querySelector(".login-form-email");
  var loginPassword = loginForm.querySelector(".login-form-password");
  var storage = localStorage.getItem("login");

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.toggle("modal-show");
    loginForm.classList.toggle("animat-for-login-form");
    if (storage) {
      loginLogin.value = storage;
      loginPassword.focus();
    } else {
      loginLogin.focus();
    }
  });

  loginForm.addEventListener("submit", function (event) {
    if (!loginLogin.value || !loginPassword.value) {
      event.preventDefault();
      console.log("111");
    } else {
      localStorage.setItem("login", loginLogin.value);
      loginForm.classList.remove("modal-show");
      loginForm.classList.remove("animat-for-login-form");
    }
  });
}

if (document.querySelector(".modal-overlay")) {
  //переменные для формы обратной связи
  var modalFeedbackForm = document.querySelector(".modal-content-feedback");
  var modalOverlay = document.querySelector(".modal-overlay");
  var modalFeedbackFormBtn = document.querySelector(".red-btn .feedback-form");
  var modalFeedbackFormClose = document.querySelector(".modal-content-close");
  var modalName = modalFeedbackForm.querySelector(".feedback-name");
  var modalEmail = modalFeedbackForm.querySelector(".feedback-email");
  var modalFeedbackText = modalFeedbackForm.querySelector(".feedback-text");
  var modalForm = document.querySelector("form.feedback");

  modalFeedbackText.value = "";

  modalFeedbackFormBtn.addEventListener("click", function (event) {
    event.preventDefault();
    modalFeedbackForm.classList.add("modal-show");
    modalOverlay.classList.add("modal-show");
    modalFeedbackForm.classList.add("animat-for-feedback-form");
    modalName.focus();
  });

  modalFeedbackFormClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalFeedbackForm.classList.remove("modal-show");
    modalOverlay.classList.remove("modal-show");
    modalFeedbackForm.classList.remove("animat-for-feedback-form");
  });

  modalForm.addEventListener("submit", function(event) {
    if (!modalName.value || !modalEmail.value || !modalFeedbackText.value) {
      event.preventDefault();
      console.log("111");
    } else {
      modalFeedbackForm.classList.remove("modal-show");
      modalOverlay.classList.remove("modal-show");
      modalFeedbackForm.classList.remove("animat-for-feedback-form");
    }
  });
}

if (document.querySelector(".modal-overlay")) {
  //переменные для формы поиска
  var searchShowBtn = document.querySelector(".header-btn-search");
  var searchForm = document.querySelector(".modal-content-search");
  var searchInput = searchForm.querySelector(".search-form-search");

  searchShowBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("modal-show");
    searchForm.classList.toggle("animat-for-search-form");
  });

  searchForm.addEventListener("submit", function(event) {
    if (!searchInput.value) {
      event.preventDefault();
      console.log("111");
    } else {
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("animat-for-search-form");
    }
  });
}

if (document.querySelector(".main-navigator-catalog .main-navigator-link")) {
  //переменные для выпадающего списка в хэдере
  var catalogContextBtn = document.querySelector(".main-navigator-catalog .main-navigator-link");
  var catalogContextList = document.querySelector(".index-catalog-list");

  catalogContextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    catalogContextList.classList.toggle("modal-show");
    catalogContextList.classList.toggle("animat-for-catalog-list");
  });
}
