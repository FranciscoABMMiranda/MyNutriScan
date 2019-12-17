import React, { useState } from 'react';
import { Icon, Button } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <i onClick={() => onClick()} className="custom-left-arrow"></i>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <i onClick={() => onClick()} className="custom-right-arrow"></i>
  );
};

const partners = {
  Supermarket: {
    title: 'Supermercado (Retalho)',
    img: (
      <img
        src={require('../images/cartShadow.png')}
        alt={'Personalized Recomendations'}
      ></img>
    ),
    msg:
      'A MyNutriScan, através do seu algoritmo nutricional personalizado e das suas funcionalidades?, apresenta-se como uma ferramenta indispensável a todos os utilizadores que pretendam seguir uma alimentação saudável. Caso seja um representante de uma cadeia de supermercados e esteja interessado em saber mais sobre o produto e, potencialmente, fazer uma parceria, contacte-nos. Acreditamos que a melhoria da experiência dos consumidores através do uso da aplicação conferiria ao seu supermercado uma significativa vantagem competitiva.',
  },
  Gym: {
    title: 'Ginásios',
    img: (
      <img
        src={require('../images/heartShadow.png')}
        alt={'Be Healthy'}
      ></img>
    ),
    msg:
      'A MyNutriScan, através do seu algoritmo nutricional personalizado e das suas funcionalidades ?, apresenta-se como uma ferramenta indispensável a todos os utilizadores que pretendam seguir uma alimentação saudável que, em combinação com a prática do exercício físico, leve a um bem-estar físico e mental. Acreditamos que o nosso produto facilitaria os praticantes de desporto a seguir a alimentação que precisam e que é definida pelos seus PTs de modo a atingir os resultados ambicionados. Oferecer esta ferramenta aos seus utilizadores iria conferir ao seu ginásio uma significativa vantagem competitiva. Caso seja um representante de um ginásio e esteja interessado em saber mais sobre o produto e, potencialmente, fazer uma parceria, contacte-nos.',
  },
  Health: {
    title: 'Associações e Empresas de saúde',
    img: (
      <img
        src={require('../images/charityShadow.png')}
        alt={'Informed Decisions'}
      ></img>
    ),
    msg:
      'A MyNutriScan, através do seu algoritmo nutricional personalizado e das suas funcionalidades ?, apresenta-se como uma ferramenta indispensável a todos os utilizadores que apresentem restrições alimentares, independentemente da sua razão (intolerâncias, alergias, doenças, gravidez, amamentação, ...). Acreditamos que o nosso produto auxiliaria no momento da escolha dos produtos alimentares que vão de encontro às respectivas restrições alimentares de cada um. Proporcionar esta ferramenta aos seus associados/clientes certamente iria aumentar a sua qualidade de vida, aumentando asism a vantagem competitiva da sua assoicação/empresa. Caso esteja interessado em saber mais sobre o produto e, potencialmente, fazer uma parceria, contacte-nos.',
  },
  Government: {
    title: 'Governo',
    img: (
      <img
        src={require('../images/cityHallShadow.png')}
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
        <div className="box_title">{partners[key]['title']}</div>
        <div className="box_msg">{partners[key]['msg']}</div>
      </div>
    );
  }
  render() {
    return (
      <div className="partners">
        <div className="partners_title">
          <div className="title">Partners</div>
          <div className="msg">
            We have a lot of partners that wwe like!
          </div>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass="partners_info"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {Object.keys(partners).map(this.renderBoxes)}
        </Carousel>
        {/* <div className="partners_info">
          {Object.keys(partners).map(this.renderBoxes)}
        </div> */}
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
