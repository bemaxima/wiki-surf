import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './containers/Main';
import ResetCSS from './styles/ResetCSS';

const Frame = styled.div`
  max-width: 1024px;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin: 10px auto 0 auto;
  min-height: 95vh;
  padding: 36px 72px;
  box-sizing: border-box;
  background: #daedef;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: 5px;
    max-width: 100%;
    padding: 18px 36px;
  }

  @media (max-width: 320px) {
    padding: 9px 16px;
  }
`;

const App: React.FC = () => (
  <>
    <ResetCSS />
    <Frame>
      <Header />
      <Main />
    </Frame>
  </>
);

export default App;
