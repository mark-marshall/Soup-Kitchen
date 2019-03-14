import React from 'react';
import styled from 'styled-components';

import soupStyles from '../styles/styles';

const AppFooting = styled.h5 `
font-size: ${soupStyles.fontSize.medium};
font-family: ${soupStyles.font.alternate};
text-transform: ${soupStyles.text.transformSecondary};
`;

export default function AppFooter() {
  return (
    <AppFooting>
      Made with{' '}
      <span role="img" aria-label="soup">
        ❤️
      </span>
      in Europe
    </AppFooting>
  );
}
