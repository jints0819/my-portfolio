import React from 'react';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      'email':'',
      'name':'',
      'message':''
    };

    this.errors = {
      name: true,
      email: true,
      message:true
    };

    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateMessage = this.validateMessage.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  validateName(name) {
      if (name.length <3) {
          this.errors.name = true;
          return false;
      }

      this.errors.name = false;
      return true;
  }

  validateEmail(email) {
      if (!/.+@.+\..+/.test(email)) {
          this.errors.email = true;
          return false;
      }
      this.errors.email = false;
      return true;
  }

  validateMessage(message) {
    if (message.length <2) {
        this.errors.message = true;
        return false;
    }

    this.errors.message = false;
    return true;
  }

  handleEmailChange(email){
    this.setState({email: email});
  }

  handleNameChange(name){
    this.setState({name: name});
  }

  handleMessageChange(message){
    this.setState({message: message});
  }



  handleSubmit(e){
    e.preventDefault();

    if (this.errors.email) {
      alert('Please enter a valid email address');
      return;
    } else if (this.errors.name) {
      alert('Please enter a name having a minimum of 3 characters');
      return;
    } else if (this.errors.message) {
      alert('Please enter a message having a minimum of 3 characters');
      return;
    }

    console.log("email:"+ this.state.email);
    console.log("name:"+ this.state.name);
    console.log("message:"+ this.state.message);

    e.target.reset();
    this.setState({
      name: '',
      email:'',
      message:''
      });
  }


  render(){
    return (
      <div className="container">
      <br/>
      <section>
      <h2 className="text-center text-secondary">Contact Me</h2>
      <hr className="star-dark"></hr>
      </section>
      <section className="section section--description">

      <form action="https://formspree.io/emilylu840819@gmail.com" method="POST" onSubmit={this.handleSubmit} >

      <div className="section__description">
      <TextInput label={"Name"} type={"text"} name='name'
      validate={this.validateName}
      handleChange={this.handleNameChange} />
      <br/>
      <TextInput label={"Email"} type={"text"} name='replyto'
      validate={this.validateEmail}
      handleChange={this.handleEmailChange} />
      <br/>
    <TextAreaInput label={"Message"} name='message'
      validate={this.validateMessage}
      handleChange={this.handleMessageChange} />
           <input className="button" type="submit" value="Send Message" />
      </div>
      </form>
      </section>
      </div>
    );
  }
}

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.validate(e.target.value)
    this.props.handleChange(e.target.value);
  }

  render(){
    return(
      <div>
      <div className="label">
      {this.props.label}
      </div>
      <input className="input" type={this.props.type}
      value={this.props.value}
      onChange={this.handleChange} />
      </div>
    );
  }

}

class TextAreaInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
  this.props.validate(e.target.value)
  this.props.handleChange(e.target.value);
  }
  render(){
    return (
      <div>
      <div className="label">
      {this.props.label}
      </div>
      <textarea className="messages" rows="4" cols="50"
      value={this.props.value}
      onChange={this.handleChange} />
      </div>
    );
  }
}

export default ContactForm;
