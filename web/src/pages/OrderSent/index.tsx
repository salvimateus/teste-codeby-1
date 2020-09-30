import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import icon from '../../assets/img/thumbs-up.svg';

function OrderSent() {
    return (
        <section className="container-final">
            <img src={icon} alt="Pedido Enviado!" />

            <h2>Pedido Enviado!</h2>

            <Link to="/" className="btn-primary">Voltar</Link>
        </section>
    );
}

export default OrderSent;