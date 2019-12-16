import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    tabTitles: PropTypes.array,
    tabLinks: PropTypes.object,
  };

  renderTabs(i) {
    const { tabTitles, tabLinks } = this.props;
    if (tabTitles[i] !== 'Como Funciona') {
      if (tabTitles[i] !== 'Página Inicial') {
        var ref = tabLinks[tabTitles[i]] + '/#top';
        console.log(ref);
        return (
          <a className="tabs_titles" key={i} href={ref}>
            {tabTitles[i]}
          </a>
        );
      } else {
        return (
          <a className="tabs_titles" key={i} href={'/#top'}>
            {tabTitles[i]}
          </a>
        );
      }
    } else {
      return (
        <a className="tabs_titles" key={i} href={'/#about'}>
          {tabTitles[i]}
        </a>
      );
    }
  }
  render() {
    const titles = Object.keys(this.props.tabTitles);
    return (
      <div className="footer">
        <div className="footer_background"></div>
        <div className="footer_logo">
          <img src={require('../images/logo.png')} alt="logo" />
        </div>
        <div className="footer_content">
          <div className="tabs">
            {titles.map(this.renderTabs.bind(this))}
          </div>
          <div className="apps">
            <div className="apps_title">
              Available on your favorite platform.{' '}
              <b>Download now!</b>
            </div>
            <div className="apps_icons">
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
          <div className="social">
            <div className="social_title">
              <b>Follow us</b>
            </div>
            <div className="social_icons">
              <a
                href="https://www.facebook.com/mynutriscan/"
                target="_blank"
              >
                <img
                  className="img"
                  src={require('../images/facebook.png')}
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/my.nutriscan/"
                target="_blank"
              >
                <img
                  className="img"
                  src={require('../images/instagram.png')}
                  alt="instagram"
                />
              </a>
              <a
                href="https://pt.linkedin.com/company/mynutriscan"
                target="_blank"
              >
                <img
                  className="img"
                  src={require('../images/linkedin.png')}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright"></div>
      </div>
    );
  }
}

export default Footer;
