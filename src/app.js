const root = document.getElementById("root");
const boton = document.getElementById("btnFeedback");
const boton1 = document.getElementById("btn3Feedback");
const h1Header = document.getElementById("h1Header");
const estado =document.getElementById("estado");

const cambiaRoot = () => {
  h1Header.innerHTML=`Formulario Feedback`
  root.innerHTML=`<div class="col s12">
  <p>Información Personal</p>
   <div class="divider"></div>
    <div class="seccion">
    <textarea class="text" placeholder="Nombre"></textarea>
    <textarea class="text" placeholder="Apellido"></textarea>
    <textarea class="text" placeholder="Rut" ></textarea>
    <textarea class="text" placeholder="E-mail" ></textarea>
    <textarea class="text" placeholder="Telefono Contacto"></textarea>   
    <button type="button" height="42" width="42"><a class="waves-effect waves-light btn"><i class="material-icons left">Continuar</i></a></button>   
   </div>
  </div>`
}
boton.addEventListener("click", cambiaRoot);

const cambioRoot = () => {
  h1Header.innerHTML=`Formulario Feedback`
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
boton1.addEventListener("click", cambioRoot);



