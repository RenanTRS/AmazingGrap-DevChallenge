const navMenu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('on')
    navMenu.classList.toggle('active');
});