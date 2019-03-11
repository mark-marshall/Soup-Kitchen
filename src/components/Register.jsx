import React, { Component } from 'react';

class Register extends Component {
  state = {
    user: {
      name: '',
      surname: '',
      email: '',
      password: '',
      role: '',
    },
  };

  userValuesSet = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
        <div>
          Name:{' '}
          <input
            name="name"
            value={this.state.user.name}
            onChange={this.userValuesSet}
          />
        </div>
        <div>
          Surname:{' '}
          <input
            name="surname"
            value={this.state.user.surname}
            onChange={this.userValuesSet}
          />
        </div>
        <div>
          Email:{' '}
          <input
            name="email"
            value={this.state.user.email}
            onChange={this.userValuesSet}
          />
        </div>
        <div>
          Password:{' '}
          <input
            name="password"
            value={this.state.user.password}
            onChange={this.userValuesSet}
          />
        </div>
        <div>
          Role:{' '}
          <select name="role" onChange={this.userValuesSet}>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="volunteer">Volunteer</option>
          </select>
          <button>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
