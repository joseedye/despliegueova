
var seccion = document.getElementById("videoactividad");
var texto = document.getElementById('texto');
var video = document.getElementById('videomother');

//iniciar página
window.onload = function () {
    cargarnombre();
    ocultar(2);
    ocultar(3);
    ocultar(4);
    videootexto(12);
}

//cargar nombre
function cargarnombre (){

    var nombre = localStorage.nombre;
    var apellido = localStorage.apellido;
    document.getElementById("nombres").innerText = nombre +" "+apellido;
}

function videootexto(ultima) {

    switch (ultima) {

        case 12: {aparecevideo(); aparecetexto(); ponervideo("8jYM6BKYh5g",12); ponertexto(); break; }

        case 13: {ocultartexto(); aparecevideo();  ponervideo("UY7u2tlf8cQ",13);  break;  }

        case 14: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",14); break; }

        case 15: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",15); break;  }

        case 16: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",16); break;  }

        case 22: {aparecevideo(); aparecetexto(); ponervideo("8jYM6BKYh5g",22); ponertexto(); break; }

        case 23: {ocultartexto(); aparecevideo();  ponervideo("qedHi1tqNBg",23);  break;  }

        case 24: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",24); break; }

        case 25: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",25); break;  }

        case 26: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",26); break;  }

        case 27: {ocultartexto(); aparecevideo();  ponervideo("qedHi1tqNBg",27);  break;  }

        case 28: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",28); break; }

        case 29: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",29); break;  }

        case 291: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",291); break;  }

        case 292: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",292); break;  }

    }

}

function ocultarvideo() {
    if (!video.classList.contains('ocultar')) {
        video.className += 'ocultar';
    }
}
function ocultartexto() {
    if (!texto.classList.contains('ocultar')) {
        texto.className += 'ocultar';
        }
}
function aparecevideo() {
    if (video.classList.contains('ocultar')) {
        video.classList.remove('ocultar');
    }  }
function aparecetexto() {
    if (texto.classList.contains('ocultar')) {
        texto.classList.remove('ocultar');
    }
}

function salir() {
    localStorage.token = undefined;
    localStorage.email = undefined;
    seccion.innerText = 'cree una cuenta para ver las actividades';
    window.location.href = '/';
}

//funcionalidades acordeon

var activo = 12;
function activar(id) {

    if (id === activo) { return }
    var elemento = document.getElementById(id + '');
    elemento.classList.remove("curriculum-item-link--curriculum-item--KX9MD");
    elemento.className = "curriculum-item-link--curriculum-item--KX9MD curriculum-item-link--is-current--31BPo";
    videootexto(id);
    desactivar(id);
}

function desactivar(activ) {

    var elemento = document.getElementById(activo + '');
    elemento.classList.remove("curriculum-item-link--is-current--31BPo");
    activo = activ;

}

var contenido = [[], [12, 13, 14, 15, 16], [22, 23, 24, 25, 26, 27, 28, 29, 291, 292], [32, 33, 34], [42, 43, 44, 45]];

function ocultar(id) {
    var oculta = false;
    if (document.getElementById(id + '2').classList.contains('ocultar')) { oculta = true }

    var elemento;

    for (let index = 0; index < contenido[id].length; index++) {
        elemento = document.getElementById(contenido[id][index] + '');
        oculta === true ? elemento.classList.remove("ocultar") : elemento.className += ' ocultar';


    }
    oculta === false ? document.getElementById('svg' + id).classList.remove('rotar') : document.getElementById('svg' + id).className = 'rotar';
}

//poner texto
function ponertexto(){
    var titul = 'Acerca de este ova';
    var parrafo = ' <p>La computación en la nube cada vez toma más fuerza en casi todas las plataformas tecnológicas de la actualidad, en muchos sistemas de la información hacemos uso'+
        ' de la computación en la nube y probablemente no nos hemos dado cuenta. Las grandes industrias están a la vanguardia de la computación en la nube, Amazon Web Service (AWS) Wittig, M., & Wittig, A. (2018). Amazon web services in'+
        'action. Simon and Schuster., Microsoft Azure, Oracle Cloud y Google Cloud, son un ejemplo de estas empresas que ofrecen servicios informáticos en la nube en todo el mundo. </p>';
    var descripcio = 'Descripción';
    var titulodom = document.getElementById('titulo').innerText = titul;
    var parrafo1 = document.getElementById('parrafo1').innerHTML = parrafo;
    var descripcion1 = document.getElementById('descripcion').innerText = descripcio;

}

  // create youtube player
var videoreproducido = "";
  function ponervideo(url,id)  {
      player = null;
      videoreproducido=id;
document.getElementById("videoactividadexterno").innerHTML = '<div id="videoactividad"></div>';

      player = new YT.Player("videoactividad", {
          width: "840",
          height: "400",
          videoId: url,
          events: {
              // onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
          },
      });
  }


  // autoplay video
  //function onPlayerReady(event) {
  //event.target.playVideo();
  //}

  // when video ends
  function onPlayerStateChange(event) {
    if (event.data === 0) {
        actividadvista(videoreproducido);
    }
  }


  //actividades vistas

  
  function actividadvista(id){
    var visto = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"'+
    'class="bi bi-check-square-fill" viewBox="0 0 16 16"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>'+
    '</svg>';
document.getElementById('visto'+id).innerHTML = visto;
  }


