import React from 'react';
import './style.css';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log('handleEmailChange', this);
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    console.log('handlePasswordChange', this);
    this.setState({ password: event.target.value });
  }

  handleRepeatPasswordChange(event) {
    console.log('handleReapetPasswordChange', this);
    this.setState({ repeatPassword: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    return this.state.password != this.state.repeatPassword
      ? console.log('wrong password')
      : console.log('form submitted and values is', this.state.email, this.state.password, this.state.repeatPassword);
    // if (this.state.password != this.state.repeatPassword) {
    //   console.log('wrong password');
    // } else {
    //   console.log('form submitted and values is', this.state.email, this.state.password, this.state.repeatPassword);
    // }
  }

  render() {
    return (
      <div className="container">
        <form className="col mx-auto" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <h2>Fill in the form!</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="validationCustom01" className="form-label">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={this.handleEmailChange}
              id="validationCustom01"
              type="text"
              className="form-control black-border"
              placeholder="example@gmail.com"
              aria-label="Email"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              id="validationCustom02"
              type="password"
              className="form-control black-border"
              placeholder="*******"
              aria-label="Phone number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="validationCustom03" className="form-label">
              Repeat assword
            </label>
            <input
              value={this.state.repeatPassword}
              onChange={this.handleRepeatPasswordChange}
              id="validationCustom03"
              type="password"
              className="form-control black-border"
              placeholder="*******"
              aria-label="Phone number"
              required
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-dark">
              Register
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default RegisterForm;
