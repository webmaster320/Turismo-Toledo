var accion_uno = document.querySelectorAll('.accion_1');
var acc_con_uno = document.querySelector('.accion_1');

var accion_dos = document.querySelectorAll('.accion_2');
var acc_con_dos = document.querySelector('.accion_2');


var pagina_an = document.querySelector(".pag_anterior");
var pagina_pos = document.querySelector(".pag_posterior");
var pagina_1 = document.querySelector(".pag_1");
var pagina_2 = document.querySelector(".pag_2");


function primera_parte(){
    accion_uno.forEach(acc_uno => {
        acc_uno.style.display = 'block';
    });

    accion_dos.forEach(acc_dos => {
        acc_dos.style.display = 'none';
    });

    pagina_an.style.visibility = "hidden";
    pagina_an.onclick = null;

    pagina_pos.style.visibility = "visible";
    pagina_pos.setAttribute("onclick", "segunda_parte()");

    if (acc_con_uno.style.display == 'block'){
        pagina_1.classList.replace("seleccion_color_2", "elegido");
        pagina_1.style.cursor = "default";
        pagina_1.onclick = null;
    }

    if (acc_con_dos.style.display == 'none'){
        pagina_2.classList.replace("elegido", "seleccion_color_1");
        pagina_2.style.cursor = "pointer";
        pagina_2.setAttribute("onclick", "segunda_parte()");
    }
}

function segunda_parte(){
    accion_uno.forEach(acc_uno => {
        acc_uno.style.display = 'none';
    });

    accion_dos.forEach(acc_dos => {
        acc_dos.style.display = 'block';
    });

    pagina_an.style.visibility = "visible";
    pagina_an.setAttribute("onclick", "primera_parte()");

    pagina_pos.style.visibility = "hidden";
    pagina_pos.onclick = null;

    if (acc_con_uno.style.display == 'none'){
        pagina_1.classList.replace("elegido", "seleccion_color_2");
        pagina_1.style.cursor = "pointer";
        pagina_1.setAttribute("onclick", "primera_parte()");
    }

    if (acc_con_dos.style.display == 'block'){
        pagina_2.classList.replace("seleccion_color_1", "elegido");
        pagina_2.style.cursor = "default";
        pagina_2.onclick = null;
    }
}