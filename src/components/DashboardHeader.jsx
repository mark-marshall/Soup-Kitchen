import React from 'react';
import moment from 'moment';
import PT from 'prop-types';

export default function DashboardHeader({ user, fireLogout }) {
  return (
    <div>
      <h5>Dash Header</h5>
      <p>{moment().format('ll')}</p>
      <p>Hickory Soup Kitchen</p>
      <p>{user.firstname}</p>
      <div>AVATAR GOES HERE AS BKCGRD</div>
      <button onClick={fireLogout}>Log out</button>
    </div>
  );
}

DashboardHeader.propTypes = {
  user: PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  }),
  fireLogout: PT.func.isRequired,
}
