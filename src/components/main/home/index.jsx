import './style.css';
import { PopUpWrapper } from '../pop-up';
import Catalog from './catalog';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayPopUp: false };
  }

  orderClick = (display) => {
    this.setState({
      displayPopUp: display,
    });

    return (document.body.style.overflow = display ? 'hidden' : 'visible');
  };

  render() {
    return (
      <div>
        <Header />
        <PopUpWrapper display={this.state.displayPopUp} closeCallback={this.orderClick} />
        <div className="presentation">
          <div className="left-block">
            <div>
              <section>
                <h1>The way to better your service</h1>
                <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
              </section>
              <button className="order-button" onClick={() => this.orderClick(true)}>
                <span className="textButtonNormal">Register now</span>
                <span className="textButtonHover">You are awesome!</span>
              </button>
              <span className="link-to-login">
                <p>Already registred?</p>
                <Link to={`/login`}>Login</Link>
              </span>
            </div>
          </div>
          <div className="right-block"></div>
        </div>
        <Catalog />
      </div>
    );
  }
}
