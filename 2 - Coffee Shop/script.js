
const menu = document.getElementById('.menu');
    const btnF = document.getElementById('btn-MobileF');
    const btnM = document.getElementById('btn-Mobile');

    function show(){
        menu.style.display = 'flex';
        menu.style.top = '0';
    }

    function close(){
        menu.style.top = '-100%';
    }

    btnM.addEventListener('click', show);
    btnF.addEventListener('click', close);





 const btnMobile = document.getElementById('btn-Mobile');
 const btnMobileF = document.getElementById('btn-MobileF');

 function toggleMenu() {
     const nav = document.getElementById('nav');
     nav.classList.toggle('active');
 }
 btnMobile.addEventListener('click', toggleMenu);
 btnMobileF.addEventListener('click', toggleMenu);