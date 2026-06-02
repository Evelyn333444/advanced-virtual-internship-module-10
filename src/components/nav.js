import logo from "../assets/logo.png";
import LoginToggle from './loginToggle'
import { useState } from 'react'

const Nav = () => {
    const [ showLogin, setShowLogin ] = useState(false)

    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <figure className="nav__img--mask">
                    <img className="nav__img" src={logo} alt="Summarist logo" />
                </figure>

                <ul className="nav__list--wrapper">
                    <li className="nav__list nav__list--login" onClick={() => setShowLogin(true)}>
                        Login
                    </li>
                    <li className="nav__list">About</li>
                    <li className="nav__list">Contact</li>
                    <li className="nav__list">Help</li>
                </ul>

                { showLogin && <LoginToggle onClose={() => setShowLogin(false)} /> }
            </div>
        </nav>
    )
}

export default Nav
