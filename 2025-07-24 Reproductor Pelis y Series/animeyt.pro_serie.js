
// Nombre serie
let Titulo=document.querySelector("div.title-section > h1.entry-title").textContent;
// Capitulo lista
let ListURL=document.querySelector('.naveps .nvs > a > i.fa-th-list').parentNode.getAttribute("href");
// Capitulo anterior
let PrevURL=document.querySelector('.naveps .nvs > a > i.fa-angle-left');
if (PrevURL){PrevURL=PrevURL.parentNode.getAttribute("href");}
else{PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector('.naveps .nvs > a > i.fa-angle-right');
if (NextURL){NextURL=NextURL.parentNode.getAttribute("href");}
else{NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Extraer las URLs de los iframes utilizando expresiones regulares
document.querySelectorAll('.video-nav .mobius select option:not([disabled="disabled"])').forEach(element => {
	let string = atob(element.getAttribute("value"));
	let match = string.match(/src=["']([^"']+)["']/);
	if (match) {
		tabsWeb.push(match[1]);
		tabsLeng.push("Idioma");
	}
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
