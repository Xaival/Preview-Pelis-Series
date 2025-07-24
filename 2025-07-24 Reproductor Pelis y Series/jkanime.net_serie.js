
// Nombre serie
let Titulo=document.querySelector('.breadcrumb__links h1').textContent;
// Capitulo lista
let ListURL=document.querySelector('.container .icon_menu').parentNode.parentNode.getAttribute("href");
// Capitulo anterior
let PrevURL=document.querySelector('.container .arrow_left-up');
if (PrevURL){PrevURL=PrevURL.parentNode.parentNode.getAttribute("href");}
else{PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector('.container .btn-primary:not(.disabled) .arrow_right-down');
if (NextURL){NextURL=NextURL.parentNode.parentNode.getAttribute("href");}
else{NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Extraer las URLs de los iframes utilizando expresiones regulares
let regex = /src=['"](.*?)['"]/g;
let match;
while ((match = regex.exec(document.querySelector("body > script:nth-child(11)").innerHTML)) !== null) {
	let url = match[1];
	if (!url.startsWith('http')) {url = new URL(url, window.location.href).href;}
	tabsWeb.push(url);
	tabsLeng.push("Subtitulado");
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
