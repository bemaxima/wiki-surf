import React, { useState } from 'react';
import styled from 'styled-components';
import WikiArticle from './containers/WikiArticle';
import { useDebounce } from './hooks/useDebounce';

const Wrapper = styled.div``;
const Input = styled.input``;

function App() {
  const [keyword, setKeyword] = useState('');
  const page = useDebounce(keyword, 500);

  return (
    <Wrapper>
      <Input value={keyword} onChange={e => setKeyword(e.target.value)} />
      {page && <WikiArticle page={page} />}
    </Wrapper>
  );
}

export default App;
