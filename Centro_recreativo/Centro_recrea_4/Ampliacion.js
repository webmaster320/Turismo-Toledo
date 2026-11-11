var imagen = document.querySelectorAll("#cabaña_imag");
var opaco = document.querySelector(".fondo_imagen");
var cerrar_img = document.querySelector(".cerrar_imagen");
var amplia_img = document.querySelector(".imagen_amplia");

imagen.forEach(foto => {
    foto.addEventListener('click', (event) =>{
        var clickeado = event.target.getAttribute('src');

        amplia_img.src = clickeado;
        opaco.style.visibility = "visible";
        cerrar_img.style.visibility = "visible";
        amplia_img.style.visibility = "visible";
    });
});

function cerrar_amplia (){
    opaco.style.visibility = "hidden";
    cerrar_img.style.visibility = "hidden";
    amplia_img.style.visibility = "hidden";
}