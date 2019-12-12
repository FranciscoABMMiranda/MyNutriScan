import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import '../css/App.scss';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';

class App extends React.Component {
  state = {
    tabTitles: [],
    tabLinks: {},
  };

  componentDidMount() {
    var { tabTitles, tabLinks } = this.state;
    tabTitles = [
      'Página Inicial',
      'Como Funciona',
      'Parceiros',
      'FAQs',
      'Contactos',
    ];

    tabLinks = {
      'Página Inicial': '/',
      Parceiros: '/partners',
      FAQs: '/FAQs',
      Contactos: '/Contacts',
    };
    this.setState({ tabTitles, tabLinks });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header
            tabTitles={this.state.tabTitles}
            tabLinks={this.state.tabLinks}
          ></Header>
          <Route
            exact
            path="/"
            render={(props) => <MainPage></MainPage>}
          ></Route>
          <Footer
            tabTitles={this.state.tabTitles}
            tabLinks={this.state.tabLinks}
          ></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
