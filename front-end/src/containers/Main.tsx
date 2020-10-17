import React, { useEffect, useRef, useState } from 'react';
import Input from '../components/Input';
import WikiArticle from './WikiArticle';
import { useDebounce } from '../hooks/useDebounce';

const Main: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const page = useDebounce(keyword, 500);
  const input = useRef<HTMLInputElement>(null);

  useEffect(
    () => {
      input.current?.focus();
    },
    []
  )

  return (
    <>
      <Input
        ref={input}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='Enter the page title ...'
      />
      {page && <WikiArticle page={page} />}
    </>
  );
}

export default Main;
