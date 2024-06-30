// Ejecutar al cargar la pagina
window.onload = function () {
	// Tiempo de espera
	setTimeout(function() {
		// Nombre serie
		let Titulo=document.querySelector("#info > h1").textContent;
		// Capitulo lista
		let ListURL=document.querySelector("div.pag_episodes > div:nth-child(2) > a").getAttribute('href');
		// Capitulo anterior
		let PrevURL=document.querySelector("div.pag_episodes > div:nth-child(1) > a").getAttribute('href');
		// Capitulo siguiente
		let NextURL=document.querySelector("div.pag_episodes > div:nth-child(3) > a").getAttribute('href');


		// Array de idiomas
		let tabsLeng = ["Idioma"];
		// Array de webs
		let tabsWeb = [document.querySelector("#dooplay_player_response iframe.metaframe.rptss").getAttribute('src')];		



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