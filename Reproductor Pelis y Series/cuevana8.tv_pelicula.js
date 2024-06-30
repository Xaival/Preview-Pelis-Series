// Nombre
let Titulo = document.querySelector('h1.title span').textContent.replace('Película ', '').trim();


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

json=JSON.parse(document.querySelector('#__NEXT_DATA__').innerHTML).props.pageProps.post.players;
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



// Titulo - Nombre
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);
