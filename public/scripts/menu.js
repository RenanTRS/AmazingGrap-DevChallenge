const navMenu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
});