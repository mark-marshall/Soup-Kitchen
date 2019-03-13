import React from 'react';
import moment from 'moment';

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
