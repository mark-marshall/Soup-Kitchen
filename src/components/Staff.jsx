import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import VolunteerList from './VolunteerList';
import StaffList from './StaffList';
import soupStyles from '../styles/styles';

const StaffWrapper = styled.div`
background-color: ${lighten(0.78, soupStyles.color.accent)};
border-bottom-right-radius: ${soupStyles.border.radiusSmall};
border-bottom-left-radius: ${soupStyles.border.radiusSmall};
padding-left: ${soupStyles.padding.default};

.staffLists {
  width: ${soupStyles.width.full};
  display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifyTertiary};

  a {
    padding: ${soupStyles.padding.aLink};
    width: ${soupStyles.width.aLink};
    text-align: ${soupStyles.display.alignDefault};
    color: ${soupStyles.color.default};
    background-color: ${soupStyles.color.defaultSecondary};
    text-decoration: ${soupStyles.text.decorationStandard};
    font-size: ${soupStyles.fontSize.small};
    border-radius: ${soupStyles.border.radiusSmall};
    margin-right: ${soupStyles.margin.small};
    text-transform: ${soupStyles.text.transformSecondary};

    &:hover {
      background-color: ${lighten(0.5, soupStyles.color.success)};
    }
  }
  
  .active {
    background-color: ${soupStyles.color.success};
    color: ${soupStyles.color.defaultSecondary};

    &:hover {
      background-color: ${soupStyles.color.success};
    }
  }
}
`;

export default function Staff({ users }) {
  const staffSorted = users.sort(function(a, b) {
    const nameA = a.lastname.toUpperCase();
    const nameB = b.lastname.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const staffList = staffSorted.filter(user => user.role !== 'volunteer');
  const volunteerList = staffSorted.filter(user => user.role === 'volunteer');
  return (
    <StaffWrapper>
      <nav className="staffLists">
        <NavLink exact to="/dashboard/team">Staff</NavLink>
        <NavLink to="/dashboard/team/volunteers">Volunteers</NavLink>
      </nav>
      <Route
        exact
        path="/dashboard/team"
        render={routeProps => (
          <StaffList {...routeProps} staffList={staffList} />
        )}
      />
      <Route
        path="/dashboard/team/volunteers"
        render={routeProps => (
          <VolunteerList {...routeProps} volunteerList={volunteerList} />
        )}
      />
    </StaffWrapper>
  );
}

Staff.propTypes = {
  users: PT.arrayOf(PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  })),
}
