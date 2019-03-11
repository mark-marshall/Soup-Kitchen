import React from 'react';

export default function Login({ loginUser, loginValuesSet }) {
    return (
      <div>
        <h3>Login</h3>
        <div>
          Email:{' '}
          <input
            name="email"
            value={loginUser.email}
            onChange={loginValuesSet}
          />
        </div>
        <div>
          Password:{' '}
          <input
            name="password"
            value={loginUser.password}
            onChange={loginValuesSet}
          />
        </div>
        <button>Log In</button>
      </div>
    );
  }
