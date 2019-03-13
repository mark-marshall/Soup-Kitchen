import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import VolunteerList from './VolunteerList';
import StaffList from './StaffList';

export default function Staff({ users }) {
  const staffList = users.filter(user => user.role !== 'volunteer');
  const volunteerList = users.filter(user => user.role === 'volunteer');
  return (
    <div>
      <h3>Team</h3>
      <nav>
        <NavLink to="/dashboard/team">Staff</NavLink>
        <NavLink to="/dashboard/team/volunteers">Volunteers</NavLink>
      </nav>
      <Route
        exact
        path="/dashboard/team"
        render={routeProps => (
          <StaffList {...routeProps} staffList={staffList} />
        )}
      />
      <Route
        path="/dashboard/team/volunteers"
        render={routeProps => (
          <VolunteerList {...routeProps} volunteerList={volunteerList} />
        )}
      />
    </div>
  );
}
