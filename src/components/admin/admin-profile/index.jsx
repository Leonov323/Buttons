import React from 'react';

export default function AdminProfile() {
  return (
    <div className="col h-100 container">
      <div className="h-50">
        <h4>
          Your email adress: <span>example@example.com</span>
        </h4>
        <h4>
          Your subscription is valid up to: <span>15/09/2022</span>
        </h4>
        <h4>
          locations: <span>2</span>
        </h4>
        <h4>
          Tables: <span>16</span>
        </h4>
        <h4>
          Waiters: <span>6</span>
        </h4>
      </div>
      <div className="h-50"></div>
    </div>
  );
}
