
// Nombre serie
let Titulo=document.querySelector('.general-container .text h2').textContent;
// Capitulo lista
let ListURL=document.querySelector('.general-container .text a').getAttribute("href");
// Capitulo anterior
let PrevURL=document.querySelector('.nextprev .icon-cheveron-left');
if (PrevURL){PrevURL=PrevURL.parentNode.getAttribute("onclick").replaceAll("window.location.href = ","").replaceAll("'","");}
else{PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector('.nextprev .icon-cheveron-right');
if (NextURL){NextURL=NextURL.parentNode.getAttribute("onclick").replaceAll("window.location.href = ","").replaceAll("'","");}
else{NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll('.btns button.server').forEach(element => {	
	tabsWeb.push(element.getAttribute('newsrc'));
	tabsLeng.push("Subtitulado");
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
