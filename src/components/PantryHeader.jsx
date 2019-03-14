import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import PantryFilter from './PantryFilter';
import PantrySearch from './PantrySearch';
import soupStyles from '../styles/styles';

const PantryHeaderHeader = styled.h1`
  font-size: ${soupStyles.fontSize.medium};
  text-transform: ${soupStyles.text.transformSecondary};
  margin-bottom: ${soupStyles.margin.smallPlus};
`;

const PantryHeaderWrapper = styled.div`
  display: ${soupStyles.display.default};
  justify-content: ${soupStyles.display.justifyTertiary};
  margin-left: ${soupStyles.margin.mediumMinus};
`;

export default function PantryHeader({
  fireItemFilter,
  currentlySearched,
  fireSearchItems,
}) {
  return (
    <div>
      <PantryHeaderHeader>Here's your inventory:</PantryHeaderHeader>
      <PantryHeaderWrapper>
        <PantryFilter fireItemFilter={fireItemFilter} />
        <PantrySearch
          currentlySearched={currentlySearched}
          fireSearchItems={fireSearchItems}
        />
      </PantryHeaderWrapper>
    </div>
  );
}

PantryHeader.propTypes = {
  fireItemFilter: PT.func.isRequired,
  fireSearchItems: PT.func.isRequired,
  currentlySearched: PT.string.isRequired,
};
