import * as React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../styles/global';

export function LayoutBase({ children }: BasicLayoutProps): React.ReactElement {
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
}

type BasicLayoutProps = React.PropsWithChildren<{}>;
