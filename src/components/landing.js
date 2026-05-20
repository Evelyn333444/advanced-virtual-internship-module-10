import landingImg from "../assets/landing.png";
import { useState } from 'react'
import LoginToggle from './loginToggle'


const Landing = () => {
    const [ showLogin, setShowLogin ] = useState(false)
    return (
        <>

<div className="container">
                        <div className="row">
                            <div className="landing__wrapper">
                                <div className="landing__content">
                                    <div className="landing__content__title">
                                        Gain more knowledge <br className="remove--tablet"/>in less time
                                    </div>
                                    <div className="landing__content__subtitle">
                                        Great summaries for busy people,<br className="remove--tablet"/>
                                        individuals who barely have time to read, <br className="remove--tablet"/>and even people who don’t like to read.
                                    </div>
                                    <button className="btn home__cta--btn" onClick={() => setShowLogin(true)}>Login</button>
                                    { showLogin && <LoginToggle onClose={() => setShowLogin(false)} />}
                                </div>
                                <figure className="landing__image--mask">
                                   <img alt="landing" src={landingImg} width="779" height="740" loading="lazy" style={{ color: "transparent" }} />
                                </figure>
                            </div>
                        </div>
                    </div>
         </>
    )
}
export default Landing                     