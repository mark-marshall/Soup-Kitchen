import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import soupStyles from '../styles/styles';

const VolunteerHeaderWrapper = styled.div`
  background-color: ${soupStyles.color.primary};
  height: ${soupStyles.height.divider};
  display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifySecondary};
  align-items: ${soupStyles.display.alignDefault};
  border-top-right-radius: ${soupStyles.border.radiusSmall};
  border-top-left-radius: ${soupStyles.border.radiusSmall};

  div {
    padding: ${soupStyles.padding.inputPlus};
    width:${soupStyles.width.navElement};
  }

  p, h2 {
    font-size: ${soupStyles.fontSize.medium};
    color: ${soupStyles.color.neutral};
  }

  button {
    background-color: ${lighten(0.1, soupStyles.color.secondary)};
    border: 1px solid ${lighten(0.1, soupStyles.color.secondary)};
    margin-left: ${soupStyles.margin.hundredSplit};
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

export default function VolunteerHeader({ fireLogout }) {
  return (
    <VolunteerHeaderWrapper>
      <div>
        <p>{moment().format('ll')}</p>
      </div>
      <div>
        <h2>Happy Volunteering<span role="img" aria-label="peace"> ✌️</span></h2>
      </div>
      <div>
        <button onClick={fireLogout}>Log out</button>
      </div>
    </VolunteerHeaderWrapper>
  );
}
