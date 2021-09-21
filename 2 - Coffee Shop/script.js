
const btnMobile = document.getElementById('btn-Mobile');
const btnMobileF = document.getElementById('btn-MobileF');
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobileF.addEventListener('click', toggleMenu);
