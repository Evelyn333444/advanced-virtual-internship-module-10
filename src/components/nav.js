import logo from "../assets/logo.png";
import LoginToggle from './loginToggle'
import { useState } from 'react'

const Nav = () => {
    const [ showLogin, setShowLogin ] = useState(false)
    const [ menuOpen, setMenuOpen ] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    const openLogin = () => {
        setShowLogin(true)
        closeMenu()
    }

    return (
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            <div className="nav__wrapper">
                <figure className="nav__img--mask">
                    <img className="nav__img" src={logo} alt="Summarist logo" />
                </figure>

                <button
                    type="button"
                    className="nav__burger"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className="nav__list--wrapper">
                    <li className="nav__list nav__list--login" onClick={openLogin}>
                        Login
                    </li>
                    <li className="nav__list">About</li>
                    <li className="nav__list">Contact</li>
                    <li className="nav__list">Help</li>
                </ul>

                { menuOpen && (
                    <button
                        type="button"
                        className="nav__backdrop"
                        aria-label="Close menu"
                        onClick={closeMenu}
                    />
                ) }

                { showLogin && <LoginToggle onClose={() => setShowLogin(false)} /> }
            </div>
        </nav>
    )
}

export default Nav
