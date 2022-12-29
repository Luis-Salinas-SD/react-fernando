import React from 'react'

const Eventos = ({ valor }) => {
    const addOne = () => {
        console.log(valor + 1);
    }

    return (
        <>
            <div>Eventos</div>
            <span>{valor}</span> <br />
            <button onClick={addOne}>Agregar!</button>
        </>
    )
}

export default Eventos
