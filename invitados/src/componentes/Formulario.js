import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({actualizarFormulario, crearInvitacion }) => {

    const [invitacion, actualizarInvitacion] = useState({
        nombre: '',
        ide: '',
        correo: '',
        fecha: '',
        hora: '',
        motivo: ''
    })

    const [error, actualizarError] = useState(false)
    //función que se ejecuta cada que el usuario escriba en un input
    const actualizarState = e => {
        actualizarInvitacion({
            ...invitacion,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const { nombre, ide, correo, fecha, hora, motivo } = invitacion;

    //Cuando el usuario preciona "agregar cita"
    const agregarInvitado = e => {
        e.preventDefault();

        //Validar el form
        if (nombre.trim() === '' || ide.trim() == '' || correo.trim() == '' || fecha.trim() === '' || hora.trim() === '' || motivo.trim() === '') {
            actualizarError(true)
            return;
        }
        //Eliminar el mensaje de error
        actualizarError(false)

        //Asignar un id
        invitacion.id = shortid.generate();

        //Crear invitacion
        crearInvitacion(invitacion)

        //Reiniciar form
        actualizarInvitacion({
            nombre: '',
            ide: '',
            correo:'',
            fecha: '',
            hora: '',
            motivo: ''
        })
        actualizarFormulario(false);
    }
    return (
        <form
            onSubmit={agregarInvitado}
        >
            <h2>Invitar</h2>
            {error ? <Error mensaje="Todos los campos son obligatorios o valor incorrecto"></Error> : null}
            <div className="campo">
                <label>Nombre completo del inivitado</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="nombre"
                    placeholder="Ej. Pedro Rojas Rojas"
                    onChange={actualizarState}
                    value={nombre}
                />
            </div>
            <div className="campo">
                <label>Número de indentificación</label>
                <input
                    type="number"
                    className="u-full-width"
                    name="ide"
                    placeholder="Ej. 10000000"
                    onChange={actualizarState}
                    value={ide}
                />
            </div>
            <div className="campo">
                <label>Correo del invitado</label>
                <input
                    type="email"
                    className="u-full-width"
                    name="correo"
                    placeholder="Ej. pedro@correo.com"
                    onChange={actualizarState}
                    value={correo}
                />
            </div>
            <div className="campo">
                <label>Fecha de la visita</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={actualizarState}
                    value={fecha}
                />
            </div>
            <div className="campo">
                <label>Hora aproximada de la visita</label>
                <input
                    type="time"
                    className="u-full-width" 
                    name="hora"                   
                    value={hora}
                    onChange={actualizarState}
                />
            </div>
            <div className="campo">
                <label>Motivo de la visita</label>
                <textarea
                    type="text"
                    className="u-full-width"
                    name="motivo"
                    placeholder="Ej. Visita corporativa"
                    onChange={actualizarState}
                    value={motivo}
                />
            </div>
            <input
                type="submit"
                className="button-third u-full-width"
                value="Enviar invitación"
            />
        </form>);
}

export default Formulario;