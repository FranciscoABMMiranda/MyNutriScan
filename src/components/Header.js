import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    tabTitles: PropTypes.array,
    tabLinks: PropTypes.object,
  };

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
