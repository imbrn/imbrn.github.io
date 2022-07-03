import styled from 'styled-components';
import { devices } from '../../styles';

export const HeaderStyled = styled.div``;

export const WrapperStyled = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 4rem 2rem 2rem;

  @media ${devices.tablet} {
    padding-top: 16rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  p {
    font-size: 2rem;
    margin-top: 4rem;
    line-height: 1.5;
  }
`;

export const TopLineStyled = styled.div`
  height: 0.4rem;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  ); ;
`;

export const ChildrenWrapperStyled = styled.div`
  padding-top: 4rem;
`;
