import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import soupStyles from '../styles/styles';

const StaffListWrapper = styled.div `
display: ${soupStyles.display.default};
flex-wrap: ${soupStyles.display.wrapDefault};
justify-content: ${soupStyles.display.justifyTertiary};
padding-bottom: ${soupStyles.padding.bumper};
`;

const StaffCard = styled.div `
width: ${soupStyles.width.thirdSplit};
height: ${soupStyles.height.card};
background-color: ${pr => pr.role === 'admin' ? lighten(0.2,soupStyles.color.fun) : lighten(0.2,soupStyles.color.secondary)};
color: ${soupStyles.color.neutral};
margin: ${soupStyles.margin.small};
display: ${soupStyles.display.default};
flex-direction: ${soupStyles.display.directionSecondary};
justify-content: ${soupStyles.display.justifyQuart};
align-items: ${soupStyles.display.alignDefault};
border-radius: ${soupStyles.border.radiusStandard};
cursor: ${soupStyles.cursor.default};

h4 {
  font-size: ${soupStyles.fontSize.large};
}

p {
  font-size: ${soupStyles.fontSize.medium};
}

.email {
  color: ${darken(0.1,soupStyles.color.success)};
  font-size: ${soupStyles.fontSize.medium};
}
`;

export default function StaffList({ staffList }) {
  return (
    <StaffListWrapper>
      {staffList.map(staff => (
        <StaffCard key={staff.id} role={staff.role}>
          <h4>
            {`${staff.firstname} ${staff.lastname}`}
          </h4>
          <a className="email" href={`mailto:${staff.email}`}>{staff.email}</a>
          <p>Role: {staff.role}</p>
        </StaffCard>
      ))}
    </StaffListWrapper>
  );
}

StaffList.propTypes = {
  staffList: PT.arrayOf(PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  })),
}
