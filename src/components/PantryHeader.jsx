import React from 'react';
import PT from 'prop-types';

import PantryFilter from './PantryFilter';
import PantrySearch from './PantrySearch';

export default function PantryHeader({
  fireItemFilter,
  currentlySearched,
  fireSearchItems,
}) {
  return (
    <div>
      <PantryFilter
        fireItemFilter={fireItemFilter}
      />
      <PantrySearch
        currentlySearched={currentlySearched}
        fireSearchItems={fireSearchItems}
      />
    </div>
  );
}

PantryHeader.propTypes = {
  fireItemFilter: PT.func.isRequired,
  fireSearchItems: PT.func.isRequired,
  currentlySearched: PT.string.isRequired,
}
