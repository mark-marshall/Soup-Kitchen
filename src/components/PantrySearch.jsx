import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import soupStyles from '../styles/styles';

const PantrySearchWrapper = styled.div`
input {
  font-size: ${soupStyles.fontSize.medium};
  background-color: ${soupStyles.color.defaultSecondary};
  width: ${soupStyles.width.inputSmall};
  height: ${soupStyles.height.inputSmall};
  border-radius: ${soupStyles.border.radiusSmall};
  padding: ${soupStyles.padding.input};
  margin-bottom: ${soupStyles.margin.medium};
  border: 1px solid ${soupStyles.color.defaultSecondary};

  &::placeholder {
    color: ${soupStyles.color.default};
    text-transform: ${soupStyles.text.transformSecondary};
  }
}
`;

export default function PantrySearch({
  currentlySearched,
  fireSearchItems,
}) {
  return (
    <PantrySearchWrapper>
      <input
        name="search"
        placeholder="Search"
        value={currentlySearched}
        onChange={fireSearchItems}
      />
    </PantrySearchWrapper>
  );
}

PantrySearch.propTypes = {
  currentlySearched: PT.string.isRequired,
  fireSearchItems: PT.func.isRequired,
}
