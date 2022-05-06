function sendForm(){
    var d = new Date();
    alert("HELLO!\nToday " + d.toDateString() + " you will send a formulaire asking for something. We will keep yout contact for further instructions.")
    window.location("https://mp-c.github.io/WebProjetoEfolioA/home.html");     
    //window.open("file:///C:/Users/mpcrc/OneDrive/Documents/Eng%20Informatica/UaB/WebProjetoEfolioA/mail.html/", "_self");     
    //window.location.href('file:///C:/Users/mpcrc/OneDrive/Documents/Eng%20Informatica/UaB/WebProjetoEfolioA/mail.html/');
    //window.location.reload(true);
}

function retur(){
    window.history.back();
}

function reposLink(){
    window.location.assign("https://github.com/MP-C/WebProjetoEfolioA");
    //window.location.assign("https://github.com/MP-C/WebProjetoEfolioB/releases/tag/v1.0");
}


function darkModeButton() {
    var element = document.section;
    console.log("Dark mode element");
    element.buttonDark.toggle("dark-mode");
}

function DownloadWebFiles() {
    function download(fileUrl, fileName){
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
    }
    download("https://drive.google.com/drive/folders/1bWDt6dVxIbo3o1qKUN2Gc7TCcL6CdagH?usp=sharing", "EFolioB_MarioCarvalho_web");
}

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