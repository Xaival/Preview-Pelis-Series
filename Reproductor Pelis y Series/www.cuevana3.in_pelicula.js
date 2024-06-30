// Nombre
let Titulo=document.querySelector("h1.Title").textContent;


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

document.querySelectorAll(".tab_language_movie .open_submenu li").forEach(frame => {
	tabsWeb.push(frame.getAttribute('data-video'));
});
document.querySelectorAll(".tab_language_movie .open_submenu li .cdtr span").forEach(element => {
	element=element.textContent;
	if (element.includes('Español')) {tabsLeng.push("Castellano");}
	else if (element.includes('Latino')) {tabsLeng.push("Latino");}
	else if (element.includes('Subtitulado')) {tabsLeng.push("Subtitulado");}
	else {tabsLeng.push(element);}
});


// Titulo - Nombre
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);