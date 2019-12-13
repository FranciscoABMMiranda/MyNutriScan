import React from 'react';

class ContactFormTest extends React.Component {
  render() {
    return (
      <div className="contacts_form">
        <input type="text" className="box" placeholder="Name*" />
        <div className="small">
          <input
            type="text"
            className="small_box"
            placeholder="Email*"
          />
          <input
            type="number"
            className="small_box"
            placeholder="Phone*"
          />
        </div>
        <input
          type="text"
          className="box"
          placeholder="Inquiry Type*"
        />
        <input
          type="text"
          className="box_msg"
          placeholder="Message"
        />
        <input type="submit" className="btn" value="SEND MESSAGE " />
      </div>
    );
  }
}

export default ContactFormTest;
