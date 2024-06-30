// Nombre serie
let Titulo=document.querySelector("head > title").textContent.substr(0, document.querySelector("head > title").textContent.length-14);


// Array de idiomas
let tabsLeng = ["Idioma"];
// Array de webs
let tabsWeb = [document.querySelector(".tab_container iframe").getAttribute('src')];



// Titulo - Nombre y episodio
// "Jigokuraku 5"

// tabsLeng - Array de idiomas
// ['Subtitulado', 'Subtitulado', 'Subtitulado']

// tabsWeb - Array de URLs de iframes
// ['https://mega.nz/#!Qb0V2LwC!YQMzfmihDgKN7lxDmu9P_yU3Npp-w-Y4DLcUxDu_muQ', 'https://www.yourupload.com/embed/7KFS2NGSh2C3', 'https://embedsb.com/e/wwp7gmckxf9s.html']

mostrar_pelicula(Titulo, tabsLeng, tabsWeb);