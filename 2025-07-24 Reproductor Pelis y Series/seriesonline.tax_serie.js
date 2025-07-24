// Nombre serie
let Titulo=document.querySelector('.speedbar > span:nth-last-child(3)').textContent.trim()+document.querySelector('.speedbar > span:nth-last-child(2)').textContent.trim().replace('Temporada', '')+document.querySelector('.speedbar > span:nth-last-child(1)').textContent.trim().replace('Capítulo ', 'x');
// Capitulo lista
let ListURL=document.querySelector('.speedbar > span:nth-last-child(3) a').getAttribute('href');
// Buscar el que contenga 
let PrevURL="";
let NextURL="";
document.querySelectorAll('a.col-xs-12.btn.btn-success.spa').forEach(function(elemento) {
	if (elemento.getAttribute("href")!=null){
		if (elemento.innerHTML.includes('Anterior')) {PrevURL=elemento.getAttribute("href");} // Capitulo anterior
		else if (elemento.innerHTML.includes('Siguiente')) {NextURL=elemento.getAttribute("href");} // Capitulo siguiente
	}
});



// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Extraer las URLs de los iframes utilizando expresiones regulares
document.querySelectorAll('li.streamer > div').forEach(function(elemento) {
	let url=elemento.getAttribute("data-url");
	if (!url.startsWith('http')) {url = new URL(url, window.location.href).href;}
	tabsWeb.push(url);

	// Asignar el valor del idioma según el texto obtenido
	let language=elemento.querySelector('img').getAttribute("src");
	if (language.includes('latino')) {tabsLeng.push("Latino");}
	else if (language.includes('de')) {tabsLeng.push("Castellano");}
	else {tabsLeng.push("Idioma");}
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
