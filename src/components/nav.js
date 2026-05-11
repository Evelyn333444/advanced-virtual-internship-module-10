import logo from "../assets/logo.png";
import LoginToggle from '../loginToggle'

const Nav = () => {
    return (
        <>
<div className="nav__wrapper">
                        <figure class="nav__img--mask">
                        <img src={logo} alt="logo" />
                        </figure>
                        <ul className="nav__list--wrapper">
                            <li className="nav__list nav__list--login" onClick={handleLoginToggle}>
                            Login
                            </li>
                            <li className="nav__list nav__list--mobile">About</li>
                            <li className="nav__list nav__list--mobile">Contact</li>
                            <li className="nav__list nav__list--mobile">Help</li>
                        </ul>
                    </div>
        </>
    )
}
export default Nav
