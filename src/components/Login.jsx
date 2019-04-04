import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import soupStyles from '../styles/styles';

const LoginWrapper = styled.div `
height: ${soupStyles.height.subComponentLevel};
width: ${soupStyles.width.subComponentLevel};
display: ${soupStyles.display.default};
flex-direction: ${soupStyles.display.directionSecondary};
align-items: ${soupStyles.display.alignDefault};
justify-content: ${soupStyles.display.alignDefault};
background-color: ${lighten(0.05, soupStyles.color.primary)};
border-bottom-right-radius: ${soupStyles.border.radiusStandard};
border-bottom-left-radius: ${soupStyles.border.radiusStandard};

@media (max-width: 900px) {
  width: ${soupStyles.width.mobileComponentLevel};
}

@media (max-width: 600px) {
  width: ${soupStyles.width.nearlyThere};
}

input {
  font-size: ${soupStyles.fontSize.medium};
  background-color: ${lighten(0.05, soupStyles.color.primary)};
  width: ${soupStyles.width.input};
  height: ${soupStyles.height.input};
  border-radius: ${soupStyles.border.radiusSmall};
  padding: ${soupStyles.padding.input};
  margin-bottom: ${soupStyles.margin.mediumPlus};
  border: 1px solid ${lighten(0.05, soupStyles.color.primary)};
  border-bottom: 1px dotted ${soupStyles.color.secondary};

  &::placeholder {
    color: ${soupStyles.color.default};
    text-transform: ${soupStyles.text.transformSecondary};
  }
}

select {
  font-size: ${soupStyles.fontSize.small};
  width: ${soupStyles.width.input};
  padding: ${soupStyles.padding.input};
  height: ${soupStyles.height.input};
  color: ${soupStyles.color.default};
  border: 1px solid ${lighten(0.05, soupStyles.color.primary)};
  background-color: ${lighten(0.05, soupStyles.color.primary)};
  margin-top: ${soupStyles.margin.medium};
  margin-bottom: ${soupStyles.margin.largePlus};
  text-transform: ${soupStyles.text.transformSecondary};
}

button {
  background-color: ${soupStyles.color.success};
  border: 1px solid ${soupStyles.color.success};
  font-size: ${soupStyles.fontSize.medium};
  border-radius: ${soupStyles.border.radiusMedium};
  color: ${soupStyles.color.neutral};
  padding: ${soupStyles.padding.default};
  width: ${soupStyles.width.input};
  margin-bottom: ${soupStyles.margin.large};
  cursor: ${soupStyles.cursor.default};

  &:hover {
    background-color: ${darken(0.1, soupStyles.color.success)};
    border: 1px solid ${darken(0.1, soupStyles.color.success)};
  }
}
`;

export default function Login({ loginUser, loginValuesSet, fireLogin }) {
  return (
    <LoginWrapper>
      <div>
        <input name="email" placeholder="Email" value={loginUser.email} onChange={loginValuesSet} />
      </div>
      <div>
        <input
          name="password"
          placeholder="Password"
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
      <button onClick={() => fireLogin(loginUser)}>Log In<span role="img" aria-label="spark">💥</span></button>
    </LoginWrapper>
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
