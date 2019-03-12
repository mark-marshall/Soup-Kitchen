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
          <a href={`mailto:${staff.email}`}>{staff.email}</a>
          <p>Role: {staff.role}</p>
        </div>
      ))}
    </div>
  );
}
