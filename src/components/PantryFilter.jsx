import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import soupStyles from '../styles/styles';

const PantryFilterWrapper = styled.div`
select {
  background-color:  ${soupStyles.color.defaultSecondary};
  font-size: ${soupStyles.fontSize.small};
  width: ${soupStyles.width.inputSmall};
  padding: ${soupStyles.padding.input};
  height: ${soupStyles.height.inputSmall};
  color: ${soupStyles.color.default};
  border: 1px solid ${soupStyles.color.defaultSecondary};
  margin-bottom: ${soupStyles.margin.medium};
  margin-right: ${soupStyles.margin.twentySplit};
  text-transform: ${soupStyles.text.transformSecondary};
}
`;

export default function PantryFilter({
  fireItemFilter,
}) {
  return (
    <PantryFilterWrapper>
      <select name="categoryID" onChange={fireItemFilter}>
        <option value="0">No Filter</option>
        <option value="1">Fruits</option>
        <option value="2">Vegetables</option>
        <option value="3">Utensils</option>
        <option value="4">Dairy</option>
        <option value="5">Proteins</option>
        <option value="6">Beverages</option>
        <option value="7">Dishware</option>
        <option value="8">Grains</option>
        <option value="9">Spices</option>
        <option value="10">Sauces</option>
      </select>
    </PantryFilterWrapper>
  );
}

PantryFilter.propTypes = {
  fireItemFilter: PT.func.isRequired,
}
