// Ejecutar al cargar la pagina
window.onload = function () {
	// Tiempo de espera
	setTimeout(function() {
		// Array de webs
		let tabsWeb = [document.querySelector('.embed-responsive iframe').getAttribute("src")];
		// Array de idiomas
		let tabsLeng = ["Idioma"];


		// Nombre serie
		let Titulo=document.querySelector(".alert-success strong").textContent;
		// Capitulo lista
		let ListURL="";
		// Capitulo anterior
		let PrevURL=document.querySelector("#botonera > a:nth-child(2)");
		if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
		else {PrevURL=""}
		// Capitulo siguiente
		let NextURL=document.querySelector("#botonera > a:nth-child(4)");
		if (NextURL){NextURL=NextURL.getAttribute("href");}
		else {NextURL=""}


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