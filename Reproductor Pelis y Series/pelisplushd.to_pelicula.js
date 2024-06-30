// Nombre
let Titulo=document.querySelector('.container-fluid h1').textContent;


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll('li[role="presentation"]').forEach(function(elemento) {
	let url=elemento.getAttribute("data-url");
	if (!url.startsWith('http')) {url = new URL(url, window.location.href).href;}
	tabsWeb.push(url);

	// Asignar el valor del idioma según el texto obtenido
	let language=elemento.getAttribute("data-name");
	if (language.includes('Latino')) {tabsLeng.push("Latino");}
	else if (language.includes('Español')) {tabsLeng.push("Castellano");}
	else if (language.includes('Subtitulado')) {tabsLeng.push("Subtitulado");}
	else {tabsLeng.push(elemento);}
});





// Titulo - Nombre
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);
