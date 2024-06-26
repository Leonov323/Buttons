import React from 'react';

export default function TablePage() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container border">
        <div className="row">
          <h2>Tables</h2>
        </div>
        <div className="col h-75 container overflow-auto border">
          <ul>
            <li>Table 1</li>
            <li>Table 2</li>
            <li>Table 3</li>
            <li>Table 4</li>
            <li>Table 5</li>
            <li>Table 6</li>
            <li>Table 7</li>
            <li>Table 8</li>
            <li>Table 9</li>
            <li>Table 10</li>
            <li>Table 11</li>
            <li>Table 12</li>
            <li>Table 13</li>
            <li>Table 14</li>
            <li>Table 15</li>
            <li>Table 16</li>
          </ul>
        </div>
      </div>
      <div className="h-50 container border d-flex flex-column justify-content-center">
        <form>
          <div className="col-lg-5 mx-auto">
            <div>
              <h2>Create new table</h2>
            </div>
            <div>
              <label htmlFor="NameOfNewTable" className="form-label">
                Name of new table
              </label>
              <input type="text" className="form-control black-border" id="NameOfNewTable" required />
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
