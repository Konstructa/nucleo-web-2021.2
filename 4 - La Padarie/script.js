
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


document.getElementById('bkModal').innerHTML =
`<div class = "modal">
<p><span>Adicionar pessoa a fila</span></p>
<div id = "inputs">
    <input type="text" placeholder="Nome completo do cliente" id = "clientName" />
    <input type="number" placeholder="Total de pães:" id = "breadNumber" />
    
</div>
<div id = "buttonDiv">
    <button id = "send" onclick= "addClient()" type="submit"> Enviar</button>
    <button id = "cancel" onclick="closeModal()"> Cancelar</button>
</div>
</div>`



let client = [
    {name: 'Milena Limoeiro', breat: '4', price:'2', id:''},

]


function openModal () {
    document.getElementById('bkModal').style.top = "0";
    document.getElementById('body').style.overflow = "hidden";
};

function closeModal () {
    document.getElementById('bkModal').style.top = "-100%"
    document.getElementById('body').style.overflow = "auto";
};

fila()

function addClient (){
    let name = document.getElementById('clientName').value;
    let bread = document.getElementById('breadNumber').value;

    if (name != "" & bread != "") {
        id = client.length;
        client.push({name: name, breat: bread, price: bread/2, id:id});
        closeModal();
        fila();
        document.getElementById('clientName').style.borderStyle = "hidden";
        document.getElementById('breadNumber').style.borderStyle = "hidden";
    } else {
        document.getElementById('clientName').style.borderStyle = "solid";
        document.getElementById('breadNumber').style.borderStyle = "solid";
    }

}


function fila () {
    let totalBread = 0;
    let areaClient = document.getElementById('clientes');
    
    areaClient.innerHTML = ""
    
    
    client.forEach((data) => {
        data.id = client.indexOf(data)
        totalBread += parseInt(data.breat)
        var dinheiro = (data.breat/2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        areaClient.innerHTML +=
    `
    <div id = "client">
        <div id = "info">
            <h3>${data.name}</h3>
            <div id = "clientT">
                <p><span>Total de pães:</span>${data.breat} pães</p>
                <p><span>Total a pagar:</span>${dinheiro}</p>
            </div>
        </div>      
        <img src="image/Icon (1).svg" alt="" id ="remove" onclick ="removeClient(${data.id})">
    </div>          
    `
    attElements(totalBread);
    });

    scrollQeue(id)
}

function attElements(totalBread) {
    document.getElementById('peopleQueue').innerHTML = client.length;
    document.getElementById('breadSend').innerHTML = totalBread;
    var dinheiro = (totalBread/2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById('enter').innerHTML = dinheiro;
    document.getElementById('clientName').value = ""
    document.getElementById('breadNumber').value = ""
}


function scrollQeue() {
    if (id >= 4) {
        document.getElementById('clientes').style.overflow = "auto"; 
    } else {
        document.getElementById('clientes').style.overflow = "hidden"; 
    }
}

function removeClient(id){
    client.splice(id, 1)
    fila()
    if (client.length == 0) {
        attElements(0)
    }
}

