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
          placeholder="Nome*"
          required
          onChange={this.handleChange.bind(this, 'name')}
        />
        <input
          type="text"
          className="box"
          placeholder="Email"
          onChange={this.handleChange.bind(this, 'mail')}
        />
        <input
          type="text"
          className="box"
          placeholder="Assunto*"
          required
          onChange={this.handleChange.bind(this, 'inquiry')}
        />
        <textarea
          className="box_msg"
          placeholder="Menssagem*"
          cols="40"
          rows="5"
          onChange={this.handleChange.bind(this, 'msg')}
        />
        <input type="submit" className="btn" value="Enviar Mensagem" />
      </form>
    );
  }
}

export default ContactFormTest;
