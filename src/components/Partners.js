import React from 'react';
import { Icon } from 'antd';

const partners = {
  Supermarket1: {
    img: (
      <img
        src={require('../images/search.png')}
        alt={'Personalized Recomendations'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
  Supermarket2: {
    img: (
      <img
        src={require('../images/heart.png')}
        alt={'Be Healthy'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
  Supermarket3: {
    img: (
      <img
        src={require('../images/search.png')}
        alt={'Informed Decisions'}
      ></img>
    ),
    msg:
      'The recommendations after scanning a product will be according to your specifi profile.',
  },
};

class Partners extends React.Component {
  renderBoxes(key) {
    return (
      <div className="box" key={key}>
        {partners[key]['img']}
        <div className="box_title">{key}</div>
        <div className="box_msg">{partners[key]['msg']}</div>
      </div>
    );
  }
  render() {
    return (
      <div classname="partners">
        <div className="partners_title">
          <div className="title">Partners</div>
          <div className="msg">
            We have a lot of partners that wwe like!
          </div>
        </div>
        <div className="partners_info">
          {Object.keys(partners).map(this.renderBoxes)}
        </div>
        <div className="partners_contact">
          <div className="title">
            <b>Interested in becoming a partner?</b>
          </div>
          <div className="msg">Reach us now!</div>
          <div className="email">
            <Icon type="mail" />
            <div className="email_name">
              parceiros@mynutriscan.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
