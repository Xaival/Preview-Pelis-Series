// Nombre serie
let Titulo=document.querySelector('.card-body h1').textContent;
// Buscar el que contenga 
let ListURL="";
let PrevURL="";
let NextURL="";
document.querySelectorAll('.card-body a.btn.btn-primary.btn-block').forEach(function(elemento) {
	if (elemento.innerHTML.includes('Capitulo Anterior')) {PrevURL=elemento.getAttribute("href");} // Capitulo anterior
	else if (elemento.innerHTML.includes('Todos los capitulos')) {ListURL=elemento.getAttribute("href");} // Capitulo lista
	else if (elemento.innerHTML.includes('Capitulo Siguiente')) {NextURL=elemento.getAttribute("href");} // Capitulo siguiente
});

// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Extraer las URLs de los iframes utilizando expresiones regulares
document.querySelectorAll('#link_url span').forEach(function(elemento) {
	let url=elemento.getAttribute("url");
	if (!url.startsWith('http')) {url = new URL(url, window.location.href).href;}
	tabsWeb.push(url);
	tabsLeng.push("Idioma");
});




// Titulo - Nombre y episodio
// "Jigokuraku 5"

// ListURL - URL donde estan todos los capitulos
// "https://m.animeflv.net/anime/jigokuraku"

// PrevURL - URL capitulo anterior
// "https://m.animeflv.net/ver/jigokuraku-3"

// NextURL - Siguiente
// "https://m.animeflv.net/ver/jigokuraku-4"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_serie(Titulo, ListURL, PrevURL, NextURL, tabsLeng, tabsWeb);
