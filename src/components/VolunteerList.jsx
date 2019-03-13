import React from 'react';

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