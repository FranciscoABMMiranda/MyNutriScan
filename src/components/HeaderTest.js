import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    tabTitles: PropTypes.array,
    tabLinks: PropTypes.object,
    currentPage: PropTypes.number,
  };

  handleScroll() {
    const { workRef } = this.props;
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  handleClick = (i) => {
    var { currentPage, tabTitles, tabLinks } = this.props;
    console.log(currentPage, i);
    if (i == '1') {
      console.log(currentPage);
      if (currentPage !== 0) {
        window.location = '/#about';
        currentPage = 0;
        this.props.setCurrentPage(currentPage);
      } else {
        this.handleScroll();
      }
    } else {
      currentPage = parseInt(i);
      window.location = tabLinks[tabTitles[currentPage]];
      this.props.setCurrentPage(currentPage);
    }
  };

  renderHeader(i) {
    const { tabTitles, tabLinks } = this.props;
    return (
      <button
        className="header_titles"
        key={i}
        onClick={this.handleClick.bind(this, i)}
      >
        {tabTitles[i]}
      </button>
    );
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
      {
        /* <a className="header_titles" key={i} href={'/#about'}>
          {tabTitles[i]}
        </a> */
      }
      return (
        <button
          className="header_titles"
          key={i}
          onClick={this.handleClick.bind(this)}
        >
          {tabTitles[i]}
        </button>
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
