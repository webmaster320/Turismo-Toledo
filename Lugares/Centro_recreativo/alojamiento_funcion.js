let apartado_0 = 0, apartado_1 = 1, apartado_2 = 2;
let numeroima_gen = 0;
let f = 1, errorapartima_gen = 0;

for( let apartcrea_cion = 0; apartcrea_cion < 10; apartcrea_cion++ )
{
    for( let r = 0; r < f; r++ )
    {
        var aparta_do = document.createElement('div');
        var apartima_gen = document.createElement('img');
        var apartpiefon_do = document.createElement('div');
        var apartinforma_cion = document.createElement('div');
        var apartdecora_cion = document.createElement('div');
        var aparttitu_lo = document.createElement('h2');

        let apartfinal_imagen = 'hospedajes_imagenes/foto_n' + apartcrea_cion + '.jpg'
        apartima_gen.setAttribute('src', apartfinal_imagen);

        apartima_gen.onerror = function () 
        {
            r-= 1;
            errorapartima_gen = 1;
            console.log(errorapartima_gen);
        }
    }

    if(errorapartima_gen == 1)
    {
        apartcrea_cion += 1000;
    }
    else{
        if(apartcrea_cion == apartado_0)
        {
            aparta_do.classList.add("apartado");
            apartado_0 = apartado_0 + 3;
        }
        else if(apartcrea_cion == apartado_1)
        {
            aparta_do.classList.add("apartado");
            apartado_1 = apartado_1 + 3;
        }
        else if(apartcrea_cion == apartado_2)
        {
            aparta_do.classList.add("apartado");
            apartado_2 = apartado_2 + 3;
        }

        apartima_gen.classList.add("apartado_imagen");
        apartpiefon_do.classList.add("apartado_pie_fondo");
        apartinforma_cion.classList.add("apartado_informacion");
        apartdecora_cion.classList.add("apartado_decoracion");
        aparttitu_lo.innerText = "Hey sesesestata";
        aparttitu_lo.classList.add("apartado_titulo");

        document.body.appendChild(aparta_do);
        aparta_do.appendChild(apartima_gen);
        aparta_do.appendChild(apartpiefon_do);
        aparta_do.appendChild(apartinforma_cion);
        apartinforma_cion.appendChild(apartdecora_cion);
        apartinforma_cion.appendChild(aparttitu_lo);
    }

    console.log(errorapartima_gen);   
}


