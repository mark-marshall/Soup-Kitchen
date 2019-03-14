import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import soupStyles from '../styles/styles';

const SoupKitchenListWrapper = styled.div `
display: ${soupStyles.display.default};
flex-wrap: ${soupStyles.display.wrapDefault};
justify-content: ${soupStyles.display.justifyTertiary};
padding-bottom: ${soupStyles.padding.bumper};
margin-top: ${soupStyles.margin.medium};
`;

const KitchenCard = styled.div `
width: ${soupStyles.width.thirdSplitSecondary};
height: ${soupStyles.height.cardPlus};
background-color: ${pr => pr.pos % 2 === 0 ? lighten(0.15,soupStyles.color.fun) : lighten(0.25,soupStyles.color.fun)};
color: ${soupStyles.color.neutral};
margin: ${soupStyles.margin.small};
display: ${soupStyles.display.default};
flex-direction: ${soupStyles.display.directionSecondary};
justify-content: ${soupStyles.display.justifyQuart};
align-items: ${soupStyles.display.alignDefault};
border-radius: ${soupStyles.border.radiusStandard};
cursor: ${soupStyles.cursor.default};

h4 {
  font-size: ${soupStyles.fontSize.largePlus};
  text-align: ${soupStyles.display.alignDefault};
  text-transform: ${soupStyles.text.transformSecondary};
  color: ${soupStyles.color.default};
}

p {
  font-size: ${soupStyles.fontSize.medium};
  color: ${soupStyles.color.default};
}

.email {
  color: ${soupStyles.color.defaultSecondary};
  font-size: ${soupStyles.fontSize.medium};
  background-color: ${lighten(0.3,soupStyles.color.success)};
  padding: ${soupStyles.padding.navsSecondary};
  border-radius: ${soupStyles.border.radiusSmall};
  margin-bottom: ${soupStyles.margin.twentySplit};
  text-decoration: ${soupStyles.text.decorationStandard};

  &:hover {
    background-color: ${lighten(0.1, soupStyles.color.success)};
  }
}
`;

export default function SoupKitchenList({ kitchens }) {
  return (
    <SoupKitchenListWrapper>
      {kitchens.map(kitchen => (
        <KitchenCard key={kitchen.kitchen} pos={kitchens.indexOf(kitchen)}>
          <p>{kitchen.location}</p>
          <h4>{kitchen.kitchen}</h4>
          <a className="email" href={kitchen.link}>Volunteer</a>
        </KitchenCard>
      ))}
    </SoupKitchenListWrapper>
  );
}

SoupKitchenList.propTypes = {
  kitchens: PT.arrayOf(PT.shape({
    state: PT.string.isRequired,
    location: PT.string.isRequired,
    kitchen: PT.string.isRequired,
    link: PT.string.isRequired,
  })).isRequired,
}
