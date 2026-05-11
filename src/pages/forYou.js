import React from 'react';
import SideBar from '../components/sideBar';

const ForYou = ({ user }) => {
  // Check if user is null or undefined before trying to access its properties
  const userName = user ? (user.displayName || user.email) : 'Guest';

  return (
    <div id="__next">
      <div className="wrapper">
        <SideBar />
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <div className="for-you__title">Selected just for you, {userName}</div>
              {/* The rest of your book recommendations can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;