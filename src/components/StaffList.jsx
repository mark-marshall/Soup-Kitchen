import React from 'react';
import PT from 'prop-types';

export default function StaffList({ staffList }) {
  return (
    <div>
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

StaffList.propTypes = {
  staffList: PT.arrayOf(PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  })),
}
