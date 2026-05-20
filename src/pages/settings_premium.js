import Footer from '../components/footer'
import Search from '../components/search'
import Sidebar from '../components/sideBar'

const Settings_Premium = () => {
  return (
    <>
    <div id="__next">
    <div className="wrapper"></div>
    <div className="container">
        <Search onSearch={setSearchTerm} />
        <Sidebar />
        <div className="row">
        <div className="section__title page__title">Settings</div>
        <div className="setting__content">
        <div className="settings__sub--title">Your Subscription plan</div>
        <div className="settings__text">Premium</div>
        </div>
        <div className="setting__content">
        <div className="settings__sub--title">Email</div>
        <div className="settings__text">{user.email}</div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Settings_Premium

//This page is when you are logged in and you have upgraded to premium