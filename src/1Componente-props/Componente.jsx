import React from 'react'

const Componente = ({ cadena, puesto }) => {
    return (
        <div>
            <div>
                <span>Bienvenido {cadena}, <br /> Especialista en: {puesto}</span>
            </div>
        </div>
    )
}

//Al componente se le pueden establecer props en caso de que no recibirlos.
Componente.defaultProps = {
    cadena: 'Usuario no encontrado',
    puesto: 'Sin Puesto'
}

export default Componente
