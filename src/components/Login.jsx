import React from 'react';
import PT from 'prop-types';

export default function Login({ loginUser, loginValuesSet, fireLogin }) {
  return (
    <div>
      <h3>Login</h3>
      <div>
        Email:{' '}
        <input name="email" value={loginUser.email} onChange={loginValuesSet} />
      </div>
      <div>
        Password:{' '}
        <input
          name="password"
          type="password"
          value={loginUser.password}
          onChange={loginValuesSet}
        />
      </div>
      <select name="role" onChange={loginValuesSet}>
        <option disable="true">Choose a role</option>
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
        <option value="volunteer">Volunteer</option>
      </select>
      <button onClick={() => fireLogin(loginUser)}>Log In</button>
    </div>
  );
}

Login.propTypes = {
  loginUser: PT.shape({
    email: PT.string.isRequired,
    password: PT.string.isRequired,
    role: PT.string.isRequired,
  }).isRequired,
  loginValuesSet: PT.func.isRequired,
  fireLogin: PT.func.isRequired,
};
