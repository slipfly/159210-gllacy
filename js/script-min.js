/**
 * Created by null on 23.11.2016.
 */
if(document.querySelector(".sort-by")){var sortListBtn=document.querySelector(".sort-by"),sortList=document.querySelector(".sort-by .sub-menu");sortListBtn.addEventListener("click",function(a){a.preventDefault();sortList.classList.toggle("modal-show");sortList.classList.toggle("animat-for-sort-list")})}
if(document.querySelector(".modal-overlay")){var loginBtn=document.querySelector(".header-btn-login"),loginForm=document.querySelector(".modal-content-login"),loginLogin=loginForm.querySelector(".login-form-email"),loginPassword=loginForm.querySelector(".login-form-password"),storage=localStorage.getItem("login");loginBtn.addEventListener("click",function(a){a.preventDefault();loginForm.classList.toggle("modal-show");loginForm.classList.toggle("animat-for-login-form");loginForm.classList.remove("modal-error");
  storage?(loginLogin.value=storage,loginPassword.focus()):loginLogin.focus()});loginForm.addEventListener("submit",function(a){loginLogin.value&&loginPassword.value?(localStorage.setItem("login",loginLogin.value),loginForm.classList.remove("modal-show"),loginForm.classList.remove("animat-for-login-form")):(a.preventDefault(),loginForm.classList.add("modal-error"))})}
if(document.querySelector(".modal-overlay")){var modalFeedbackForm=document.querySelector(".modal-content-feedback"),modalOverlay=document.querySelector(".modal-overlay"),modalFeedbackFormBtn=document.querySelector(".red-btn .feedback-form"),modalFeedbackFormClose=document.querySelector(".modal-content-close"),modalName=modalFeedbackForm.querySelector(".feedback-name"),modalEmail=modalFeedbackForm.querySelector(".feedback-email"),modalFeedbackText=modalFeedbackForm.querySelector(".feedback-text"),
  modalForm=document.querySelector("form.feedback");modalFeedbackText.value="";modalFeedbackFormBtn.addEventListener("click",function(a){a.preventDefault();modalFeedbackForm.classList.add("modal-show");modalOverlay.classList.add("modal-show");modalFeedbackForm.classList.add("animat-for-feedback-form");modalName.focus()});modalFeedbackFormClose.addEventListener("click",function(a){a.preventDefault();modalFeedbackForm.classList.remove("modal-show");modalOverlay.classList.remove("modal-show");modalFeedbackForm.classList.remove("animat-for-feedback-form");
  modalFeedbackForm.classList.remove("modal-error")});modalForm.addEventListener("submit",function(a){modalName.value&&modalEmail.value&&modalFeedbackText.value?(modalFeedbackForm.classList.remove("modal-show"),modalOverlay.classList.remove("modal-show"),modalFeedbackForm.classList.remove("animat-for-feedback-form")):(a.preventDefault(),modalFeedbackForm.classList.add("modal-error"))})}
if(document.querySelector(".modal-overlay")){var searchShowBtn=document.querySelector(".header-btn-search"),searchForm=document.querySelector(".modal-content-search"),searchInput=searchForm.querySelector(".search-form-search");searchShowBtn.addEventListener("click",function(a){a.preventDefault();searchForm.classList.toggle("modal-show");searchForm.classList.toggle("animat-for-search-form")});searchForm.addEventListener("submit",function(a){searchInput.value?(searchForm.classList.remove("modal-show"),
  searchForm.classList.remove("animat-for-search-form")):(a.preventDefault(),console.log("111"))})};
