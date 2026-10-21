var contras_te =  document.getElementById("con_tras_te");
var opcionesrele_vo1 = document.getElementById("opcio_nes_rele_vo_1");

contras_te.addEventListener('mouseenter', () => {
    opcionesrele_vo1.style.display = "block";
});

contras_te.addEventListener('mouseleave', () => {
    opcionesrele_vo1.style.display = "none";
});

var aumentartama_ño =  document.getElementById("aument_ta_ma_ño");
var opcionesrele_vo2 = document.getElementById("opcio_nes_rele_vo_2");

aumentartama_ño.addEventListener('mouseenter', () => {
    opcionesrele_vo2.style.display = "block";
});

aumentartama_ño.addEventListener('mouseleave', () => {
    opcionesrele_vo2.style.display = "none";
});

var disminuirtama_ño =  document.getElementById("dismin_ta_ma_ño");
var opcionesrele_vo3 = document.getElementById("opcio_nes_rele_vo_3");

disminuirtama_ño.addEventListener('mouseenter', () => {
    opcionesrele_vo3.style.display = "block";
});

disminuirtama_ño.addEventListener('mouseleave', () => {
    opcionesrele_vo3.style.display = "none";
});

var centrorele_vo =  document.getElementById("cen_tro_re_le_vo");
var opcionesrele_vo4 = document.getElementById("opcio_nes_rele_vo_4");

centrorele_vo.addEventListener('mouseenter', () => {
    opcionesrele_vo4.style.display = "block";
});

centrorele_vo.addEventListener('mouseleave', () => {
    opcionesrele_vo4.style.display = "none";
});




var accesibili_dad = document.getElementById("acce_si_bi_li_dad");
let altocentro_accesib = 35.5, arriba_padding = 18.03, alto_accesib = 247, ancho_accesib = 97;

var tamañocua_dro = document.querySelectorAll(".tamaño_cuadro");
let alto_tamaño = 52;
  
var fondrele_vo = document.querySelectorAll(".fond_relevo");
let alto_fondr = 50; ancho_fondr = 50;

var opcionrele_vo = document.querySelectorAll(".opciones_relevo");
let altocentro_opcionrel = -39.5;

var letra = document.body;
let tamañole_tra = 13.5;

var control_tamaño = 3, control_alto_accesib = 15;
let conteo = 2, aument_conteo = 3, dismin_conteo = 0;


function aumentar_tamaño() {
if (conteo < aument_conteo)
{
    accesibili_dad.style.width = (ancho_accesib += control_tamaño) + "px";
    accesibili_dad.style.height = (alto_accesib += control_alto_accesib) + "px";
    accesibili_dad.style.paddingTop = (arriba_padding += control_tamaño) + "px";
    accesibili_dad.style.top = (altocentro_accesib -= 0.5) + "vh";


    tamañocua_dro.forEach(cuadro => {
        cuadro.style.height = (alto_tamaño += control_tamaño) + "px";
        alto_tamaño -= control_tamaño;
    });
    alto_tamaño += control_tamaño;

    fondrele_vo.forEach(fond_cuadro => {
        fond_cuadro.style.width = (ancho_fondr += control_tamaño) + "px";
        ancho_fondr -= control_tamaño;
        fond_cuadro.style.height = (alto_fondr += control_tamaño) + "px";
        alto_fondr -= control_tamaño;
    });
    ancho_fondr += control_tamaño;
    alto_fondr += control_tamaño;

    opcionrele_vo.forEach(opcion_cambio => {
        opcion_cambio.style.marginTop = (altocentro_opcionrel -= 2) + "px";
        altocentro_opcionrel += 2;
    });
    altocentro_opcionrel -= 2;

    letra.style.fontSize = (tamañole_tra += 0.5) + "px";

    conteo++;
}
}

function reducir_tamaño() {
if (conteo > dismin_conteo)
{
    accesibili_dad.style.width = (ancho_accesib -= control_tamaño) + "px";
    accesibili_dad.style.height = (alto_accesib -= control_alto_accesib) + "px";
    accesibili_dad.style.paddingTop = (arriba_padding -= control_tamaño) + "px";
    accesibili_dad.style.top = (altocentro_accesib += 0.5) + "vh";

    tamañocua_dro.forEach(cuadro => {
        cuadro.style.height = (alto_tamaño -= control_tamaño) + "px";
        alto_tamaño += control_tamaño;
    });
    alto_tamaño -= control_tamaño;

    fondrele_vo.forEach(fond_cuadro => {    
        fond_cuadro.style.width = (ancho_fondr -= control_tamaño) + "px";
        ancho_fondr += control_tamaño;
        fond_cuadro.style.height = (alto_fondr -= control_tamaño) + "px";
        alto_fondr += control_tamaño;
    });
    ancho_fondr -= control_tamaño;
    alto_fondr -= control_tamaño;

    opcionrele_vo.forEach(opcion_cambio => {
        opcion_cambio.style.marginTop = (altocentro_opcionrel += 2) + "px";
        altocentro_opcionrel -= 2;
    });
    altocentro_opcionrel += 2;

    letra.style.fontSize = (tamañole_tra -= 0.5) + "px";

    conteo--;
}
}
