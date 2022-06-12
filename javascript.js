/* JavaScript*/
/* Para funções que escondem o HTML*/
function htmlShowHome(){
    var x = document.getElementById("htmlHome");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function htmlShowVisit(){
    var x = document.getElementById("htmlVisit");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function htmlShowTickets(){
    var x = document.getElementById("htmlTickets");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function htmlShowContact(){
    var x = document.getElementById("htmlContact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function htmlShowMail(){
    var x = document.getElementById("htmlMail");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/* Para enviar informação de mail e redirecionar  */
function sendForm(){
    var d = new Date();
    alert("HELLO!\nToday " + d.toDateString() + " you will send a formulaire asking for something. We will keep yout contact for further instructions.")
    window.location("https://mp-c.github.io/WebProjetoEfolioA/home.html");     
}

/* para voltar à pagina anterior */
function retur(){
    window.history.back();
}

/*Para reenviar para o link do repositório */
function reposLink(){
    window.location.assign("https://github.com/MP-C/WebProjetoEfolioB/releases/tag/v1.0");
}

/*para fazer download do projeto caso necesario */
function DownloadWebFiles() {
    function download(fileUrl, fileName){
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
    }
    download("https://github.com/MP-C/WebProjetoEfolioB/releases/tag/v2.0", "EFolioB_MarioCarvalho_web");
}

/*Função quer permite activar a localização, que é uma funcionalidade, mas fica a faltar por enquanto integrar com o mapa */
var x = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    console.log(position);
    console.log(x);
}
