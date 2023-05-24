import React from 'react'
import { useState } from 'react';

const Cusestatte = () => {
    //- Hooks
    const [valor, setValor] = useState(0);

    const sumar = () => {
        setValor(valor + 1)
    }
    const restar = () => {
        setValor(valor - 1)

    }
    const reset = () => {
        setValor(valor - valor)
    }


    return (
        <div>
            <h2>UseState Component</h2>
            <span>{valor}</span>
            <br />
            <button onClick={sumar}>
                Agregar
            </button>
            <button onClick={restar}>
                Remover
            </button>
            <button onClick={reset}>
                Resetear
            </button>
        </div>
    )
}

export default Cusestatte
