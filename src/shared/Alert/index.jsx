import React from "react";
import './styles.css';

const Alert = () => {
    return (
        <div className="alert">
            Exemplo:
            <p className="alert__text">08:00 às 12:00 = 04:00</p>
            <p className="alert__text">13:00 às 17:30 = 04:30</p>
            <span className="alert__separator"/>
            <p className="alert__text">Total = 08:30 horas</p>
        </div>
    );
}

export default Alert;
