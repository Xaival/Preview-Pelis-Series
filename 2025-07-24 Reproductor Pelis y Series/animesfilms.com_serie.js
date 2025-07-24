// Ejecutar al cargar la pagina
window.onload = function () {
	// Nombre serie
	let Titulo=document.querySelector('.Body h1.Title').textContent;
	// Capitulo lista
	let ListURL=document.querySelector(".CapNv .fa-th-list").getAttribute('href');
	// Capitulo anterior
	let PrevURL=document.querySelector(".CapNv .fa-chevron-left");
	if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
	else {PrevURL=""}
	// Capitulo siguiente
	let NextURL=document.querySelector(".CapNv .fa-chevron-right");
	if (NextURL){NextURL=NextURL.getAttribute("href");}
	else {NextURL=""}

	
	// Array de idiomas
	let tabsLeng = [];
	// Array de webs
	let tabsWeb = [];

	// Extraer las URLs utilizando expresiones regulares
	var regex = /src='([^']+)'/g;
	var match;
	while ((match = regex.exec(document.querySelector('.CapiTcn script').innerHTML)) !== null) {
		tabsWeb.push(match[1]);
		tabsLeng.push("Idioma");
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
}