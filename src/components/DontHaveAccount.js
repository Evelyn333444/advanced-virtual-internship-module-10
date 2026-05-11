import googleImg from "../assets/google.png";
import { initializeApp } from 'firebase/app';


const LoginToggle = ({ onClose }) => {
    return (
        <>
        <div className="auth__wrapper">
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__title">Sign up to Summarist</div>
                    <button className="btn google__btn--wrapper">
                        <figure className="google__icon--mask">
                            <img alt="google" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.864494ce.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.864494ce.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.864494ce.png&amp;w=256&amp;q=75" width="20" height="20" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
                            </figure>
                            <div>Sign up with Google</div>
                            </button>
                            <div className="auth__separator">
                                <span className="auth__separator--text">or</span>
                                </div>
                                <form className="auth__main--form">
                                    <input className="auth__main--input" type="text" placeholder="Email Address"/>
                                    <input className="auth__main--input" type="password" placeholder="Password"/>
                                    <button className="btn">
                                        <span>Sign up</span>
                                        </button>
                                        </form>
                                        </div>
                                        <button className="auth__switch--btn">Already have an account?</button>
                                        <div className="auth__close--btn">
                                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path>
                                            </svg>
                                            </div>
                                            </div>
                                            </div>
                                            
        </>
)
}
export default LoginToggle