// Ejecutar al cargar la pagina
window.onload = function () {
	// Tiempo de espera
	setTimeout(function() {
    // Nombre serie
    let Titulo=document.querySelector(".Episode h1.Title").textContent;
    // Capitulo lista
    let ListURL=document.querySelector(".episodes_filters > a.caps_s").getAttribute('href');
    // Capitulo anterior
    let PrevURL=document.querySelector(".episodes_filters > a > .fa-chevron-left");
    if(PrevURL!=null){PrevURL=PrevURL.parentNode.getAttribute('href');}
    else {PrevURL="";}
    // Capitulo siguiente
    let NextURL=document.querySelector(".episodes_filters > a > .fa-chevron-right");
    if(NextURL!=null){NextURL=NextURL.parentNode.getAttribute('href');}
    else {NextURL="";}

    
    // Array de idiomas
    let tabsLeng = [];
    // Array de webs
    let tabsWeb = [];

    document.querySelectorAll('.TPlayer > .TPlayerTb').forEach(frame => {
      let html = frame.innerHTML;
      let urlStartIndex = html.indexOf('src="') + 5; // índice de inicio de la URL
      let urlEndIndex = html.indexOf('"', urlStartIndex); // índice de fin de la URL
      let url = html.substring(urlStartIndex, urlEndIndex); // extraer la URL
      tabsWeb.push(url);
    });
    document.querySelectorAll('.TPlayerNv > .STPb').forEach(element => {
      element=element.innerText
      if (element === 'ESP') {tabsLeng.push("Castellano");}
      else if (element === 'LAT') {tabsLeng.push("Latino");}
      else if (element === 'ESPSUB') {tabsLeng.push("Subtitulado");}
      else if (element === 'ENG') {tabsLeng.push("Ingles");}
      else {tabsLeng.push(element);}      
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

	}, 1000);
}