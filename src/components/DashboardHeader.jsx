import React from 'react';
import moment from 'moment';

export default function DashboardHeader({ user }) {
  return (
    <div>
      <h5>Dash Header</h5>
      <p>{moment().format('ll')}</p>
      <p>Hickory Soup Kitchen</p>
      <p>{user.firstname}</p>
      <img
        src={require('../img/mark.png')}
        alt="user-cartoon"
      />
      <button>Log out</button>
    </div>
  );
}
