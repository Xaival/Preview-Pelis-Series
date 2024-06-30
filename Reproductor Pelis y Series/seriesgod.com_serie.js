// Nombre serie
let Titulo = document.title.replace('Episodio ', '').replace(' Temporada ', 'x').replace('Ver ', '');
let indiceFin = Titulo.indexOf(' Online');
if (indiceFin !== -1) {Titulo = Titulo.substring(0, indiceFin);}
// Capitulo lista
let ListURL=document.querySelector(".justify-content-start > .text-center:nth-last-child(2) a").getAttribute('href');
// Capitulo anterior
let PrevURL=document.querySelector(".justify-content-start > .text-center:nth-last-child(3) a");
if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
else {PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector(".justify-content-start > .text-center:nth-last-child(1) a");
if (NextURL){NextURL=NextURL.getAttribute("href");}
else {NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Recorrer idiomas
document.querySelectorAll('form.dwnload-form option').forEach(function(elemento) {	
	
	if (elemento.textContent.includes('Latino')) {Leng="Latino";}
	else if (elemento.textContent.includes('Subitulado')) {Leng="Subtitulado";}
	else if (elemento.textContent.includes('Español')) {Leng="Castellano";}
	else {Leng=elemento.textContent;}

	document.querySelectorAll(".bg-servers a.lg_"+elemento.getAttribute("value")).forEach(function(elementor) {
		let url=atob(elementor.getAttribute("data-src"));
		if (!url.startsWith('http')) {url = new URL(url, window.location.href).href;}
		tabsWeb.push(url);

		tabsLeng.push(Leng);
	});
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
