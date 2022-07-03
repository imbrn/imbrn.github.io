import * as React from 'react';
import { Helmet } from 'react-helmet';
import { LogoStyled } from './style';

export function Logo(): React.ReactElement {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <LogoStyled>imbrn</LogoStyled>
    </>
  );
}
