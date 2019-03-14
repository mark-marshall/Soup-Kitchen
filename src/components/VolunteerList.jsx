import React from 'react';
import PT from 'prop-types';

export default function VolunteerList({ volunteerList }) {
    return (
        <div>
        {volunteerList.map(volunteer => (
          <div key={volunteer.id}>
            <h4>
              {`${volunteer.firstname} ${volunteer.lastname}`}
            </h4>
            <a href={`mailto:${volunteer.email}`}>{volunteer.email}</a>
          </div>
        ))}
      </div>
    )
}

VolunteerList.propTypes = {
  volunteerList: PT.arrayOf(PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  })),
}
