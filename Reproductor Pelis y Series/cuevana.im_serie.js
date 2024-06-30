// Nombre serie
let Titulo=document.querySelector('h1[class="title"]').textContent.replace("Ver", "").replace("Online", "").trim();
// Capitulo lista
let ListURL=document.querySelector("a.episode-home").getAttribute('href');
// Capitulo anterior
let PrevURL=document.querySelector('a[rel="prev"]');
if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
else {PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector('a[rel="next"]');
if (NextURL){NextURL=NextURL.getAttribute("href");}
else {NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll('ul.tabs-video ul li[role="presentation"]').forEach(frame => {
	tabsWeb.push(frame.getAttribute('data-server'));
	
	element=frame.textContent;
	if (element.includes('Español')) {tabsLeng.push("Castellano");}
	else if (element.includes('Latino')) {tabsLeng.push("Latino");}
	else if (element.includes('Subtitulado')) {tabsLeng.push("Subtitulado");}
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
