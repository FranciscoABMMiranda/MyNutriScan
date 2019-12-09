import React from 'react';
//import Tabs from './Tabs';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs } from 'antd';
import MainPage from './MainPage';

const { TabPane } = Tabs;
const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{
          ...style,
          color: '#fff',
          zIndex: 1,
          border: '0px',
          margin: '1rem',
        }}
      />
    )}
  </Sticky>
);

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <StickyContainer>
          <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
            <TabPane
              tab="Página Inicial"
              key="1"
              style={{ height: 200 }}
            >
              <MainPage></MainPage>
            </TabPane>
            <TabPane tab="Como Funciona" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Parceiros" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="FAQs" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Contactos" key="5">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </StickyContainer>
        <div className="logo">
          <img src={require('../images/logo.png')} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
