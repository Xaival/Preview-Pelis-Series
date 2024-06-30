// Nombre serie
let Titulo=document.querySelector('.mvic-desc h3[itemprop="name"]').textContent;
// Capitulo lista
let ListURL=document.querySelector("ol.breadcrumb > li:nth-child(2) > a").getAttribute('href');
// Capitulo anterior
let PrevURL=document.querySelector("#bar-player a.bp-btn-previous");
if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
else {PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector("#bar-player a.bp-btn-next");
if (NextURL){NextURL=NextURL.getAttribute("href");}
else {NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll("#player2 iframe").forEach(function(elemento) {
	let url=elemento.getAttribute("src");
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

