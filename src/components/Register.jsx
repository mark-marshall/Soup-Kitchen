import React from 'react';
import PT from 'prop-types';

export default function Register({
  registerUser,
  registerValuesSet,
  fireRegistration,
}) {
  return (
    <div>
      <h3>Register</h3>
      <div>
        Name:{' '}
        <input
          name="firstname"
          value={registerUser.firstname}
          onChange={registerValuesSet}
        />
      </div>
      <div>
        Surname:{' '}
        <input
          name="lastname"
          value={registerUser.lastname}
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
          type="password"
          value={registerUser.password}
          onChange={registerValuesSet}
        />
      </div>
      <div>
        Role:{' '}
        <select name="role" onChange={registerValuesSet}>
          <option disable="true">Choose a role</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <button onClick={() => fireRegistration(registerUser)}>Register</button>
      </div>
    </div>
  );
}

Register.propTypes = {
  registerUser: PT.shape({
    firstname: PT.string.isRequired,
    lastname: PT.string.isRequired,
    email: PT.string.isRequired,
    password: PT.string.isRequired,
    role: PT.string.isRequired,
  }).isRequired,
  registerValuesSet: PT.func.isRequired,
  fireRegistration: PT.func.isRequired,
};
