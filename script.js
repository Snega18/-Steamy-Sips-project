
let navbar = document.querySelector('.nav-bar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
}
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}
let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll =() =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
}
const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnpopup =document.querySelector('.show-login');
const iconclose =document.querySelector('.icon-close');
registerLink .addEventListener('click',()=>{
    wrapper.classList.add('active');
})
loginLink .addEventListener('click',()=>{
    wrapper.classList.remove('active');
})
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})