import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import VolunteerList from './VolunteerList';
import StaffList from './StaffList';

export default function Staff({ users }) {
  const staffSorted = users.sort(function(a, b) {
    const nameA = a.lastname.toUpperCase();
    const nameB = b.lastname.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const staffList = staffSorted.filter(user => user.role !== 'volunteer');
  const volunteerList = staffSorted.filter(user => user.role === 'volunteer');
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
