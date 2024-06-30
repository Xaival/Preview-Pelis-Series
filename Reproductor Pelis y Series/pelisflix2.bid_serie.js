// Nombre serie
let Titulo=document.querySelector("h1.Title").textContent;
// Capitulo lista
let ListURL=document.querySelector(".navepi .list").getAttribute('href');
// Capitulo anterior
let PrevURL=document.querySelector(".navepi .prev");
if (PrevURL){PrevURL=PrevURL.getAttribute("href");}
else {PrevURL=""}
// Capitulo siguiente
let NextURL=document.querySelector(".navepi .next");
if (NextURL){NextURL=NextURL.getAttribute("href");}
else {NextURL=""}


// Arrays para almacenar las URLs y los idiomas
var tabsWeb = [];
var tabsLeng = [];

// Recorrer los botones
document.querySelectorAll(".TPost .optns-bx button").forEach(function(button) {
// Obtener el texto del idioma del botón actual
var language = button.querySelector("span").textContent.replace("Idioma", "");

// Asignar el valor del idioma según el texto obtenido
switch (language) {
	case "CASTELLANO": language = "Castellano"; break;
	case "LATINO": language = "Latino"; break;
	case "SUBTITULADO": language = "Subtitulado"; break;
	default: language=language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();;
}

// Obtener todos los elementos de URL dentro del botón actual
var urlElements = button.querySelectorAll("[data-url]");

// Recorrer los elementos de URL y extraer la URL de cada uno
urlElements.forEach(function(urlElement) {
	// Decodificar la URL codificada en Base64
	var decodedURL = atob(urlElement.getAttribute("data-url"));
	// Verificar si se encontró una coincidencia en la expresión regular
	var matches = decodedURL.match(/url=(.*)/);

	// Verificar si la URL contiene "iframe"
	if (decodedURL.includes("iframe")) {
		// Extraer la URL adicional de la URL codificada en porcentaje
		var decodedURL = decodedURL.match(/url=(.*)/);

		if (decodedURL && decodedURL.length > 1) {
			decodedURL = decodeURIComponent(decodedURL[1]);
		}
	}
	// Agregar la URL decodificada al array de URLs
	tabsWeb.push(decodedURL);
	// Agregar el idioma al array de idiomas
	tabsLeng.push(language);
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