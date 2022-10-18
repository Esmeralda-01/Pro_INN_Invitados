import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Enviado from "./componentes/Enviado";
function App() {

  const [invitaciones, guardarInvitaciones] = useState([]);
  const [mostrarformulario, actualizarFormulario] = useState(true);

  const crearInvitacion = invitacion => {
    guardarInvitaciones([
      ...invitaciones,
      invitacion
    ]);
  }
  return (
    <div className="container">
      <header>
        <h1>Sistema invitados</h1>
        <div className="contenido-principal contenido">
          {mostrarformulario ?
            (<Formulario
              actualizarFormulario={actualizarFormulario}
              crearInvitacion={crearInvitacion}
            ></Formulario>) 
            : (
              <div className="row">
                <Enviado/>
              </div>
            )}

        </div>
      </header>
    </div>

  );
}

export default App;
