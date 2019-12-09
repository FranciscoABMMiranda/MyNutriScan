import React from 'react';
import '../css/App.scss';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
      </div>
    );
  }
}

export default App;
