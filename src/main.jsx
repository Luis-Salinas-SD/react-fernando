import React from 'react'
import ReactDOM from "react-dom/client";
//! Importacion de Componentes ⬇️⬇️⬇️⬇️
import Componente from './1Componente-props/Componente';
import UserComponent from "./UserComponent";
import Eventos from "./2Eventos/Eventos";
import Cusestatte from './3useState/Cusestatte';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        {/* <Componente /> */}
        {/* <UserComponent nombre="Luis" /> */}
        {/* <Eventos valor={10} /> */}
        <Cusestatte/>

    </React.StrictMode>
);