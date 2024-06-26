import React from 'react';

export default function WaiterPage() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container border">
        <div className="row">
          <h2>Waiters</h2>
        </div>
        <div className="col h-75 container overflow-auto border">
          <ul>
            <li>Mario</li>
            <li>Giacomo</li>
            <li>Luca</li>
            <li>Melissa</li>
            <li>Roberto</li>
            <li>Angela</li>
          </ul>
        </div>
      </div>
      <div className="h-50 container border d-flex flex-column justify-content-center">
        <form>
          <div className="col-lg-5 mx-auto">
            <div>
              <h2>Create new waiter</h2>
            </div>
            <div>
              <label htmlFor="NameOfNewWaiter" className="form-label">
                Name of new waiter
              </label>
              <input type="text" className="form-control black-border" id="NameOfNewWaiter" required />
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
