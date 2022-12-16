import React from 'react'
import ReactDOM from "react-dom/client";
import AppComponent from "./AppComponent";
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppComponent cadena='Lorem impusm' puesto='Admin' />
    </React.StrictMode>
);

