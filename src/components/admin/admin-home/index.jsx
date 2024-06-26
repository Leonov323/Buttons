import React from 'react';
import AdminHeader from '../admin-header';
import CreateNewLocation from '../admin-right-panel/create-new-location';
import LocationPage from '../admin-right-panel/create-new-location/location-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLeftNav from '../admin-left-nav/index.jsx';
import TablePage from '../admin-right-panel/table-page';
import TableDescription from '../admin-right-panel/table-page/table-description';
import WaiterPage from '../admin-right-panel/waiter-page';
import WaiterDescription from '../admin-right-panel/waiter-page/waiter-description';
import AdminProfile from '../admin-profile';
import AdminContacts from '../admin-contacts';

export default function AdminHome() {
  return (
    <Router>
      <div className="footer-to-bot container-fluid">
        <AdminHeader />
        <div className="row">
          <AdminLeftNav />
          <div className="col bg-white border vh-85 p-0">
            <Switch>
              <Route path="/name-of-location">
                <LocationPage />
              </Route>
              <Route path="/table-page">
                <TablePage />
              </Route>
              <Route path="/table-description">
                <TableDescription />
              </Route>
              <Route path="/waiter-page">
                <WaiterPage />
              </Route>
              <Route path="/waiter-description">
                <WaiterDescription />
              </Route>
              <Route path="/admin-profile">
                <AdminProfile />
              </Route>
              <Route path="/admin-contacts">
                <AdminContacts />
              </Route>
              <Route path="/">
                <CreateNewLocation />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
