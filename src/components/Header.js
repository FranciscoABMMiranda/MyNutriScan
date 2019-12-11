import React from 'react';
import { Link } from 'react-router-dom';

const headerTitles = [
  'Página Inicial',
  'Como Funciona',
  'Parceiros',
  'FAQs',
  'Contactos',
];

const headerLinks = {
  'Página Inicial': '/',
  Parceiros: '/partners',
  FAQs: '/FAQs',
  Contactos: '/Contacts',
};

class Header extends React.Component {
  renderHeader(i) {
    if (headerTitles[i] !== 'Como Funciona') {
      return (
        <Link
          className="header_titles"
          key={i}
          to={headerLinks[headerTitles[i]]}
        >
          {headerTitles[i]}
        </Link>
      );
    } else {
      return (
        <a className="header_titles" key={i} href={'#about'}>
          {headerTitles[i]}
        </a>
      );
    }
  }

  render() {
    const titles = Object.keys(headerTitles);
    return (
      <div>
        <div className="header">{titles.map(this.renderHeader)}</div>
        <div className="logo">
          <img src={require('../images/logo.png')} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
