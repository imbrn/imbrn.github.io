import * as React from 'react';
import { GlobalStyle } from '../styles/global';

export function LayoutBase({ children }: BasicLayoutProps): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

type BasicLayoutProps = React.PropsWithChildren<{}>;
