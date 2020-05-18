const root = document.getElementById("root");
const btnFeedback = document.getElementById("btnFeedback");
const h1Header = document.getElementById("h1Header");
const btnClient = document.getElementById("btnClient");


const feedback = () => {
  window.location.hash = '/feedback';
  h1Header.innerHTML=`Feedback`
  root.innerHTML=`
  <button class="buttons" id="feedbackForm"><i class="fas fa-file-alt"></i><strong> Formulario Feedback</strong></button>
  <button class="buttons" id="feedbackState"><i class="fas fa-search"></i><strong> Estado Feedback</strong></button>
  `
  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.addEventListener("click", form);

}

const form = () => {
  window.location.hash = '/feedbackForm';
  h1Header.innerHTML=`Formulario Feedback`
  root.innerHTML=`<div class="col s12">
  <p>Información Personal</p>
   
    <div class="seccion">
    <textarea class="text" placeholder="Nombre"></textarea>
    <textarea class="text" placeholder="Apellido"></textarea>
    <textarea class="text" placeholder="Rut" ></textarea>
    <textarea class="text" placeholder="E-mail" ></textarea>
    <textarea class="text" placeholder="Telefono Contacto"></textarea>   
    <button class="btn">Continuar</button>   
   </div>
  </div>`
 

}



const clientAtention = () => {
  window.location.hash = '/clientAttention';
  h1Header.innerHTML=`Atención al Cliente`
  root.innerHTML=`<div class="caja">
  <img class="img" src="./img/mensaje.jpeg">
  <div class="text">
  <h5>Te ayudamos</h5>
  <a href="https://wa.me/56958048564" class="btn"><i class="fab fa-whatsapp"></i> WHATSAPP SOPORTE</a>
  <p><strong>Horario de Atención: <strong>Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p></div>
  </div>
  <div class="caja">
  <img class="img" src="./img/fono.jpg">
  <div class="text">
  <h5>¿Tienes otra duda?</h5>
  <h6>Llámanos al 600 360 0355</h6>
  <p><strong>Horario de Atención: <strong>Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p></div>
  </div>  
  `
}

btnFeedback.addEventListener("click", feedback);

btnClient.addEventListener("click", clientAtention);

