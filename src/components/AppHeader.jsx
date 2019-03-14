import React from 'react';
import styled from 'styled-components';

import soupStyles from '../styles/styles';

const AppHeading = styled.h1 `
font-size: ${soupStyles.fontSize.heading};
font-family: ${soupStyles.font.alternate};
`;

export default function AppHeader() {
  return (
    <AppHeading>
      I'll Serve Soup{' '}
      <span role="img" aria-label="soup">
        🥣
      </span>
    </AppHeading>
  );
}
