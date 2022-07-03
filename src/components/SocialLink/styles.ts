import { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

export const AnchorStyled = styled.a<AnchorStyledProps>`
  display: inline-block;
  background-color: ${(props) => props.color};
  color: var(--color-background);
  border-radius: var(--radius-small);
  padding: 0rem 0.8rem;
  margin: 0.2rem 0.4rem;
  text-decoration: none;
  font-weight: bold;
`;

export type AnchorStyledProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  color: string;
};
