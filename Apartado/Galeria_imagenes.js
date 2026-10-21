var cabañ_imag = document.querySelectorAll('#cabaña_imag');
var bot_izquierdo = document.getElementById("boton_izquierdo");
var bot_derecho = document.getElementById("boton_derecho");
var espacio_movimiento = 24.75;
var superacion = 6;
var f = espacio_movimiento * superacion + 1;
var r = -48.5;
var l = -23.75;

bot_izquierdo.addEventListener( 'click', async () => 
{
    bot_izquierdo.disabled = true;

    cabañ_imag.forEach(ca_img => {
        ca_img.attributeStyleMap.set('margin-left', CSS.percent(ca_img.computedStyleMap().get('margin-left').value + espacio_movimiento));

        if(ca_img.computedStyleMap().get('margin-left').value > f)
        {
            ca_img.attributeStyleMap.set('margin-left', CSS.percent(ca_img.computedStyleMap().get('margin-left').value - (espacio_movimiento * 8) ));
        }
    });

    await new Promise(resolve => setTimeout(resolve, 400));

    cabañ_imag.forEach(ca_img => {
        if(ca_img.computedStyleMap().get('margin-left').value >= l && ca_img.computedStyleMap().get('margin-left').value <= 100)
        {
            ca_img.classList.add("z");
        }
        else{
            ca_img.classList.remove("z");
        }
    });

    await new Promise(resolve => setTimeout(resolve, 100));
  
    bot_izquierdo.disabled = false;

});


bot_derecho.addEventListener( 'click', async () => 
{
    bot_derecho.disabled = true;

    cabañ_imag.forEach(ca_img => {
        ca_img.attributeStyleMap.set('margin-left', CSS.percent(ca_img.computedStyleMap().get('margin-left').value - espacio_movimiento));

        if(ca_img.computedStyleMap().get('margin-left').value < r)
        {
            ca_img.attributeStyleMap.set('margin-left', CSS.percent(ca_img.computedStyleMap().get('margin-left').value + (espacio_movimiento * 8) ));
        }
    });

    await new Promise(resolve => setTimeout(resolve, 400));

    cabañ_imag.forEach(ca_img => {
        if(ca_img.computedStyleMap().get('margin-left').value >= l && ca_img.computedStyleMap().get('margin-left').value <= 100)
        {
            ca_img.classList.add("z");
        }
        else{
            ca_img.classList.remove("z");
        }
    });

    await new Promise(resolve => setTimeout(resolve, 100));
  
    bot_derecho.disabled = false;
});
