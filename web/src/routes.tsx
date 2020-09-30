import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Acima from './pages/Acima'
import Abaixo from './pages/Abaixo'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Acima} />
            <Route path="/abaixo" component={Abaixo} />
        </BrowserRouter>
    )
}

export default Routes