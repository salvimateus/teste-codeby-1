import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Acima from './pages/Acima'
import Abaixo from './pages/Abaixo'
import OrderSent from './pages/OrderSent'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Acima} />
            <Route path="/abaixo" component={Abaixo} />
            <Route path="/order-sent" component={OrderSent} />
        </BrowserRouter>
    )
}

export default Routes