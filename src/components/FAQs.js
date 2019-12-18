import React from 'react';
import { Collapse, Icon } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const { Panel } = Collapse;

const texts = [
  {
    text: `
    O objetivo da aplicação é ajudar os utilizadores a tomar decisões mais informadas e saudáveis aquando da escolha de um produto alimentar no supermercado. Essa escolha é auxiliada através de um feedback personalizado que combina as necessidades nutricionais do utilizador com a informação nutricional do produto alimentar aquando do scan do código de barras do produto alimentar.
    `
  },
  {
    text: `
    É muito simples! #1 Preenche o teu plano nutricional. #2 Selecciona o plano que pretendes utilizar. #3 Faz scan do código de barras do produto alimentar. #3 Recebe feedback instantâneo e personalizado! Este processo está também descrito através de infográficos na secção "How to use” no menu principal.
    `
  },
  {
    text: `
    Apenas o teu smartphone com câmera fotográfica e ligação à internet!
    `
  },
  {
    text: `
    Experimenta afastar a câmara do código de barras do produto até que o telemóvel consiga focar e consequentemente reconhecer o código de barras. Caso a dificuldade permaneça, envia email para support@mynutriscan.com.
    `
  },
  {
    text: `
    Infelizmente, esse produto ainda não se encontra na nossa base de dados. No entanto, poderás contribuir para uma base de dados de produtos alimentares mais completa fazendo upload de apenas 3 fotografias do produto alimentar e seguindo as instruções dadas. Desta forma, também ganharás abacates que poderão mais tarde ser trocadas por recompensas.
    `
  },
  {
    text: `
    A aplicação funciona independentemente do supermercado, apenas está dependente se os produtos desse supermercado estão contemplados na base de dados de produtos alimentares.
    `
  },
  {
    text: `
    A aplicação apenas faz recomendações de produtos alimentares, a decisão final é sempre e totalmente da responsabilidade do consumidor.  
    Relativamente ao algoritmo nutricional, este é baseado em conhecimento científico. No entanto, não conseguimos garantir que toda a informação dos produtos alimentares se encontre constantemente actualizada e correta. Por este motivo, caso encontres algum erro, pedimos que nos comuniques assim que possível para que seja possível corrigi-lo (ver secção “reportar erro” no menu principal).
    `
  },
  {
    text: `
    Desde já, as nossas desculpas! A nossa equipa trabalha diariamente para que a aplicação vá de encontro às necessidades dos seus utilizadores. Dessa forma, sugerimos que entres em contacto connosco (ver secção “contact us”) para que possamos incluir a tua condição de saúde numa das próximas versões.
    `
  },
  {
    text: `
    O algoritmo nutricional é resultado de uma exigente pesquisa científica de estudos acerca dos factores que afectam a alimentação. As principais fontes de informação incluem: European Food Safety Authority (EFSA), World Health Organization (WHO), assim como informação concatenada e disponibilizada pelas seguintes organizações: Associação Portuguesa de Nutrição (APN), Associação Protectora dos Diabéticos de Portugal (APDP), Associação Portuguesa de Celíacos (APC).
    `
  },
  {
    text: `
    Desde já, pedimos desculpa! Nesse caso, sugerimos que entres em contacto connosco (ver secção “contact us”) para que seja corrigido assim que possível.
    `
  },
  {
    text: `
    É muito simples: #1 tira 3  fotografias ao produto em questão e faz upload  #2 Espera que sejam validadas #3 Recebe os correspondentes abacates!
    Este sistema de recompensas pretende incentivar a inserção de novos produtos alimentares  na base de dados. Deste modo, o número de produtos não reconhecidos irá diminuir e assim a experiência de utilização melhorada.
    `
  },
  {
    text: `
    Os utilizadores que fizerem upload de produtos válidos receberão em troca "abacates" que poderão, mais tarde, ser trocados por funcionalidades pagas na aplicação,entre outras vantagens que estamos a preparar para ti! Mais novidades sobre estas vantagens, estarão disponíveis brevemente!
    `
  },
  {
    text: `
    O produto que inserires terá de ser validado pelo nossa equipa, mas faremos tudo para que essa validação seja realizada o mais rapidamente possível. Assim que o produto for validado, serás notificado e receberás os abacates correspondentes.
    `
  },
  {
    text: `
    Os abacates não têm qualquer tipo de validade, pelo que poderão ser trocados por recompensas  a qualquer momento.
    `
  },
  {
    text: `
    Estamos abertos a novas parcerias que possam potenciar as funcionalidades da aplicação. Sugerimos que entres em contacto connosco (ver secção “contact us”) para darmos início às conversações.
    `
  },
  {
    text: `
    Excelente, ficamos muito contentes. Independentemente da área de interesse (algoritmo nutricional, base de dados, aplicação), sugerimos que entres em contacto connosco (ver secção “contact us”) para falarmos como será melhor proceder.
    `
  },
]

const customPanelStyle = {
  width: '50vw',
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#e6e6e6',
  borderRadius: 2,
  marginBottom: 24,
  overflow: 'hidden',
  textAlign: 'left',
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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

class FAQs extends React.Component {
  state = {
    activePanels: [],
  };
  renderPanels() {
    var { activePanels } = this.state;
  }

  onChangePanel(info) {
    var { activePanels } = this.state;
    activePanels = info;
    this.setState({ activePanels });
  }
  render() {
    return (
      <div className="faqs">
        <div className="faqs_header">
          <div className="title">FAQs</div>
          <div className="msg">
            Podes encontrar a resposta para as tuas perguntas abaixo!
          </div>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass="faqs_container"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          <div className="faqs_container_topics">
            <div className="title">Aplicação</div>
            <div className="table">
              <Collapse
                bordered={false}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) => (
                  <Icon type={isActive ? 'minus' : 'plus'} />
                )}
                onChange={this.onChangePanel.bind(this)}
              >
                <Panel
                  header="Qual é o objectivo da aplicação?"
                  key="1"
                  style={customPanelStyle}
                >
                  <p>{texts[0].text}</p>
                </Panel>
                <Panel
                  header="Como funciona?"
                  key="2"
                  style={customPanelStyle}
                >
                  <p>{texts[1].text}</p>
                </Panel>
                <Panel
                  header="O que é preciso para usar?"
                  key="3"
                  style={customPanelStyle}
                >
                  <p>{texts[2].text}</p>
                </Panel>
                <Panel
                  header="Estou com dificuldade em fazer scan do código de barras. O que posso fazer?"
                  key="4"
                  style={customPanelStyle}
                >
                  <p>{texts[3].text}</p>
                </Panel>
                <Panel
                  header="Um produto fez scan mas não deu resultado, porquê?"
                  key="5"
                  style={customPanelStyle}
                >
                  <p>{texts[4].text}</p>
                </Panel>
                <Panel
                  header="Em que supermercados a aplicação funciona?"
                  key="6"
                  style={customPanelStyle}
                >
                  <p>{texts[5].text}</p>
                </Panel>
                <Panel
                  header="Como é que garantem a veracidade da informação do feedback dado?"
                  key="7"
                  style={customPanelStyle}
                >
                  <p>{texts[6].text}</p>
                </Panel>
                <Panel
                  header="A minha condição de saúde (doença/alergia/intolerância) não se encontra  contemplada. Como posso sugerir para ser adicionada?"
                  key="8"
                  style={customPanelStyle}
                >
                  <p>{texts[7].text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>

          <div className="faqs_container_topics">
            <div className="title">Nutrição</div>
            <div className="table">
              <Collapse
                bordered={false}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) => (
                  <Icon type={isActive ? 'minus' : 'plus'} />
                )}
                onChange={this.onChangePanel.bind(this)}
              >
                <Panel
                  header="Quais são os fundamentos científicos do algoritmo?"
                  key="9"
                  style={customPanelStyle}
                >
                  <p>{texts[8].text}</p>
                </Panel>
                <Panel
                  header="Encontrei uma incoerência no feedback nutricional, o que posso fazer para corrigi-lo?"
                  key="10"
                  style={customPanelStyle}
                >
                  <p>{texts[9].text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>

          <div className="faqs_container_topics">
            <div className="title">Sistema de recompensas</div>
            <div className="table">
              <Collapse
                bordered={false}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) => (
                  <Icon type={isActive ? 'minus' : 'plus'} />
                )}
                onChange={this.onChangePanel.bind(this)}
              >
                <Panel
                  header="Como funciona?"
                  key="11"
                  style={customPanelStyle}
                >
                  <p>{texts[10].text}</p>
                </Panel>
                <Panel
                  header="Quais as vantagens?"
                  key="12"
                  style={customPanelStyle}
                >
                  <p>{texts[11].text}</p>
                </Panel>
                <Panel
                  header="Quanto tempo demoro a receber os abacates?"
                  key="13"
                  style={customPanelStyle}
                >
                  <p>{texts[12].text}</p>
                </Panel>
                <Panel
                  header="Qual a validade dos abacates?"
                  key="14"
                  style={customPanelStyle}
                >
                  <p>{texts[13].text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>

          <div className="faqs_container_topics">
            <div className="title">Parceiros</div>
            <div className="table">
              <Collapse
                bordered={false}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) => (
                  <Icon type={isActive ? 'minus' : 'plus'} />
                )}
                onChange={this.onChangePanel.bind(this)}
              >
                <Panel
                  header="Gostava de ser vosso parceiro. Como posso fazer?"
                  key="15"
                  style={customPanelStyle}
                >
                  <p>{texts[14].text}</p>
                </Panel>
                <Panel
                  header="Gostava de contribuir para a vossa aplicação. Como posso fazer?"
                  key="16"
                  style={customPanelStyle}
                >
                  <p>{texts[15].text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>
        
        </Carousel>
      </div>
    );
  }
}

export default FAQs;
