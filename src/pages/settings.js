import React from 'react';
import SideBar from '../components/sideBar';
import Search from '../components/search';

const Settings = ({ handleLogout }) => {
  return (
    <div id="__next">
      <div className="wrapper">
        <Search />
        <SideBar />
        <div className="row">
          <div className="container">
            <div className="settings__wrapper">
              <h1 className="settings__title">Settings</h1>
              <div className="settings__content">
                <button className="btn" onClick={handleLogout}>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

//This page is when you have not logged in and the settings page just has an image and a button that says login