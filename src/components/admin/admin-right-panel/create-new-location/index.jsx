import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CreateNewLocation() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container border">
        <div className="row">
          <h2>Your locations</h2>
        </div>
        <div className="col h-75 container overflow-auto border">
          <ul>
            <li>
              <NavLink to="/name-of-location">My location 1.</NavLink> Jopa street 11
            </li>
            <li>
              <NavLink to="/name-of-location">My location 2.</NavLink> Jopa street 22
            </li>
          </ul>
        </div>
      </div>
      <div className="h-50 container border d-flex flex-column justify-content-center">
        <form>
          <div className="col-lg-5 mx-auto">
            <div>
              <h2>Create new location</h2>
            </div>
            <div>
              <label htmlFor="NameOfNewLocation" className="form-label">
                Name of new location
              </label>
              <input type="text" className="form-control black-border" id="NameOfNewLocation" required />
            </div>
            <div>
              <label htmlFor="Adress" className="form-label">
                Adress of new location
              </label>
              <input type="text" className="form-control black-border" id="Adress" required />
            </div>
            <div>
              <button type="submit" className="btn btn-dark mt-2">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
