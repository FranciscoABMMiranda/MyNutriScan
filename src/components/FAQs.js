import React from 'react';
import { Collapse, Icon } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
            You can find the answers you might be looking for below!
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
            <div className="title">Application</div>
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
                  header="This is panel header 1"
                  key="1"
                  style={customPanelStyle}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="This is panel header 2"
                  key="2"
                  style={customPanelStyle}
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="This is panel header 3"
                  key="3"
                  style={customPanelStyle}
                >
                  <p>{text}</p>
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
