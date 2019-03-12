import React from 'react';

import VolunteerList from './VolunteerList';
import StaffList from './StaffList';

export default function Staff({ users }) {
  const staffList = users.filter(user => user.role !== 'volunteer');
  const volunteerList = users.filter(user => user.role === 'volunteer');
  return (
    <div>
      <h3>Staff</h3>
      <StaffList staffList={staffList}/>
      <VolunteerList volunteerList={volunteerList}/>
    </div>
  );
}
