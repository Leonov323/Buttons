import React from 'react';

export default function WaiterDescription() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container border">
        <div className="row">
          <h2>Waiter Mario</h2>
        </div>
        <h4>Assignet tables</h4>
        <div className="col d-flex h-50 container overflow-auto border">
          <ul>
            <li>
              Table 1<a href="#">delete</a>
            </li>
            <li>
              Table 2<a href="#">delete</a>
            </li>
            <li>
              Table 3<a href="#">delete</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-50 container border d-flex flex-column justify-content-center">
        <div>
          <h3>Assign new table</h3>
        </div>
        <div className="form-floating col-lg-5">
          <select className="form-select overflow-auto" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Select table</option>
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
            <option value="4">Table 4</option>
            <option value="5">Table 5</option>
            <option value="6">Table 6</option>
            <option value="7">Table 7</option>
            <option value="8">Table 8</option>
            <option value="9">Table 9</option>
            <option value="10">Table 10</option>
            <option value="11">Table 11</option>
            <option value="12">Table 12</option>
            <option value="13">Table 13</option>
            <option value="14">Table 14</option>
            <option value="15">Table 15</option>
            <option value="16">Table 16</option>
          </select>
          <label htmlFor="floatingSelect">Works with selects</label>
          <button type="submit" className="btn btn-dark mt-2">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
}
