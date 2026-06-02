import logo from "../assets/logo.png";
import LoginToggle from './loginToggle'
import { useState } from 'react'

const Nav = () => {
    const [ showLogin, setShowLogin ] = useState(false)
    const [ menuOpen, setMenuOpen ] = useState(false)

    const openLogin = () => {
        setShowLogin(true)
        setMenuOpen(false)
    }

    return (
        <>
            <div className="nav__wrapper">
                <figure className="nav__img--mask">
                    <img src={logo} alt="logo" />
                </figure>
                <button
                    type="button"
                    className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="nav__burger-line" />
                    <span className="nav__burger-line" />
                    <span className="nav__burger-line" />
                </button>
                <ul className={`nav__list--wrapper ${menuOpen ? 'nav__list--wrapper--open' : ''}`}>
                    <li className="nav__list nav__list--login" onClick={openLogin}>
                        Login
                    </li>
                    <li className="nav__list nav__list--mobile">About</li>
                    <li className="nav__list nav__list--mobile">Contact</li>
                    <li className="nav__list nav__list--mobile">Help</li>
                </ul>
                { showLogin && <LoginToggle onClose={() => setShowLogin(false)} /> }
            </div>
        </>
    )
}
export default Nav
