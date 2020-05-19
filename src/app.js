
const root = document.getElementById("root");
const btnFeedback = document.getElementById("btnFeedback");
const btnQuestions = document.getElementById("btnQuestions");
const h1Header = document.getElementById("h1Header");
const btnClient = document.getElementById("btnClient");


const feedback = () => {
  window.location.hash = '/feedback';
  h1Header.innerHTML=`Reclamos y Sugerencias`
  root.innerHTML=`
  <button class="buttons" id="feedbackForm"><i class="fas fa-file-alt"></i><strong> Formulario</strong></button>
  <button class="buttons" id="feedbackState"><i class="fas fa-search"></i><strong> Estado</strong></button>
  `
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.addEventListener("click", formTwo);

  const feedbackState = document.getElementById("feedbackState");
  feedbackState.addEventListener("click", state);

}

const state = () => {
  h1Header.innerHTML=`Estado de Solicitud`
  root.innerHTML=`<div class="col s12">
   <div class="containerone">
    <p>Estado del Caso #56478</p>
   <div class="divider"></div>
   <p>Fecha de inicio  17/05/2020</p>
   <p>Fecha de termino  22/05/2020</p>
   <p>Estado : Solicitud enviada</p>
   <p>Mensaje respuesta :  - - -</p>
   </div>
   <p>Historial</p>
   <div class="col s12">
    <div class="section">
    <button class="hi" id="hola">Caso  # 12478</button>
    <button class="hi" id="hola">Caso  # 08746</button>
    <button class="hi" id="hola">Caso  # 00998</button>
    </div>
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
  <div>
    <button class="btn">Enviar</button>
  </div>
  </div>`
}

const clientAtention = () => {
  window.location.hash = '/clientAttention';
  h1Header.innerHTML = `Atención al Cliente`
  root.innerHTML = `
  <div class="caja">
  <img class="img" src="./img/mensaje.png">
  <div class="text">
  <h5>Te ayudamos</h5>
  <a href="https://wa.me/56958048564" class="btn"><i class="fab fa-whatsapp"></i> WHATSAPP SOPORTE</a>
  <p><strong>Horario de Atención: <strong>Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p></div>
  </div>
  <div class="caja">
  <img class="img" src="./img/fono.png">
  <div class="text">
  <h5>¿Tienes otra duda?</h5>
  <h6>Llámanos al 600 360 0355</h6>
  <p><strong>Horario de Atención: <strong>Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p></div>
  </div>  
  `
}

const formulario = () => {
  h1Header.innerHTML = `Preguntas Frecuentes`
  root.innerHTML = `
  <div class="containerPF">

  <div class="containerImg">
  <a id="questions" href=""  target="_blank"> <img class="imgFeedback" src="./img/img1.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img2.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img3.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img4.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img5.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img6.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img7.png"></a>
  <a href=""  target="_blank"> <img class="imgFeedback" src="./img/img8.png"></a>
  </div>

  </div>`
 
}


btnFeedback.addEventListener("click", feedback);
btnClient.addEventListener("click", clientAtention);
btnQuestions.addEventListener("click", formulario);