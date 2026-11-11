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



let cambios = 0;
var root_style = getComputedStyle(document.documentElement);

var col_azuloscuro = "rgb(8, 52, 139)";
var col_azulrey = "rgb(0, 93, 202)";
var col_azulnormal = "rgb(2, 78, 170)";
var col_azulclaro = "rgb(10, 122, 255)";
var col_negroclarito = "rgb(33, 33, 33)";
var col_blanco = "rgb(255, 255, 255)";
var col_negroclaro = "rgb(24, 24, 24)";
var col_blancooscuro = "rgb(228, 228, 228)";
var col_negro = "rgb(0, 0, 0)";
var col_gris = "rgb(128, 128, 128)";
var col_azuloscuro_max = "rgb(9, 67, 181)";
var col_blancooscuro_min = "rgb(247, 247, 247)";
var col_grisoscuro_max = "rgb(54, 54, 54)";
var col_grisoscuro = "rgb(66, 66, 66)";
var col_blancooscuro_max = "rgb(216, 216, 216)";
var col_azuloscuro_ult = "rgb(0, 49, 105)";
var col_negroclarito_normal = "rgb(36, 36, 36)";
var col_blancooscuro_normal = "rgb(238, 238, 238)";
var col_blanco_gris = "rgb(251, 251, 251)";
var col_negrooscuro = "rgb(20, 20, 20)";
var col_blancooscuro_min_sec = "rgb(248, 248, 248)";
var col_negroclaro_normal = "rgb(35, 35, 35)"


function cambiar_contraste() {
    if (cambios == 0){
        document.documentElement.style.setProperty('--color-azul-rey', col_azuloscuro);
        document.documentElement.style.setProperty('--color-azul-claro', col_azulnormal);
        document.documentElement.style.setProperty('--color-blanco', col_negroclarito);
        document.documentElement.style.setProperty('--color-blanco-oscuro', col_negroclaro);
        document.documentElement.style.setProperty('--variacion-color-azul-rey', col_azulclaro);
        document.documentElement.style.setProperty('--color-negro', col_blanco);
        document.documentElement.style.setProperty('--color-gris', col_negro);
        document.documentElement.style.setProperty('--variacion-color-blanco-oscuro-min', col_negroclaro);
        document.documentElement.style.setProperty('--variacion-color-gris-oscuro-max', col_blanco);
        document.documentElement.style.setProperty('--color-azul-oscuro', col_azulclaro);
        document.documentElement.style.setProperty('--variacion-sec-color-azul-rey', col_blanco);
        document.documentElement.style.setProperty('--color-azul-oscuro-max', col_negroclarito);
        document.documentElement.style.setProperty('--color-negro-gris', col_blanco);
        document.documentElement.style.setProperty('--color-blanco-oscuro-sec', col_negroclarito_normal);
        document.documentElement.style.setProperty('--color-blanco-gris', col_negrooscuro);
        document.documentElement.style.setProperty('--variacion-color-blanco-oscuro-min-sec', col_negroclaro_normal);
        document.documentElement.style.setProperty('--color-gris-oscuro', col_blanco);
        document.documentElement.style.setProperty('--variante-foot-color-blanco-oscuro', col_negro);

        cambios++;
    }
    else{
        document.documentElement.style.setProperty('--color-azul-rey', col_azulrey);
        document.documentElement.style.setProperty('--color-azul-claro', col_azulclaro);
        document.documentElement.style.setProperty('--color-blanco', col_blanco);
        document.documentElement.style.setProperty('--color-blanco-oscuro', col_blancooscuro);
        document.documentElement.style.setProperty('--variacion-color-azul-rey', col_azulrey);
        document.documentElement.style.setProperty('--color-negro', col_negro);
        document.documentElement.style.setProperty('--color-gris', col_gris);
        document.documentElement.style.setProperty('--variacion-color-blanco-oscuro-min', col_blancooscuro_min);
        document.documentElement.style.setProperty('--variacion-color-gris-oscuro-max', col_grisoscuro_max);
        document.documentElement.style.setProperty('--color-azul-oscuro', col_azuloscuro);
        document.documentElement.style.setProperty('--variacion-sec-color-azul-rey', col_azulrey);
        document.documentElement.style.setProperty('--color-azul-oscuro-max', col_azuloscuro_ult);
        document.documentElement.style.setProperty('--color-negro-gris', col_negroclarito_normal);
        document.documentElement.style.setProperty('--color-blanco-oscuro-sec', col_blancooscuro_normal);
        document.documentElement.style.setProperty('--color-blanco-gris', col_blanco_gris);
        document.documentElement.style.setProperty('--variacion-color-blanco-oscuro-min-sec', col_blancooscuro_min_sec);
        document.documentElement.style.setProperty('--color-gris-oscuro', col_grisoscuro);
        document.documentElement.style.setProperty('--variante-foot-color-blanco-oscuro', col_blancooscuro_max);

        cambios--;
    }
}


