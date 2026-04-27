const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("theme-toggle");

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            btn.innerText = "☀️";
        } else {
            btn.innerText = "🌙";
        }
    });

});