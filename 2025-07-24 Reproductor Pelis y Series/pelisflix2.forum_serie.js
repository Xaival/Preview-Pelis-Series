
// Nombre serie
let Titulo=document.querySelector('.Description p strong').textContent.replace("Ver ", "").replace(" Online", "");
// Capitulo lista
let ListURL=document.querySelector('.navepi.tagcloud .prev.list').getAttribute("href");
// Capitulo anterior
let PrevURL=document.querySelector('.navepi.tagcloud a[class="prev"]');
if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
else{PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector('.navepi.tagcloud .next');
if (NextURL){NextURL=NextURL.getAttribute("href");}
else{NextURL=""}


// Array de idiomas
let tabsLeng = [];
// Array de webs
let tabsWeb = [];

// Recorrer elementos
document.querySelectorAll('.TPost .Container .drpdn button').forEach(function(elemento) {
    // Idioma
	let language=elemento.querySelector('span').textContent;
    
    elemento.querySelectorAll('li > div').forEach(function(elemento) {
        // Añadir enlace
        tabsWeb.push(atob(elemento.getAttribute("data-url")));
        
        // Asignar el valor del idioma según el texto obtenido
        if (language.includes('LATINO')) {tabsLeng.push("Latino");}
        else if (language.includes('CASTELLANO')) {tabsLeng.push("Castellano");}
        else if (language.includes('SUBTITULADO')) {tabsLeng.push("Subtitulado");}
        else {tabsLeng.push(elemento);}
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
