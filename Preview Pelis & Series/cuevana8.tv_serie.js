// Nombre serie
let Titulo=document.querySelector('h1.title span').textContent.trim();
// Controles
let PrevURL="";
let NextURL="";
let ListURL="";
document.querySelectorAll('.episode-controls li').forEach(function(elemento) {
	elemento=elemento.querySelector('a');	
	if (elemento){
		if (elemento.innerHTML.includes('Anterior')) {PrevURL=elemento.getAttribute("href");} // Capitulo anterior
		else if (elemento.innerHTML.includes('Siguiente')) {NextURL=elemento.getAttribute("href");} // Capitulo siguiente
		else {ListURL=elemento.getAttribute("href");} // Capitulo lista
	}
});


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

json=JSON.parse(document.querySelector('#__NEXT_DATA__').innerHTML).props.pageProps.episode.players;
for (const language in json) {
    if (Object.prototype.hasOwnProperty.call(json, language)) {
        const results = json[language];
        results.forEach((result) => {
			tabsWeb.push(result.result);
			
			// Asignar el valor del idioma según el texto obtenido
			if (language.includes('latino')) {tabsLeng.push("Latino");}
			else if (language.includes('spanish')) {tabsLeng.push("Castellano");}
			else if (language.includes('english')) {tabsLeng.push("Subtitulado");}
			else {tabsLeng.push(language);}
        });
    }
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

