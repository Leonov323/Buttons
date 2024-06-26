import React from 'react';
import Header from '../header';

function Contacts() {
  return (
    <div className="footer-to-bot m-0">
      <Header />
      <form className="col-md-6  mx-auto p-3">
        <section className="col text-center mb-3">
          <h2>CONTACT US</h2>
          <p>We`d love to hear from you!</p>
        </section>
        <div className="row">
          <div className="col mb-3">
            <input type="text" className="form-control black-border" placeholder="Name" aria-label="Name" required />
          </div>
          <div className="col mb-3">
            <input type="text" className="form-control black-border" placeholder="Email" aria-label="Email" required />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <input
              type="text"
              className="form-control black-border"
              placeholder="Subject"
              aria-label="Subject"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control black-border"
              id="formControlTextarea1"
              rows="6"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
