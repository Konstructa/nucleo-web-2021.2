document.getElementById("itembtn").addEventListener("click", myFunction);
document.getElementById("itembtn2").addEventListener("click", myFunction);
function myFunction() {
 
    const body = document.getElementById("body");
    body.classList.toggle('active');
}