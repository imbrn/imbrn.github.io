import * as React from 'react';
import { AnchorStyled, AnchorStyledProps } from './styles';

export function SocialLink({
  children,
  color,
  external = true,
  href,
}: SocialLinkProps): React.ReactElement {
  const anchorAttrs: AnchorStyledProps = {
    color,
    href,
  };

  if (external) {
    anchorAttrs.target = '_blank';
    anchorAttrs.rel = 'noopener noreferrer';
  }

  return <AnchorStyled {...anchorAttrs}>{children}</AnchorStyled>;
}

type SocialLinkProps = React.PropsWithChildren<{
  color: string;
  external?: boolean;
  href: string;
}>;
