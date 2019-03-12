import React from 'react';

export default function StaffList({ staffList }) {
  return (
    <div>
      <h4>StaffList</h4>
      {staffList.map(staff => (
        <div key={staff.id}>
          <h4>
            {`${staff.firstname} ${staff.lastname}`}
          </h4>
          <p>{staff.email}</p>
          <p>Role: {staff.role}</p>
        </div>
      ))}
    </div>
  );
}
