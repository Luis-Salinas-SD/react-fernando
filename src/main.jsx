import React from 'react'
import ReactDOM from "react-dom/client";
import AppComponent from "./AppComponent";
import PropTypess from "./PropTypess";
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PropTypess value={66} />
    </React.StrictMode>
);

