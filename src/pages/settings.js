import SideBar from '../components/sideBar';
import Search from '../components/search';
import Footer from '../components/footer'
import { useState } from 'react'

const Settings = () => {
    const [showUpgrade, setUpgrade] = useState(false);
  return (
    <>
    <div id="__next">
    <div className="wrapper">
    <Search />
    <Sidebar />
        </div>
        </div>
        <div className="container">
        <div className="row">
        <div className="section__title page__title">Settings</div>
        <div className="setting__content">
        <div className="settings__sub--title">Your Subscription plan</div>
        <div className="settings__text" onClick={() => setUpgrade (true)}>Premium</div>
        <a className="btn settings__upgrade--btn" href="/choose-plan">Upgrade to Premium</a>
        </div>
        <div className="setting__content">
        <div className="settings__sub--title">Email</div>
        <div className="settings__text">brackesb12@gmail.com</div>
        //FIX THIS, ITS NOT SUPPOSED TO BE HARDCODED
        </div>
        </div>
        </div>
    </>
  )
}

export default Settings

//This page is when you are logged in and there is a green button that says 'Upgrade'
//<button className="btn" onClick={handleLogout}>
//                  <span>Logout</span>
 //               </button>