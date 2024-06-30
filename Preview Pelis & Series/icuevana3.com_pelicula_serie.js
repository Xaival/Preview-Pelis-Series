let text=document.querySelector("#Blog1 > div.post .cv-obj ~ script:first-of-type").textContent;
let embedMatches = text.match(/embed: "([^"]+)"/g);
let captionMatches = text.match(/caption: "([^"]+)"/g);

// Array de webs
let tabsWeb = [];
// Array de idiomas
let tabsLeng = [];
// Guardar valores en arrays
if (embedMatches && embedMatches.length > 0) {
	embedMatches.forEach(match => {const embedValue = match.match(/embed: "([^"]+)"/)[1]; tabsWeb.push(embedValue);});
}
if (captionMatches && captionMatches.length > 0) {
	captionMatches.forEach(match => {const captionValue = match.match(/caption: "([^"]+)"/)[1]; tabsLeng.push(captionValue);});
}
// Coregir texto de array de idiomas
for (let i = 0; i < tabsLeng.length; i++) {
	let value = tabsLeng[i].toLowerCase();
	if (value.includes('castellano')) {tabsLeng[i] = 'Castellano';}
	else if (value.includes('latino')) {tabsLeng[i] = 'Latino';}
	else if (value.includes('subtitulado')) {tabsLeng[i] = 'Subtitulado';}
	else {tabsLeng[i] = value.charAt(0).toUpperCase() + value.slice(1);}
}



if (document.querySelector('.episode-list')) { // Serie
	// Nombre serie
	let Titulo=document.querySelector("#append-post-player > div > div:nth-child(1) > h1").firstChild.textContent;
	// Capitulo lista
	let ListURL=document.querySelector("#append-post-player > div > div.blog-pager.episode-list > a.blog-nav.home").getAttribute('href');
	// Capitulo anterior
	let PrevURL=document.querySelector("#append-post-player > div > div.blog-pager.episode-list > a.blog-nav.prev").getAttribute('href');
	// Capitulo siguiente
	let NextURL=document.querySelector("#append-post-player > div > div.blog-pager.episode-list > a.blog-nav.next").getAttribute('href');


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



} else if (document.querySelector('#append-post-player .video')){ // Pelicula
	// Nombre pelicula
	let Titulo=document.querySelector("#append-post-themoviedb > article > header > h1").textContent;

	// Titulo - Nombre y episodio
	// "Jigokuraku 5"

	// tabsLeng - Array de idiomas
	// ['Subtitulado', 'Subtitulado', 'Subtitulado']

	// tabsWeb - Array de URLs de iframes
	// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

	mostrar_pelicula(Titulo, tabsLeng, tabsWeb);
}
