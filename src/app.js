document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
});  
const root = document.getElementById("root");
const btnFeedback = document.getElementById("btnFeedback");
const btnQuestions = document.getElementById("btnQuestions");
const h1Header = document.getElementById("h1Header");
const btnClient = document.getElementById("btnClient");


const feedback = () => {
  window.location.hash = '/feedback';
  h1Header.innerHTML=`Reclamos y Sugerencias`
  root.innerHTML=`
  <div class="cajaF">
  <img class="img" src="./img/nota.jpg">
  <div class="text">
  <p>Cuéntanos si tienes un reclamo o sugerencia.</p>
  <button class="btn" id="feedbackForm"><strong>Ir al Formulario</strong></button>
  </div>
  </div>
  <div class="cajaF">
  <img class="img" src="./img/lupa.jpg">
  <div class="text">
  <p>Revisa el estado de tu reclamo o sugerencia</p>
  <button class="btn" id="feedbackState"><strong> Revisar Estado</strong></button>
  </div>
  </div>
  
  `
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.addEventListener("click", formTwo);

  const feedbackState = document.getElementById("feedbackState");
  feedbackState.addEventListener("click", state);
}


const state = () => {
  h1Header.innerHTML=`<div class="cheader">
  <i class="far fa-check-circle"></i>
  <i class="fas fa-file-alt"></i>
  <i class="fas fa-lightbulb"></i>
  <i class="far fa-comment-alt"></i>
  </div>
  <div class="dheader">
  <p>Envío</p>
  <p>Recepción</p>
  <p>Solución</p>
  <p>Respuesta</p></div>`
  root.innerHTML=`<div class="col s12 divGrande">
   <div class="containerone">
    <p>Estado del Caso #56478</p>
   <div class="divider"></div>
   <p>Fecha de inicio  17/05/2020</p>
   <p>Fecha de termino  22/05/2020</p>
   <p>Estado : Solicitud enviada</p>
   <p>Mensaje respuesta :  - - -</p>
   </div>
   
    <div class="section">
    <p>Historial</p>
    <button class="hi" id="hola1">Caso  # 12478</button>
    <button class="hi" id="hola">Caso  # 08746</button>
    <button class="hi" id="hola">Caso  # 00998</button>
    </div>
    </div>
  </div>`
  const case1 = document.getElementById("hola1");
  case1.addEventListener("click", cambiaEstado);
}

const cambiaEstado = () => {
  h1Header.innerHTML=`<div class="cheader">
  <i class="far fa-check-circle"></i>
  <i class="fas fa-file-alt"></i>
  <i class="fas fa-lightbulb"></i>
  <i class="far fa-comment-alt"></i>
  </div>
  <div class="dheader">
  <p>Envío</p>
  <p>Recepción</p>
  <p>Solución</p>
  <p>Respuesta</p></div>`
  root.innerHTML=`<div class="col s12">
   <div class="containerone">
    <p>Estado del Caso #12478</p>
   <div class="divider"></div>
   <p>Fecha de inicio  09/05/2020</p>
   <p>Fecha de termino  15/05/2020</p>
   <p>Estado : Solicitud Resuelta</p>
   <p>Mensaje respuesta :  Su caso ha sido resuelto</p>
   </div>

    <div class="section">
    <p>Historial</p>
    <button class="hi" id="hola">Caso  # 08746</button>
    <button class="hi" id="hola">Caso  # 00998</button>
    </div>
    </div>
  </div>`
}

const formTwo = () => {
  h1Header.innerHTML = `Formulario Feedback`
  root.innerHTML = `
  <div class="containerTarjet">
  <p class="infoClass">Información del Caso</p>
  <div class="progress">
  <div class="indeterminate"></div>
</div>
  <select class="browser-default">
    <option value="" disabled selected>Selecciona una opción</option>
    <option value="1">Pago de cuentas</option>
    <option value="2">Recargas de servicio</option>
    <option value="3">Atención al Cliente</option>
    <option value="4">Retiro de dinero</option>
    <option value="5">Estado de cuenta</option>
    <option value="6">Funcionamiento app</option>
    <option value="7">Otro</option>
  </select>
  <textarea class="case" placeholder="Descripción del Caso"></textarea>
  <div>
    <input class="file" type="file" 
          accept=".jpg, .jpeg, .png"/>
  </div>
 
    <button class="btn">Enviar</button>
  </div>
  </div>`
}

const clientAtention = () => {
  window.location.hash = '/clientAttention';
  h1Header.innerHTML = `Atención al Cliente`
  root.innerHTML = `
  <div class="caja">
  <img class="img" src="./img/mensaje.jpg">
  <div class="text">
  <h5>Te ayudamos</h5>
  <a href="https://wa.me/56958048564" class="btn"><i class="fab fa-whatsapp"></i> WHATSAPP SOPORTE</a>
  <p><strong>Horario de Atención: <strong>Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p></div>
  </div>
  <div class="caja">
  <img class="img" src="./img/fono.jpg">
  <div class="text">
  <h5>¿Tienes otra duda?</h5>
  <p>Llámanos al <a href="tel:6003600355"> 600 360 0355</a></p>
  <p><strong>Horario de Atención: <strong>Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p></div>
  </div>  
  `
}

const formulario = () => {
  h1Header.innerHTML = `Preguntas Frecuentes`
  root.innerHTML = `
  <div class="containerPF">

  <div class="containerImg">
  <a id="questions"> <img class="imgFeedback" src="./img/img1.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img2.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img3.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img4.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img5.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img6.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img7.png"></a>
  <a id="questions"> <img class="imgFeedback" src="./img/img8.png"></a>
  </div>
  </div>`

  const questions = document.getElementById("questions");
  questions.addEventListener("click", formQuestionsOne); 
 
}

const formQuestionsOne = () => {
  h1Header.innerHTML = `Preguntas Frecuentes`
  root.innerHTML = `
  <div class="containerPF">
  <img class="imgFeedback" src="./img/ten01.png">

  <div class="containerImg">
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten02.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten03.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten04.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten05.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten06.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten07.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten08.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten09.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten10.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten11.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten12.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten13.png"></a>
  <a id="questionsTwo"><img class="imgFeedback" src="./img/ten14.png"></a>
  </div>
  </div>`

  const questionsTwo = document.getElementById("questionsTwo");
  questionsTwo.addEventListener("click", formQuestionsTwo); 
}

const formQuestionsTwo = () => {
  h1Header.innerHTML = `Preguntas Frecuentes`
  root.innerHTML = `
  <div class="containerPF">
  

  <div class="containerImg">
  <a id="questions"><img class="imgFeedback" src="./img/ten02.png"></a>

  </div>
  </div>`

  const questions = document.getElementById("questions");
  questions.addEventListener("click", formTwo); 
 
}

btnFeedback.addEventListener("click", feedback);
btnClient.addEventListener("click", clientAtention);
btnQuestions.addEventListener("click", formulario);
