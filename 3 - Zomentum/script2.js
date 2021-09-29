document.getElementById("itembtn").addEventListener("click", myFunction);
function myFunction() {
    const item = document.getElementById("menu");
    item.classList.toggle('active');
}