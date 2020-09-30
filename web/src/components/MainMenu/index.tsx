import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

const MainMenu = () => {
    return (
        <div className="main-menu">
            <Link to="/" className="main-menu__item"><strong>Acima</strong> de R$ 10</Link>
            <Link to="/abaixo" className="main-menu__item"><strong>Abaixo</strong> de R$ 10</Link>
            {/* <Link to="/abaixo" className="main-menu__item">Dark mode</Link> */}
        </div>
    )
}

export default MainMenu;