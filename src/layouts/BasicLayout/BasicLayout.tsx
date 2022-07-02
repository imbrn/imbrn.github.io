import * as React from 'react';
import { Logo } from '../../components/Logo';
import { LayoutBase } from '../base';
import { ChildrenWrapperStyled, HeaderStyled, WrapperStyled } from './styles';

export function BasicLayout({
  children,
}: BasicLayoutProps): React.ReactElement {
  return (
    <LayoutBase>
      <WrapperStyled>
        <HeaderStyled>
          <Logo />
        </HeaderStyled>

        <ChildrenWrapperStyled>{children}</ChildrenWrapperStyled>
      </WrapperStyled>
    </LayoutBase>
  );
}

type BasicLayoutProps = React.PropsWithChildren<{}>;
