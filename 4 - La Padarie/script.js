
let card = [
    {title: 'Pessoas na fila', id: 'peopleQueue', icone:'image/Icon.svg', class:'colorB'}, 
    {title: 'Pães vendidos', id: 'breadSend', icone:'image/Group 1.svg', class:'colorB'}, 
    {title: "Entrada", id: 'enter', icone:'image/Group 2.svg', class:'colorW'}
];

let areaCard = document.getElementById('totalTransactions');

card.forEach((cards) => {
    areaCard.innerHTML += 
    ` <div id = "card" class = "${cards.class}">
        <div id = "tCard">
            <p>${cards.title}</p>
            <img src="${cards.icone}" alt="">
        </div>
        <p class = "pCard" id = "${cards.id}"></p>
    </div>
    `
});


let client = [
    {name: 'Milena Limoeiro', breat: '4', price:'2,00', id:''},

]


function openModal () {
    document.getElementById('bkModal').style.top = "0";
    document.getElementById('body').style.overflow = "hidden";
};

function closeModal (){
    document.getElementById('bkModal').style.top = "-100%"
    document.getElementById('body').style.overflow = "auto";
};

fila()

function addClient (){
    let name = document.getElementById('clientName').value;
    let bread = parseFloat(document.getElementById('breadNumber').value);
    id = client.length;
    client.push({name: name, breat: bread, price: bread/2, id:id});
    closeModal();
    fila()  
 
}


function fila () {
    let totalBread = 0;
    let areaClient = document.getElementById('queue');
    
    areaClient.innerHTML = `
    <a id = "add" onclick="openModal()"><h3>+ Adicionar pessoa a fila</h3></a>`
    
    client.forEach((data) => {

        totalBread += parseInt(data.breat)
        areaClient.innerHTML +=
    `
    <div id = "client">
        <div id = "info">
            <h3>${data.name}</h3>
            <div id = "clientT">
                <p><span>Total de pães:</span>${data.breat}</p>
                <p><span>Total a pagar:</span>R$${data.price}</p>
            </div>
        </div>      
        <img src="image/Icon (1).svg" alt="" id ="remove" onclick ="removeClient()">
    </div>          
    `
    let people = client.length
    document.getElementById('peopleQueue').innerHTML = people;
    document.getElementById('breadSend').innerHTML = totalBread;
    document.getElementById('enter').innerHTML = `R$ ${totalBread/2}`;
    });
}


function removeClient(id){
    client.splice(id, 1)
    fila()
}