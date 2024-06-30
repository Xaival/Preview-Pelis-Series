// Nombre serie
let Titulo=document.querySelector('h1.post-header__title').textContent;
// Capitulo lista
let ListURL=document.querySelector('a[data-title="Listado"]').getAttribute('href');
// Capitulo anterior
let PrevURL=document.querySelector('a[data-title="Anterior"]');
if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
else {PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector('a[data-title="Siguiente"]');
if (NextURL){NextURL=NextURL.getAttribute("href");}
else {NextURL=""}



let tabsLeng = []; // Array de idiomas
let tabsWeb = []; // Array de webs
let GetIdioms=[] // Array de idiomas equivalente a webs
let GetWebs=[] // Array de URL de las webs

// Extraer datos
function extractUrlsAndNames(url) {
	return fetch(url)
		.then(response => response.text())
		.then(data => {
			let options = JSON.parse(new DOMParser().parseFromString(data, 'text/html').querySelector('video-container').getAttribute('options'));
			let filteredUrls = options.map(option => /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(option.src) ? `https://spot.veronepiece.xyz/key/${option.src}`	: option.src);
			return filteredUrls;
	});
}

// Web actual
GetWebs.push(window.location.href);
if (Titulo.includes('Castellano')) {GetIdioms.push("Castellano");}
else if (Titulo.includes('Latino')) {GetIdioms.push("Latino");}
else if (Titulo.includes('Sub Español')) {GetIdioms.push("Subtitulado");}
else {GetIdioms.push("Idioma");}

// El resto
document.querySelectorAll(".languageOptions .languageList a").forEach(element => {
	GetWebs.push(element.getAttribute('href'));

	element=element.textContent
	if (element.includes('Castellano')) {GetIdioms.push("Castellano");}
	else if (element.includes('Latino')) {GetIdioms.push("Latino");}
	else if (element.includes('Sub Español')) {GetIdioms.push("Subtitulado");}
	else {GetIdioms.push("Idioma");}
});


const requests = GetWebs.map(url => extractUrlsAndNames(url));
  
Promise.all(requests)
.then(results => {

	results.forEach((result, i) => {
		const idioms = GetIdioms[i];
		result.forEach(url => {
			tabsLeng.push(idioms);
			tabsWeb.push(url);
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

})
.catch(error => {console.log('Error:', error);});
  