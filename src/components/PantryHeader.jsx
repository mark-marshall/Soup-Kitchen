import React from 'react';

import PantryFilter from './PantryFilter';
import PantrySearch from './PantrySearch';

export default function PantryHeader() {
    return (
        <div>
        <PantryFilter />
        <PantrySearch />
        </div>
    )
}