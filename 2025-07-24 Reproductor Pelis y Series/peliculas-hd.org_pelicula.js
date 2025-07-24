// Nombre
let Titulo = document.querySelector('.container h2.my-4').innerHTML;
Titulo = Titulo.substring(0, Titulo.indexOf(' ('));


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

let regex = /var onlines = '([^']+)';/;
atob(atob(regex.exec(document.querySelector('body > script:nth-child(5)').innerHTML)[1])).split(',').forEach(function(iframe) {
	tabsWeb.push(iframe.split('|')[1]);
	tabsLeng.push("Idioma");
});



// Titulo - Nombre
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);
