import React from 'react';

const benefits = {
  'Recomendações personalizadas': {
    img: (
      <img
        src={require('../images/womanShadow.png')}
        alt={'Personalized Recomendations'}
      ></img>
    ),
    msg:
      'Preenche o teu plano e obtém a informação mais relevante para ti.',
  },
  'Ser saudável': {
    img: (
      <img
        src={require('../images/heartShadow.png')}
        alt={'Be Healthy'}
      ></img>
    ),
    msg:
      'Faz decisões mais saudáveis, selecionando os produtos que vão de encontro às tuas necessidades. ',
  },
  'Decisões informadas': {
    img: (
      <img
        src={require('../images/searchShadow.png')}
        alt={'Informed Decisions'}
      ></img>
    ),
    msg:
      'Conhece melhor cada produto alimentar e descobre se é adequado para ti.',
  },
  'Poupa tempo': {
    img: (
      <img
        src={require('../images/clockShadow.png')}
        alt={'Save Time'}
      ></img>
    ),
    msg:
      'Ler rótulos de produtos alimentares pode demorar até 10x mais do que fazer um scan.',
  },
};

const boxesLeft = ['Escolhe', 'Personaliza'];
const boxesRight = ['Desliza e faz Scan', 'Aproveita'];

const boxesInfo = {
  Escolhe: {
    msg:
      'Seleciona um dos planos pré-definidos ou cria o teu próprio plano, mais completo e personalizado.',
    number: '1',
  },
  Personaliza: {
    msg:
      'Preenche o teu plano, incluindo informação desde alergias e intolerâncias aos teus objetivos. ',
    number: '2',
  },
  'Desliza e faz Scan': {
    msg:
      'Depois de um plano selecionado, aponta a câmara do teu telemóvel para o código de barras do produto.',
    number: '3',
  },
  Aproveita: {
    msg:
      'Recebe feedback que te permitirá fazer uma escolha mais saudável e informada.',
    number: '4',
  },
};

class MainPage extends React.Component {
  renderBenefits(key) {
    return (
      <div className="box" key={key}>
        {benefits[key]['img']}
        <div className="box_title">
          <b>{key}</b>
        </div>
        <div className="box_msg">{benefits[key]['msg']}</div>
      </div>
    );
  }

  renderWorksBox(key) {
    return (
      <div className="box" key={key}>
        <div className="box_title">
          {boxesInfo[key]['number']}. {key}
        </div>
        <div className="box_msg">{boxesInfo[key]['msg']}</div>
      </div>
    );
  }

  render() {
    const { workRef } = this.props;
    return (
      <div className="main">
        <div className="main_header">
          {/* <div className="background"></div> */}
          <div className="title">
            Decisões mais saudáveis no supermercado?
          </div>
          <div className="msg">
            <b>Com a MyNutriScan, escolher os produtos alimentares que
            melhor se adaptam às tuas necessidades nunca foi tão
            fácil.</b>
          </div>
          {/*<div className="app-buttons">
            <img
              src={require('../images/appStore.png')}
              alt="appSTore"
            />
            <img
              src={require('../images/googlePlay.png')}
              alt="google"
            />
    </div>*/}
          <div className="phones">
            <img src={require('../images/phones.png')} alt="phones" />
          </div>
        </div>
        <div className="main_about">
          <div className="title">Sobre a Aplicação</div>
          <div className="msg">
            A MyNutriScan permite, de uma forma rápida, simples e
            intuitiva, quebrar a barreira da leitura e interpretação
            dos rótulos de produtos alimentares, promovendo um estilo
            de vida mais saudável. Como? Cruzando as tuas necessidades
            nutricionais com a informação nutricional do produto
            alimentar e fornecendo feedback personalizado. O nosso
            objectivo? Ser o teu nutricionista digital de
            supermercado.{' '}
          </div>
          <div className="benefits">
            {Object.keys(benefits).map(this.renderBenefits)}
          </div>
          <div className="link">
            <a name="about"></a>
          </div>
          <div className="works">
            <div ref={workRef}></div>
            <div className="works_boxes">
              {boxesLeft.map(this.renderWorksBox)}
            </div>
            {/* <img src={require('../images/phone.png')} alt="phone" /> */}
            <video width="320" height="240" loop autoPlay>
              <source
                src={require('../images/phoneVideoBorderless.mp4')}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="works_boxes">
              {boxesRight.map(this.renderWorksBox)}
            </div>
          </div>
        </div>

        <div className="main_footer">
          <div className="title">Brevemente na tua loja favorita.</div>
          <div className="msg">
            O primeiro passo para adoção de um estilo de vida
            saudável, começa no momento de escolha de um produto
            alimentar no supermercado.
          </div>
          <div className="btns">
            <img
              className="img"
              src={require('../images/appStoreBlack.png')}
              alt="appStoreBlack"
            />
            <img
              className="img"
              src={require('../images/playStoreBlack.png')}
              alt="playStoreBlack"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
