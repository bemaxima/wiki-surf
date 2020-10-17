import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 10px auto;
`
const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Header: React.FC = () => (
  <Wrapper>
    <Title>BESTSELLER Fullstack Challenge</Title>
  </Wrapper>
);

export default Header;