import React from 'react';
import PT from 'prop-types';

export default function SoupKitchenList({ kitchens }) {
  return (
    <div>
      {kitchens.map(kitchen => (
        <div key={kitchen.kitchen}>
          <h4>{kitchen.kitchen}</h4>
          <p>{kitchen.location}</p>
          <p>{kitchen.state}</p>
          <a href={kitchen.link}>Go to kitchen</a>
        </div>
      ))}
    </div>
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
