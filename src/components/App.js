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
  render() {
    return (
      <Router>
        <div className="app">
          <Header></Header>
          <Route
            exact
            path="/"
            render={(props) => <MainPage></MainPage>}
          ></Route>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
