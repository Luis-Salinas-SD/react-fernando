import React from 'react'

const Eventos = ({ valor }) => {

    //función addOne
    const addOne = () => {
        console.log(valor + 1);
    }

    return (
        <>
            <div>Eventos</div>
            <p>{valor}</p>
            <button onClick={addOne}>Agregar!</button>
        </>
    )
}

export default Eventos
