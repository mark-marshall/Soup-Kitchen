import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div>
        <h3>Register</h3>
        <div>
          Name: <input />
        </div>
        <div>
          Surname: <input />
        </div>
        <div>
          Email: <input />
        </div>
        <div>
          Password: <input />
        </div>
        <div>
          Role:{' '}
          <select name="cars">
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Register;
