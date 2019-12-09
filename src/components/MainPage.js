import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header-background"></div>
        <div className="main-header">
          <div className="title">Get your app now</div>
          <div className="header-msg">
            You can get MyNutriScan on the App Store or on Google Play{' '}
          </div>
          <div className="app-buttons">
            <img
              src={require('../images/appStore.png')}
              alt="google"
            />
            <img
              src={require('../images/googlePlay.png')}
              alt="google"
            />
          </div>
        </div>
        <div className="phones"></div>
      </div>
    );
  }
}

export default MainPage;
