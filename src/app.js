document.getElementById("change").addEventListener("click", () =>{
  let container = document.getElementById("root") 
    container.innerHTML=`<div class="col s12">
                           <p>Información Personal</p>
                            <div class="divider"></div>
                             <div class="seccion">
                             <textarea id="name" class="text" placeholder="Nombre"></textarea>
                             <textarea id="surname" class="text" placeholder="Apellido"></textarea>
                             <textarea id="rut" class="text" placeholder="Rut" ></textarea>
                             <textarea id="email" class="text" placeholder="E-mail" ></textarea>
                             <textarea id="namber" class="text" placeholder="Telefono Contacto"></textarea>   
                             <button type="button" id="continue">Continuar</button> 
                            </div>
                           </div>`

                          }

);



