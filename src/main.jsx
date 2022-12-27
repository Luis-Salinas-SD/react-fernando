import React from 'react'
import ReactDOM from "react-dom/client";
import AppComponent from "./AppComponent";
import PropTypess from "./PropTypess";
import Eventos from "./Eventos";
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppComponent cadena="Luis" puesto="Desarrollo Web" />
        <PropTypess value={18} />
        {/* <PropTypess value={66} /> */}
        <Eventos />
    </React.StrictMode>
);

