// Nombre
let Titulo=document.querySelector('.mvic-desc h3[itemprop="name"]').textContent;


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll("#player2 iframe").forEach(function(elemento) {
	let url=elemento.getAttribute("src");
	if (!url.startsWith('http')) {url = new URL(url, window.location.href).href;}
	tabsWeb.push(url);
	tabsLeng.push("Idioma");
});





// Titulo - Nombre
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);
