const cambioRoot = () => {
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