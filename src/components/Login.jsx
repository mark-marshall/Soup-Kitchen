import React from 'react';

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
          value={loginUser.password}
          onChange={loginValuesSet}
        />
      </div>
      <select name="role" onChange={loginValuesSet}>
          <option disable="true">
            Choose a role
          </option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="volunteer">Volunteer</option>
        </select>
      <button onClick={() => fireLogin(loginUser)}>Log In</button>
    </div>
  );
}
