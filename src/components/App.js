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
import Partners from './Partners';
import FAQs from './FAQs';
import Contacts from './Contacts';
import { BackTop } from 'antd';

class App extends React.Component {
  state = {
    tabTitles: [],
    tabLinks: {},
    currentPage: 0,
    message: {},
  };

  constructor(props) {
    super(props);
    this.workRef = React.createRef();
    this.setState({
      currentPage: 'Página Inicial',
    });
  }

  setMessage = (newMessage) => {
    var { message } = this.state;
    message = newMessage;
    this.setState({ message });
  };

  setCurrentPage = (page) => {
    var { currentPage } = this.state;
    currentPage = page;
    this.setState({ currentPage });
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
      Parceiros: '/Partners',
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
            currentPage={this.state.currentPage}
            workRef={this.workRef}
            setCurrentPage={this.setCurrentPage}
          ></Header>
          <a name="top"></a>
          <div className="top">
            <BackTop />
            <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>
              {' '}
              gray{' '}
            </strong>
            button.
          </div>
          <Route
            exact
            path="/"
            render={(props) => (
              <MainPage workRef={this.workRef}></MainPage>
            )}
          ></Route>
          <Route
            exact
            path="/Partners"
            render={(props) => <Partners></Partners>}
          ></Route>
          <Route
            exact
            path="/FAQs"
            render={(props) => <FAQs></FAQs>}
          ></Route>
          <Route
            exact
            path="/Contacts"
            render={(props) => (
              <Contacts
                message={this.state.message}
                setMessage={this.setMessage}
              ></Contacts>
            )}
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
