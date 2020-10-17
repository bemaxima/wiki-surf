import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`

const ConentWrapper: React.FC = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default ConentWrapper;