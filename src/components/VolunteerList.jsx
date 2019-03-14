import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import soupStyles from '../styles/styles';

const VolunteerListWrapper = styled.div `
padding-bottom: ${soupStyles.padding.bumper};
`;

const VolunteerCard = styled.div `
width: ${soupStyles.width.nearlyThere};
height: ${soupStyles.height.smallCard};
color: ${soupStyles.color.default};
margin: ${soupStyles.margin.small};
display: ${soupStyles.display.default};
justify-content: ${soupStyles.display.justifySecondary};
align-items: ${soupStyles.display.alignDefault};
border-radius: ${soupStyles.border.radiusStandard};
cursor: ${soupStyles.cursor.default};

h4 {
  font-size: ${soupStyles.fontSize.large};
}

.email {
  color: ${soupStyles.color.neutral};
  font-size: ${soupStyles.fontSize.medium};
  background-color: ${soupStyles.color.secondary};
  padding: ${soupStyles.padding.smallButton};
  border-radius: 2px;

  &:hover {
    background-color: ${darken(0.1, soupStyles.color.secondary)};
  }
}
`;

export default function VolunteerList({ volunteerList }) {
    return (
        <VolunteerListWrapper>
        {volunteerList.map(volunteer => (
          <VolunteerCard key={volunteer.id}>
            <h4>
              {`${volunteer.firstname} ${volunteer.lastname}`}
            </h4>
            <a className="email" href={`mailto:${volunteer.email}`}>Email</a>
          </VolunteerCard>
        ))}
      </VolunteerListWrapper>
    )
}

VolunteerList.propTypes = {
  volunteerList: PT.arrayOf(PT.shape({
    id: PT.number,
    firstname: PT.string,
    lastname: PT.string,
    email: PT.string,
    role: PT.string,
  })),
}
