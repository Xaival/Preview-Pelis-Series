// Nombre serie
let Titulo=document.querySelector('.serie-video-informacion h3').textContent.replace('\n          ', ' ');
// Capitulo lista
let ListURL="";
// Capitulo anterior y siguiente
let PrevURL="";
let NextURL="";
document.querySelector('.controles-episodios').querySelectorAll('a').forEach(function(enlace) {
  if (enlace.textContent.includes('Anterior')) {
    PrevURL = enlace.getAttribute('href');
  } else if (enlace.textContent.includes('Siguiente')) {
    NextURL = enlace.getAttribute('href');
  }
});

// Array de idiomas
let tabsLeng = ["Idioma"];
// Array de webs
let tabsWeb = [document.querySelector(".serie-video-informacion iframe").getAttribute('src')];









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
