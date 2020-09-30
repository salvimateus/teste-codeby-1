import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import './styles.css';
import iconMoon from '../../assets/img/moon.svg';

const MainMenu = () => {
    const $tagHtml = document.querySelector('html');

    useEffect(() => {
        if(!$tagHtml)
        {
           return;
        }

        if( localStorage.getItem('darkmode') )
        {
            $tagHtml.classList.add('t-dark-mode');
        }
    }, [$tagHtml]);

    function handleDarkMode() {
        if(!$tagHtml)
        {
           return;
        }

        $tagHtml.classList.toggle('t-dark-mode');

        if( localStorage.getItem('darkmode') )
        {
            localStorage.removeItem('darkmode');
        }
        else
        {
            localStorage.setItem('darkmode', 'true');
        }
    }

    return (
        <div className="main-menu">
            <Link to="/" className="main-menu__item"><strong>Acima</strong> de R$ 10</Link>
            <Link to="/abaixo" className="main-menu__item"><strong>Abaixo</strong> de R$ 10</Link>
            <button onClick={handleDarkMode} className="main-menu__item"><img src={iconMoon} alt="Dark mode"/> Dark mode</button>
        </div>
    )
}

export default MainMenu;