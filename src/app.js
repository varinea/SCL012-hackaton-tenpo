
const root = document.getElementById("root");
const btnFeedback = document.getElementById("btnFeedback");
const h1Header = document.getElementById("h1Header");
const btnClient = document.getElementById("btnClient");

const feedback = () => {
  window.location.hash = '/feedback';
  h1Header.innerHTML = `Feedback`
  root.innerHTML = `
  <button class="buttons" id="feedbackForm"><i class="fas fa-file-alt"></i><strong> Formulario Feedback</strong></button>
  <button class="buttons" id="feedbackState"><i class="fas fa-search"></i><strong> Estado Feedback</strong></button>
  `
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.addEventListener("click", form);

}

const form = () => {
  window.location.hash = '/feedbackForm';
  h1Header.innerHTML = `Formulario Feedback`
  root.innerHTML = `<div class="s12">
  <p>Información Personal</p>

  <div class="progress">
    <div class="indeterminate"></div>
  </div>

    <div class="seccion">
       <textarea class="textOne" placeholder="Nombre"></textarea>
       <textarea class="textOne" placeholder="Apellido"></textarea>
       <textarea class="textOne" placeholder="Rut" ></textarea>
       <textarea class="textOne" placeholder="E-mail" ></textarea>
       <textarea class="textOne" placeholder="Telefono Contacto"></textarea>   
       <button class="btn" id="btnContinue">Continuar</button>   
    </div>
  </div>`


  const btnContinue = document.getElementById("btnContinue");
  btnContinue.addEventListener("click", formTwo);
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


// //Modal Trigger 
// <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

// //Modal Structure
// <div id="modal1" class="modal modal-fixed-footer">
//   <div class="modal-content">
//     <h4>Modal Header</h4>
//     <p>A bunch of text</p>
//   </div>
//   <div class="modal-footer">
//     <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
//   </div>
// </div>

















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

btnFeedback.addEventListener("click", feedback);
btnClient.addEventListener("click", clientAtention);