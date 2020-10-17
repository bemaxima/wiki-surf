import React, { useState } from 'react';
import styled from 'styled-components';
import WikiArticle from './WikiArticle';
import { useDebounce } from '../hooks/useDebounce';

const Wrapper = styled.main`
  width: 100%;
  background-color: '#ccc';
`;
const Input = styled.input`
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 5px;
  line-height: 2rem;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Main: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const page = useDebounce(keyword, 500);

  return (
    <Wrapper>
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='Enter the page title ...'
      />
      {page && <WikiArticle page={page} />}
    </Wrapper>
  );
}

export default Main;
