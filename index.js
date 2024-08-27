//Agregar el aside a cada div, que agregue un ASIDE a cada div
//Cambie el color de fondo de acuerdo al pokemon que se clickee
//En el aside, poner para escuchar un sonidito

function cambiarFondo(colorPrincipal,colorSecundario){
    if(document.documentElement.style.getPropertyValue('--color-principal') === colorPrincipal){
        document.documentElement.style.setProperty('--color-principal','white');
        document.documentElement.style.setProperty('--color-secundario','beige');
    }
    else {
        document.documentElement.style.setProperty('--color-principal',colorPrincipal);
        document.documentElement.style.setProperty('--color-secundario',colorSecundario);
    }
}

document.getElementById('pokebola1')
    .addEventListener("click",()=> 
        cambiarFondo('rgb(253,237,225)','#fe8d8d')
);

document.getElementById('pokebola2')
    .addEventListener("click",()=> 
        cambiarFondo("rgb(228,225,253)",'#a4a4f2')
);

document.getElementById('pokebola3')
    .addEventListener("click",()=> 
        cambiarFondo("rgb(140, 129, 199)",'rgb(231, 100, 163)')
);

document.getElementById('pokebola4')
    .addEventListener("click",()=> {
        cambiarFondo("rgb(248, 231, 145)",'rgb(104, 99, 99)');
    }
);

document.getElementById('pokebola5')
    .addEventListener("click",()=> 
        cambiarFondo("rgb(248, 149, 164)",'rgb(210, 113, 165)')
);





