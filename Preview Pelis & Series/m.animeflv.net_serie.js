// Nombre serie
let Titulo=document.querySelector("#AnimeFlv h1.Title-Episode").textContent;
// Capitulo lista
let ListURL=document.querySelector("#AnimeFlv a.List").getAttribute('href');
// Capitulo anterior
let PrevURL=document.querySelector("#AnimeFlv a.Prev").getAttribute('href');
// Capitulo siguiente
let NextURL=document.querySelector("#AnimeFlv a.Next").getAttribute('href');


// Lista 
const videosJSON = JSON.parse(Array.from(document.querySelectorAll('#AnimeFlv > script')).find(script => script.textContent.includes('var videos')).textContent.match(/var videos = (.+?);/)[1]);
// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Recorremos todas las claves del objeto videosJSON
for (const key in videosJSON) {
if (videosJSON.hasOwnProperty(key)) {
	// Recorremos los objetos de la lista de videosJSON para el idioma actual
	for (const video of videosJSON[key]) {
	// Agregamos el idioma actual al array de tabsLeng
	switch (key) {
		case "LAT": tabsLeng.push("Latino"); break;
		case "SUB": tabsLeng.push("Subtitulado"); break;
		// Agregar más casos según corresponda
		default: tabsLeng.push(key);
	}
	// Agregamos la URL actual al array de tabsWeb
	tabsWeb.push(video.url || video.code);
	}
}
}





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
