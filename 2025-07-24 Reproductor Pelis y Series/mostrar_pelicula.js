
function mostrar_pelicula(Titulo, tabsLeng, tabsWeb) {

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




  // Actualizar contenido de la pagina
  document.querySelector("html").innerHTML = `<head>
    <title>`+Titulo+`</title>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 2 20 20'%3E %3Cpath d='M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,15.5 L10,8.5 C10,8.09 10.47,7.85 10.8,8.1 L15.47,11.6 C15.74,11.8 15.74,12.2 15.47,12.4 L10.8,15.9 C10.47,16.15 10,15.91 10,15.5 Z' fill='red'%3E%3C/path%3E%3C/svg%3E" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <style>
      * {margin: 0; padding: 0; box-sizing: border-box;}
      body {
        background-color: black;
        width: 100vw;
        height: 100vh;
        color: white;
        font-family: Arial;
      }

      /* Links y botones */
      a, .toggle {
        width: 40px;
        height: 40px;
        border: 1px solid rgba(48, 52, 54, 0.5);
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
        transition: background-color 0.2s ease;
      }
      a.disable {cursor: default;	color: red;}
      a.disable:hover  {background-color: transparent;	transform: scale(1);}
      a:hover, .toggle:hover {background-color: #202020; transform: scale(1.25)}
      a:active, .toggle:active {background-color: #202020; transform: scale(0.9)}


      /* Toggle (botón menú) */
      body .toggle {
        background-color: #101010;
        opacity: .75;
        cursor: pointer;
        position: absolute;
        top: 5px;
        left: 50%;
        display: none;
        transform: translateX(-50%);
      }
      body .toggle:hover {
        opacity: 1;
        transform: translateX(-50%) scale(1.25);
      }
      body .toggle:active {
        opacity: 1;
        transform: translateX(-50%) scale(0.9);
      }

      /* Header */
      #header {
        background-color: #101010;
        width: 100%;
        height: 50px;
        padding: 5px 15px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }
      #header > * {
        width: 1%;
        min-width: 130px;
        display: flex;
        align-items: center;
        gap: 5px;
      }


      /* Titulo */
      #header .titulo {flex: 1; justify-content: flex-start;}
      #header .titulo p {overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}


      /* Capitulos */
      #header .capitulos {justify-content: center;}

      /* Reproductores */
      #header .reproductores {justify-content: flex-end;}
      #header .reproductores #desplegable  {
        background-color: #111;
        padding: 10px 15px;
        border: 1px solid rgba(48, 52, 54, 0.5);
        border-radius: 5px;
        outline: 0;
        cursor: pointer;
        color: white;
        transition: background-color 0.2s ease;
      }
      #header .reproductores #desplegable:hover,
      #header .reproductores #desplegable:focus {background-color: #202020;}


      /* Iframe */
      iframe {width: 100%; height: calc(100% - 55px);}


      /*
      Poner menu desplegable
      Altura es menor de 10cm real o ancho de la pantalla menor de 500px
      */
      @media (max-height: 10cm), (max-width: 500px) {
        #header {display: none;}
        #header.active {
          width: 500px;
          max-width: calc(100% - 20px);
          height: auto;
          padding: 15px;
          border-radius: 10px;
          position: absolute;
          top: 55px;
          left: 50%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          transform: translateX(-50%);
        }
        body .toggle {display: flex;}

        #header > * {width: 100%; justify-content: center;}
        #header .titulo {
          width: min(300px, 100%);
          min-width: 66%;
          max-width: 100%;
          order: 1;
        }
        #header .capitulos {order: 3; width: 140px;}
        #header .reproductores {order: 2; max-width: 140px;}

        iframe {height: 100%;}
      }
    </style>
  </head>
  <body>

  <div class="toggle" onclick="document.getElementById('header').classList.toggle('active');"><i class="fa fa-bars"></i></div>

  <div id="header">
    <div class="titulo"><a href="/" title="Inicio"><i class="fa fa-house"></i></a><p>`+Titulo+`</p></div>

    <div class="reproductores"><select id="desplegable">`+AppsOption+`</select></div>
  </div>

  <iframe id="FrameVideo" allowfullscreen frameborder="0" src=""></iframe>
  </body>`;


  // Funcion para poner url en iframe
  function frameUpdate() {document.getElementById("FrameVideo").setAttribute("src", document.getElementById("desplegable").options[document.getElementById('desplegable').selectedIndex].value)}
  frameUpdate();

  // Evento al cambiar el select
  document.getElementById("desplegable").addEventListener("change", frameUpdate);
}
