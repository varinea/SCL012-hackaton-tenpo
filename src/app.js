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
  root.innerHTML=`<div class="col s12">
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
  root.innerHTML=`<div class="col s12 divGrande">
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

  
  <div class="container section">
  
  <div id="idModal2" class="modal">
  <div class="modal-content">
    <h3>Hola soy el PUTO  modal</h3>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn modal-close" id="btnClose">Cerrar</a>
  </div>
</div>
</div>
  
        

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
 
  <button class="btn modal-trigger blue" data-target="idModal2" id="btnModal">Modal Botón</button>
  </div>


  </div>`
  // document.addEventListener('DOMContentLoaded', function() {
  //   M.AutoInit();
  // });  

//   const  modal = document.createElement('div');
//   const contentModal = `<div class="container section">
        
//   <button class="btn modal-trigger blue" data-target="idModal2" id="modalbtn">Modal Botón</button>
//   <div id="idModal2" class="modal">
//     <div class="modal-content">
//       <h3>Hola soy el modal</h3>
//     </div>
//     <div class="modal-footer">
//       <a href="" class="btn modal-close">Cerrar</a>
//     </div>
//   </div>
// </div>`;

// // modal.innerHTML=contentModal;
// root.innerHTML += contentModal;

// 
const btnModal = document.getElementById("btnModal");
btnModal.addEventListener('click', () => {
   document.getElementById('idModal2').style.display="block";
 console.log('yo sirvo');
})

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener('click', () => {
   document.getElementById('idModal2').style.display="none";
 console.log('yo sirvo');
})


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
