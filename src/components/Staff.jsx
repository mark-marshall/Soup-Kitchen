import React from 'react';

import VolunteerList from './VolunteerList';
import StaffList from './StaffList';

export default function Staff() {
  return (
    <div>
      <h3>Staff</h3>
      <StaffList />
      <VolunteerList />
    </div>
  );
}
