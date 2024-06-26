import React from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="footer-to-bot m-0">
      <Header />
      <form className="col-md-3 mx-auto p-3">
        <div className="mb-4 text-center">
          <h2>LOGIN</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control black-border"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control black-border" id="exampleInputPassword1" required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input black-border" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
        <Link to="/admin">Admin</Link>
      </form>
    </div>
  );
}

export default Login;
