function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    url=document.getElementById("url");
    url.addEventListener("click", cambiaurl, false);
}

function cambiaurl(){
    zonadatos.innerHTML="Estas en la pagina 2";
    window.history.pushState(null, null, "pagina2.html");
}

window.addEventListener("load", comenzar, false);