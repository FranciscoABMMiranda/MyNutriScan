import React from 'react';

class ContactFormTest extends React.Component {
  handleChange = (elem, event) => {
    var { message } = this.props;
    console.log(message);
    message[elem] = event.target.value;
    this.props.setMessage(message);
  };
  handleSubmit(event) {
    event.preventDefault();
    alert('Your message as been sent');
  }

  render() {
    return (
      <form className="contacts_form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="box"
          placeholder="Name*"
          required
          onChange={this.handleChange.bind(this, 'name')}
        />
        <div className="small">
          <input
            type="text"
            className="small_box"
            placeholder="Email*"
            required
            onChange={this.handleChange.bind(this, 'mail')}
          />
          <input
            type="number"
            className="small_box"
            placeholder="Phone*"
            required
            onChange={this.handleChange.bind(this, 'phone')}
          />
        </div>
        <input
          type="text"
          className="box"
          placeholder="Inquiry Type*"
          required
          onChange={this.handleChange.bind(this, 'inquiry')}
        />
        <textarea
          className="box_msg"
          placeholder="Message"
          cols="40"
          rows="5"
          onChange={this.handleChange.bind(this, 'msg')}
        />
        <input type="submit" className="btn" value="SEND MESSAGE " />
      </form>
    );
  }
}

export default ContactFormTest;
