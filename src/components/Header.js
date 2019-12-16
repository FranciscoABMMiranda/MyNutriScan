import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Header extends React.Component {
  static propTypes = {
    tabTitles: PropTypes.array,
    tabLinks: PropTypes.object,
  };

  componentDidMount() {
    if (window.location.pathname !== '/') {
      $('div.header').toggleClass('stopped');
    }
    $(window).scroll(function(event) {
      if (event.target.location.pathname === '/') {
        $('div.header').toggleClass(
          'scrolled',
          $(this).scrollTop() > 80,
        );
      }
    });
  }

  renderHeader(i) {
    const { tabTitles, tabLinks } = this.props;
    if (tabTitles[i] !== 'Como Funciona') {
      {
        /* <Link
          className="header_titles"
          key={i}
          to={tabLinks[tabTitles[i]]}
        >
          {tabTitles[i]}
        </Link> */
      }
      if (tabTitles[i] !== 'Página Inicial') {
        var ref = tabLinks[tabTitles[i]] + '/#top';
        return (
          <a className="header_titles" key={i} href={ref}>
            {tabTitles[i]}
          </a>
        );
      } else {
        return (
          <a className="header_titles" key={i} href={'/#top'}>
            {tabTitles[i]}
          </a>
        );
      }
    } else {
      return (
        <a className="header_titles" key={i} href={'/#about'}>
          {tabTitles[i]}
        </a>
      );
    }
  }

  render() {
    const titles = Object.keys(this.props.tabTitles);
    return (
      <div className="header">
        {titles.map(this.renderHeader.bind(this))}

        <div className="header_logo">
          <img src={require('../images/logo.png')} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
