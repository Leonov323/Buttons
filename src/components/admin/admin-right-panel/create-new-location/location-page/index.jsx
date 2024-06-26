import React from 'react';

export default function LocationPage() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container border">
        <div className="row">
          <h2>My location 1</h2>
        </div>
        <div className="col h-75 container overflow-auto border">
          <ul>
            <li>adress: Jopa street 11.</li>
            <li>Number of tables: 16</li>
            <li>Number of waiters: 6</li>
          </ul>
        </div>
      </div>
      <div className="row h-50 mx-auto">
        <form className="col-lg-6 border d-flex align-items-center">
          <div className="col-9 mx-auto mt-3 mb-3">
            <div>
              <h2>Create new table</h2>
            </div>
            <div>
              <div>
                <label htmlFor="NameOfNewLocation" className="form-label">
                  Name of new table
                </label>
                <input type="text" className="form-control black-border" id="NameOfNewLocation" required />
              </div>
              <div>
                <button type="submit" className="btn btn-dark mt-2">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
        <form className="col-lg-6 float-left border d-flex align-items-center">
          <div className="col-9 mx-auto mt-3 mb-3">
            <div>
              <h2>Create new waiter</h2>
            </div>
            <div>
              <div>
                <label htmlFor="NameOfNewLocation" className="form-label">
                  Name of new waiter
                </label>
                <input type="text" className="form-control black-border" id="NameOfNewLocation" required />
              </div>
              <div>
                <button type="submit" className="btn btn-dark mt-2">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
