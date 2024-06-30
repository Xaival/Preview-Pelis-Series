// Nombre
let Titulo=document.querySelector('h1.Title').textContent;


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Recorrer elementos
document.querySelectorAll('.TPost .Container .drpdn button').forEach(function(elemento) {
    // Idioma
	let language=elemento.querySelector('span').textContent;
    
    elemento.querySelectorAll('li > div').forEach(function(elemento) {
        // Añadir enlace
        tabsWeb.push(atob(elemento.getAttribute("data-url")));
        
        // Asignar el valor del idioma según el texto obtenido
        if (language.includes('LATINO')) {tabsLeng.push("Latino");}
        else if (language.includes('CASTELLANO')) {tabsLeng.push("Castellano");}
        else if (language.includes('SUBTITULADO')) {tabsLeng.push("Subtitulado");}
        else {tabsLeng.push(elemento);}
    });
});





// Titulo - Nombre
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);
