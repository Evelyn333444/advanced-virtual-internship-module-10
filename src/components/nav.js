import logo from "../assets/logo.png";
import LoginToggle from './loginToggle'
import { useState } from 'react'

const Nav = () => {
    const [ showLogin, setShowLogin ] = useState(false)
    return (
        <>
<div className="nav__wrapper">
                        <figure class="nav__img--mask">
                        <img src={logo} alt="logo" />
                        </figure>
                        <ul className="nav__list--wrapper">
                            <li className="nav__list nav__list--login" onClick={() => setShowLogin(true)}>
                            Login
                            </li>
                            <li className="nav__list nav__list--mobile">About</li>
                            <li className="nav__list nav__list--mobile">Contact</li>
                            <li className="nav__list nav__list--mobile">Help</li>
                        </ul>
                        { showLogin && <LoginToggle onClose={() => setShowLogin(false)} />}
                    </div>
        </>
    )
}
export default Nav
