// Nombre serie
let Titulo = document.querySelector(".main h1.entry-title").textContent.slice(1, -1);
// Capitulo lista
let ListURL= document.querySelector("#breadcrumb > a.b-label").getAttribute('href');
// Capítulo anterior
let PrevURL = document.querySelector(".block-inner .prev-post-link").getAttribute('href');
// Capítulo siguiente
let NextURL = document.querySelector(".block-inner .next-post-link").getAttribute('href');


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll(".elDivDeSelecciones option").forEach(option => {
	tabsWeb.push(option.getAttribute('value'));
});

document.querySelectorAll(".elDivDeSelecciones option").forEach(option => {
	element=option.innerText
	if (element.includes('Audio Castellano')) {tabsLeng.push("Castellano");}
	else if (element.includes('Audio Latino')) {tabsLeng.push("Latino");}
	else if (element.includes('Subtitulado Español')) {tabsLeng.push("Subtitulado");}
	else if (element.includes('Ingles')) {tabsLeng.push("Ingles");}
	else {tabsLeng.push(element);}
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
