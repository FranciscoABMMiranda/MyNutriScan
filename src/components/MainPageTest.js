import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const benefits = {
  'Personalized Recomendations': {
    img: (
      <img
        src={require('../images/search.png')}
        alt={'Personalized Recomendations'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
  'Be Healthy': {
    img: (
      <img
        src={require('../images/heart.png')}
        alt={'Be Healthy'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
  'Informed Decisions': {
    img: (
      <img
        src={require('../images/search.png')}
        alt={'Informed Decisions'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
  'Save Time': {
    img: (
      <img
        src={require('../images/clock.png')}
        alt={'Save Time'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
};

const boxesLeft = ['Choose', 'Personalize'];
const boxesRight = ['Side and Scan', 'Enjoy'];

const boxesInfo = {
  Choose: {
    msg:
      'Select between one of our pre-defined diet modes or create your own even more complete and personalized.',
  },
  Personalize: {
    msg:
      'Select between one of our pre-defined diet modes or create your own even more complete and personalized.',
  },
  'Side and Scan': {
    msg:
      'Select between one of our pre-defined diet modes or create your own even more complete and personalized.',
  },
  Enjoy: {
    msg:
      'Select between one of our pre-defined diet modes or create your own even more complete and personalized.',
  },
};

class MainPage extends React.Component {
  static propTypes = {
    tabTitles: PropTypes.array,
    tabLinks: PropTypes.object,
  };

  handleScroll() {
    const { workRef } = this.props;
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  renderHeader(i) {
    const { tabTitles, tabLinks } = this.props;
    if (tabTitles[i] !== 'Como Funciona') {
      return (
        <Link
          className="header_titles"
          key={i}
          to={tabLinks[tabTitles[i]]}
        >
          {tabTitles[i]}
        </Link>
      );
    } else {
      return (
        <button
          className="header_titles"
          key={i}
          onClick={this.handleScroll.bind(this)}
        >
          {tabTitles[i]}
        </button>
      );
    }
  }

  renderBenefits(key) {
    return (
      <div className="box" key={key}>
        {benefits[key]['img']}
        <div className="box_title">
          <b>{key}</b>
        </div>
        <div className="box_msg">{benefits[key]['msg']}</div>
      </div>
    );
  }

  renderWorksBox(key) {
    return (
      <div className="box" key={key}>
        <div className="box_title">{key}</div>
        <div className="box_msg">{boxesInfo[key]['msg']}</div>
      </div>
    );
  }

  render() {
    const titles = Object.keys(this.props.tabTitles);
    const { workRef } = this.props;
    return (
      <div className="main">
        <div className="header">
          {titles.map(this.renderHeader.bind(this))}

          <div className="header_logo">
            <img src={require('../images/logo.png')} alt="logo" />
          </div>
        </div>
        <div className="main_header">
          <div className="title">Get your app now</div>
          <div className="msg">
            You can get MyNutriScan on the App Store or on Google Play{' '}
          </div>
          <div className="app-buttons">
            <img
              src={require('../images/appStore.png')}
              alt="appSTore"
            />
            <img
              src={require('../images/googlePlay.png')}
              alt="google"
            />
          </div>
          <div className="phones">
            <img src={require('../images/phones.png')} alt="phones" />
          </div>
        </div>
        <div className="main_about">
          <div className="title">About the App</div>
          <div className="msg">
            You can get MyNutriScan on the App Store or on Google Play{' '}
          </div>
          <div className="benefits">
            {Object.keys(benefits).map(this.renderBenefits)}
          </div>
          <div className="works">
            <div ref={workRef}>oi</div>
            <a className="link" name="about"></a>
            <div className="works_boxes">
              {boxesLeft.map(this.renderWorksBox)}
            </div>
            <img src={require('../images/phone.png')} alt="phone" />
            <div className="works_boxes">
              {boxesRight.map(this.renderWorksBox)}
            </div>
          </div>
        </div>

        <div className="main_footer">
          <div className="title">Get your app now</div>
          <div className="msg">
            Sdqjsbkkbasdkjbajkdbjkasb bdoaisdosahdh
          </div>
          <div className="btns">
            <img
              className="img"
              src={require('../images/appStoreBlack.png')}
              alt="appStoreBlack"
            />
            <img
              className="img"
              src={require('../images/playStoreBlack.png')}
              alt="playStoreBlack"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
