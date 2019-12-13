import React from 'react';
import { Icon } from 'antd';
import ContactFormTest from './ContactFormTest';

const contactInfo = {
  mail: {
    value: 'geral@mynutriscan.com',
    icon: <Icon type="mail" />,
  },
  phone: {
    value: '+351 961852370',
    icon: <Icon type="phone" />,
  },
  location: {
    value: 'Lisbon',
    icon: <Icon type="pushpin" />,
  },
};

class Contacts extends React.Component {
  renderInfo(key) {
    return (
      <div className="info_box_item" key={key}>
        {contactInfo[key]['icon']}
        {contactInfo[key]['value']}
      </div>
    );
  }
  render() {
    return (
      <div className="contacts">
        <div className="contacts_header">
          <div className="title">Contact Us!</div>
          <div className="msg">
            You can contact us to give feedback or to ask any question
            you like.
          </div>
        </div>
        <div className="contacts_content">
          <div className="info_box">
            {Object.keys(contactInfo).map(this.renderInfo)}
          </div>
          <div className="form">
            <ContactFormTest></ContactFormTest>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
