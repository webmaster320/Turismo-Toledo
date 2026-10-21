var cuerpo_pa = document.getElementById("cuerpo");
var encabezado_pa = document.getElementById("Encabezado_Pagina");
var tamaño_encab = encabezado_pa.offsetHeight;
let posicion_inicial = window.scrollY;
let valor = 0;
let suma_valor = 5.3;
var limite_esconderse = tamaño_encab - (tamaño_encab * 2);

window.onscroll = function ()
{
    let posicion_actualizada = window.scrollY;

    if(posicion_actualizada > tamaño_encab)
    {
        encabezado_pa.style.position = "fixed";
    }
    else if(posicion_actualizada == 0)
    {
        encabezado_pa.style.position = "static";
    }

    if(posicion_inicial < posicion_actualizada)
    {
        valor -= suma_valor;

        if(valor <= limite_esconderse)
        {
            valor = limite_esconderse;
        }
    }
    else if(posicion_inicial > posicion_actualizada)
    {
        valor += suma_valor;
        
        if(valor >= 0)
        {
            valor = 0;
        }
    }

    if(valor !== limite_esconderse && posicion_actualizada + window.innerHeight >= document.body.offsetHeight)
    {
        valor = limite_esconderse;
    }
    else if(valor !== 0 && posicion_actualizada <= 0)
    {
        valor = 0;
    }

    encabezado_pa.style.top = valor + "px";
    posicion_inicial = posicion_actualizada;
}