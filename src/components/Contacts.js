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
          <div className="title">Contacte-nos!</div>
          <div className="msg">
            Não hesites em entrar em contacto connosco para mais informações!
          </div>
        </div>
        <div className="contacts_content">
          <div className="info_box">
            {Object.keys(contactInfo).map(this.renderInfo)}
          </div>
          <div className="form">
            <ContactFormTest
              message={this.props.message}
              setMessage={this.props.setMessage}
            ></ContactFormTest>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
