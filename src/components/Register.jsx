import React from 'react';

export default function Register ({ registerUser, registerValuesSet }) {
    return (
      <div>
        <h3>Register</h3>
        <div>
          Name:{' '}
          <input
            name="name"
            value={registerUser.name}
            onChange={registerValuesSet}
          />
        </div>
        <div>
          Surname:{' '}
          <input
            name="surname"
            value={registerUser.surname}
            onChange={registerValuesSet}
          />
        </div>
        <div>
          Email:{' '}
          <input
            name="email"
            value={registerUser.email}
            onChange={registerValuesSet}
          />
        </div>
        <div>
          Password:{' '}
          <input
            name="password"
            value={registerUser.password}
            onChange={registerValuesSet}
          />
        </div>
        <div>
          Role:{' '}
          <select name="role" onChange={registerValuesSet}>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="volunteer">Volunteer</option>
          </select>
          <button>Register</button>
        </div>
      </div>
    );
  }
