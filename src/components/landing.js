import landingImg from "../assets/landing.png";
import logo from "../assets/logo.png";

const Landing = () => {
    return (
        <>

<div class="container">
                        <div class="row">
                            <div class="landing__wrapper">
                                <div class="landing__content">
                                    <div class="landing__content__title">
                                        Gain more knowledge <br class="remove--tablet"/>in less time
                                    </div>
                                    <div class="landing__content__subtitle">
                                        Great summaries for busy people,<br class="remove--tablet"/>
                                        individuals who barely have time to read, <br class="remove--tablet"/>and even people who don’t like to read.
                                    </div>
                                    <button class="btn home__cta--btn">Login</button>
                                </div>
                                <figure class="landing__image--mask">
                                   <img alt="landing" src={landingImg} width="779" height="740" loading="lazy" style={{ color: "transparent" }} />
                                </figure>
                            </div>
                        </div>
                    </div>
         </>
    )
}
export default Landing                     