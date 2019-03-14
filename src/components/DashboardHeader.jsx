import React from 'react';
import moment from 'moment';
import PT from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import soupStyles from '../styles/styles';

const DashboardHeaderWrapper = styled.div`
  background-color: ${soupStyles.color.primary};
  height: ${soupStyles.height.divider};
  display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifySecondary};
  align-items: ${soupStyles.display.alignDefault};

  div {
    padding: ${soupStyles.padding.inputPlus};
    width: ${soupStyles.width.navElement};
  }

  .soupKitchen {
    text-align: ${soupStyles.display.alignDefault};
  }

  .userCluster {
    display: ${soupStyles.display.default};
    justify-content: ${soupStyles.display.justifyDefault};
    align-items: ${soupStyles.display.alignDefault};
  }

  p {
    font-size: ${soupStyles.fontSize.medium};
    color: ${soupStyles.color.neutral};
  }

  button {
    background-color: ${lighten(0.1, soupStyles.color.secondary)};
    border: 1px solid ${lighten(0.1, soupStyles.color.secondary)};
    border-radius: ${soupStyles.border.radiusSmall};
    width: ${soupStyles.width.smallButton};
    color: ${soupStyles.color.neutral};
    padding: ${soupStyles.padding.smallButton};
    cursor: ${soupStyles.cursor.default};
  
    &:hover {
      background-color: ${darken(0.1, soupStyles.color.secondary)};
      border: 1px solid ${darken(0.1, soupStyles.color.secondary)};
    }
  }
`;

export default function DashboardHeader({ user, fireLogout }) {
  return (
    <DashboardHeaderWrapper>
      <div>
        <p>{moment().format('ll')}</p>
      </div>
      <div className="soupKitchen">
        <p>Hickory Soup Kitchen</p>
      </div>
      <div className="userCluster">
        <p>Welcome {user.firstname}</p>
        <button onClick={fireLogout}>Log out</button>
      </div>
    </DashboardHeaderWrapper>
  );
}

DashboardHeader.propTypes = {
  user: PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  }),
  fireLogout: PT.func.isRequired,
};
