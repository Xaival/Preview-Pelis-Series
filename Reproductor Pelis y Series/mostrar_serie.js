function mostrar_serie(Titulo, ListURL, PrevURL, NextURL, tabsLeng, tabsWeb) {

  // Categoria idioma y Listas iframe [[Esp, Esp, Lat, Lat], ["http1", "http2", "http3", "http4"]]
  let tabs = [tabsLeng, tabsWeb];
  let tabs_ord=[]; tabs_ord[0]=[]; tabs_ord[1]=[]; tabs_ord[2]=[]; tabs_ord[3]=[]; tabs_ord[4]=[];
  let AppsOption="";
  // Recorrer idiomas (Agrupar por idioma) [[[Esp, "http1"], [Esp, "http2"]], [[Lat, "http3"], [Lat, "http4"]]]
  for (let i=0; i<tabs[0].length; i++) {
    let idioma = tabs[0][i];
    let url = tabs[1][i].replace('embed: "', '').replace('"', '');
    if (idioma.includes("Castellano")) {tabs_ord[0].push(["Castellano", url]);}
    else if(idioma.includes("Latino")) {tabs_ord[1].push(["Latino", url]);}
    else if(idioma.includes("Subtitulado")) {tabs_ord[2].push(["Subtitulado", url]);}
    else if(idioma.includes("Ingles")) {tabs_ord[3].push(["Ingles", url]);}
    else {tabs_ord[4].push([idioma, url]);}
  }
  // Recorrer elementos
  for (let i=0; i<tabs_ord.length; i++) {
    let ListLengURL=tabs_ord[i];
    if (ListLengURL.length!=0){
      let Categoria=[]; Categoria[0]=[]; Categoria[1]=[]; Categoria[2]=[]; Categoria[3]=[]; Categoria[4]=[]; Categoria[5]=[]; Categoria[6]=[];
      // Recorrer servidores para ordenar
      for (let x=0; x<ListLengURL.length; x++) {
        let url = ListLengURL[x][1]; // Servidor
        if(url.includes("streamtape.com/v/")||url.includes("mega.nz/#")){} // En caso de error
        else if (url.includes("streamwish.to")){Categoria[0].push([url, "StreamWish"]);}
        else if (url.includes("hqq.tv")){Categoria[1].push([url, "Hqq.tv"]);}
        else if (url.includes("embedsb.com")||url.includes("sbembed.com")){Categoria[2].push([url, "StreamSB"]);}
        else if (url.includes("streamtape.com")){Categoria[3].push([url, "Streamtape"]);}
        else if (url.includes("waaw.tv")){Categoria[4].push([url, "Waaw.tv"]);}
        else if (url.includes("mega.nz")){Categoria[5].push([url, "Mega"]);}
        else {
          Nombre = url.substr(url.indexOf("//")+2).substr(0, url.substr(url.indexOf("//")+2).indexOf("/")).replace("www.","").replace(".com","")
          Categoria[6].push([url, Nombre.charAt(0).toUpperCase()+Nombre.slice(1)]);
        }
      }
      // Agurpar en unico Array
      URLs = Categoria[0].concat(Categoria[1]).concat(Categoria[2]).concat(Categoria[3]).concat(Categoria[4]).concat(Categoria[5]).concat(Categoria[6]); // Agurpar en unico Array
      // Idioma
      AppsOption+=`<optgroup label="`+ListLengURL[0][0]+`">`;
      // Crear option
      for (let x=0; x<URLs.length; x++) {AppsOption+=`<option value="`+URLs[x][0]+`">`+URLs[x][1]+`</option>`;}
      // Fin idioma
      AppsOption+=`</optgroup>`;
    }
  }

  // Si hay no hay acceso a lista de temporada
  let ListClass="";
  if (ListURL==""||ListURL=="#"){ListClass='class="disable"';}
  // Si hay no hay un anterior capitulo
  let PrevClass="";
  if (PrevURL==""||PrevURL=="#"){PrevClass='class="disable"';}
  // Si hay no hay un siguiente capitulo
  let NextClass="";
  if (NextURL==""||NextURL=="#"){NextClass='class="disable"';}



  // Actualizar contenido de la pagina
  document.querySelector("html").innerHTML = `<head>
  <title>`+Titulo+`</title>
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 2 20 20'%3E %3Cpath d='M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,15.5 L10,8.5 C10,8.09 10.47,7.85 10.8,8.1 L15.47,11.6 C15.74,11.8 15.74,12.2 15.47,12.4 L10.8,15.9 C10.47,16.15 10,15.91 10,15.5 Z' fill='red'%3E%3C/path%3E%3C/svg%3E" type="image/x-icon">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
  <style>*{margin:0;padding:0;box-sizing:border-box}body{background:#0a0a0a;color:white;font-family:Arial;min-height:100vh;display:flex;align-items:stretch;flex-direction:column;justify-content:space-between}body>:not(.header,.video,.footer){display:none!important}.header,.video,.footer{display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between}.header,.footer{flex-grow:1;max-height:50px}.video{flex-grow:2}.header{padding:15px;background-color:#101010}.header .titulo{font-size:1.1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:40px}.header .titulo a{font-size:1em;margin-right:20px;color:white}.header .titulo a:hover{opacity:.5}.header .header-right{display:flex;align-items:center;justify-content:space-between;gap:20px}.header .header-right #desplegable{background-color:#111;color:white;outline:0;border:1px solid rgba(48,52,54,0.5);padding:10px 15px;border-radius:5px;cursor:pointer;transition:background-color .1s ease;transition-delay:.02s}.header .header-right #desplegable:hover,.header .header-right #desplegable:focus-visible{background-color:#202020}.header .header-right #bottonFullscreen{font-size:1.5em;margin:0 10px;margin-top:5px;cursor:pointer}.header .header-right #bottonFullscreen:hover{opacity:.5}.video{background-color:black;position:relative}.video iframe{position:absolute;height:100%;width:100%}.footer{padding:0 15px}.footer a{background-color:#111;flex-grow:1;padding:15px;text-align:center;text-decoration:none;color:white;border:1px solid rgba(48,52,54,0.25);transition:background-color .1s ease;transition-delay:.02s}.footer a:hover{background-color:#202020}.footer a.disable,.footer a.disable i{color:red;pointer-events:none}.footer a:nth-child(1){border-radius:50px 0 0 50px}.footer a:nth-child(2){border-left:0;border-right:0}.footer a:nth-child(3){border-radius:0 50px 50px 0}@media only screen and (orientation:portrait){.footer{padding:0}.footer a{border-radius:0!important}}</style>
  </head>
  <body>
  <div class="header">
  <p class="titulo"><a href="/"><i class="fa fa-chevron-left"></i></a>`+Titulo+`</p>
  <div class="header-right">
  <select id="desplegable">`+AppsOption+`</select>
  <p id="bottonFullscreen"><i class="fa-solid fa-expand"></i>
  </div>
  </div>

  <div class="video">
  <iframe id="FrameVideo" frameborder="0" src=""></iframe>
  </div>

  <div class="footer">
  <a href="`+PrevURL+`" `+PrevClass+`><i class="fa fa-chevron-left"></i></a>
  <a href="`+ListURL+`" `+ListClass+`><i class="fa fa-list-dots"></i></a>
  <a href="`+NextURL+`" `+NextClass+`><i class="fa fa-chevron-right"></i></a>
  </div>
  </body>`;



  // Funcion para poner url en iframe
  function frameUpdate() {document.getElementById("FrameVideo").setAttribute("src", document.getElementById("desplegable").options[document.getElementById('desplegable').selectedIndex].value)}
  frameUpdate();

  // Evento al cambiar el select
  document.getElementById("desplegable").addEventListener("change", frameUpdate);


  // Funcion pantalla completa
  function Fullscreen() {
    /* Si no hay ningun elemento en pantalla completa*/
    if (document.fullscreenElement==null){
      /* Poner pantalla completa */
      if (document.documentElement.requestFullscreen) {document.documentElement.requestFullscreen();}
      else if (document.documentElement.webkitRequestFullscreen) {document.documentElement.webkitRequestFullscreen();}
      else if (elem.msRequestFullscreen) {document.documentElement.msRequestFullscreen();}

      /* Cambiar texto del boton */
      document.getElementById("bottonFullscreen").innerHTML='<i class="fa-solid fa-compress"></i>';
    }
    /* Si hay algun elemento en pantalla completa*/
    else{
      /* Quitar pantalla completa */
      if (document.exitFullscreen) {document.exitFullscreen();}
      else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();}
      else if (document.msExitFullscreen) {document.msExitFullscreen();}

      /* Cambiar texto del boton */
      document.getElementById("bottonFullscreen").innerHTML='<i class="fa-solid fa-expand"></i>';
    }
  }

  // Evento FullScreen
  document.getElementById("bottonFullscreen").addEventListener("click", Fullscreen);
}