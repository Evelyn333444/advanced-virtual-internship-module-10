import SideBar from '../components/sideBar';
import Search from '../components/search';
import Footer from '../components/footer'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Settings = ({ handleLogout }) => {
    const [showUpgrade, setUpgrade] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: ""
    });

    return (
        <>
            <div id="__next">
                <div className="wrapper">
                    <Search />
                    <SideBar />
                    <div className="row">
                        <div className="container">
                            <div className="section__title page__title">Settings</div>
                            <div className="setting__content">
                                <div className="settings__sub--title">Your Subscription plan</div>
                                <div className="settings__text" onClick={() => setUpgrade(true)}>Premium</div>
                                <Link className="btn settings__upgrade--btn" to="/choose-plan">Upgrade to Premium</Link>
                            </div>
                            <div className="setting__content">
                                <div className="settings__sub--title">Email</div>
                                <div className="settings__text"><p>{user.email}</p></div>
                            </div>
                            <div className="setting__content">
                                <button className="btn" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Settings