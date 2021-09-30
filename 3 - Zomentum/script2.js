document.getElementById('nav').innerHTML =
`
<div id = "header">
    <a href = "#header" class = "logo"><img src="images/logo.svg" alt=""></a>
    <button id = "itembtn" ><img src="images/menu.svg" alt=""></button>
    <button id = "itembtn2" ><img src="images/fechar.svg" alt=""></button>
</div>
<ul id = "menu">
    <div id = "altura">
        <li class = "item"><a href = "#features">Features</a></li>
        <li id = "vamo2"class = "item"><a href = "#services">Services</a></li>
        <li class = "item"><a href = "#">Contact</a></li>
        <li class = "item" id = "somebtn"><a href = "#"><button>Get a demo</button></a></li>
        <li id = "vamo" class = "item"><a href = "#">Get a demo</a></li>
    </div>
</ul>`;


document.getElementById('home').innerHTML =
`
<div id = "homeText">
    <h1>Find the right partners to fuel your business growth</h1>
    <p>Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</p>
</div>
<div id = "homeImg">
    <img src="images/PartnerHeroImageLeft.svg" alt="">
    <button id = "register">Register today</button>
    <img src="images/PartnerHeroImageRight.svg" alt="">
</div>`;

let features = [
    {img:'images/icon1.svg', text:'Be a part of the only  All-In-One platform for IT'},
    {img:'images/icon2.svg', text:'Come closer to finding your next customer'},
    {img:'images/icon3.svg', text:'Grow your business with a single click'}
]

let areaFeat = document.getElementById('feats');

features.forEach((featss) => {
    areaFeat.innerHTML +=
    `
    <div class = "feat">
        <img src="${featss.img}" alt="">
        <p class = "frase">${featss.text}</p>
    </div>
    `
});


let services = [
    {
        titulo:'Your channel program on steroids', 
        descricao:'Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.',
        img: 'images/figure1.svg',
        id:'reverse'
    },
    {
        titulo:'Become the vendor everyone wants to buy from', 
        descricao:'Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!',
        img: 'images/figure2.svg'
    },
    {
        titulo:'It’s like having Your best Salesman on autopilot', 
        descricao:'Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.',
        img: 'images/figure3.svg',
        id: 'reverse'
    },
    {
        titulo:'Track your channel performance', 
        descricao:'Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.',
        img: 'images/figure4.svg'
    }
]


let areaServices = document.getElementById('services');

services.forEach((serv) => {
    areaServices.innerHTML += 
`
<div class = "secServ" id = "${serv.id}">
    <img src="${serv.img}" alt="" >
    <div class = "serv">
        <h3>${serv.titulo}</h3>
        <p>${serv.descricao}</p>
        <div id = "a">
            <p>Signup now</p>
            <img src="images/arrow.svg" alt="">
        </div>  
    </div>
</div>`
})


document.getElementById('footer').innerHTML =
`<div class="infos">
    <h5>Product</h5>
    <p>Features</p>
    <p>Pricing</p>
    <p>Integrations</p>
    <p>Product</p>
</div>
<div class="infos">
    <h5>Company</h5>
    <p>About us</p>
    <p>Contact us</p>
    <p>Submit a ticket</p>
    <p>Privacy policy</p>
    <p>Terms & conditions</p>
</div>
<div class="infos">
    <h5>Guides</h5>
    <p>MSP</p>
    <p>MSP Sales</p>
</div>
<div class="infos">
    <h5>Contact Us</h5>
    <p>Adress</p>
</div>`


let year = new Date().getFullYear();
document.getElementById('pfoo').innerHTML = `© 2020-${year} Pactora Inc. All rights reserved.`



document.getElementById("itembtn").addEventListener("click", myFunction);
document.getElementById("itembtn2").addEventListener("click", myFunction);
function myFunction() {
    const body = document.getElementById("body");
    body.classList.toggle('active');
}
