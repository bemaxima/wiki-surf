import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import TableOfContents from './TableOfContents';

interface Props {
  title: string;
  categories: string[];
  sections: NormalizedSection[];
}

const Wrapper = styled.div`
  margin-top: 10px;
  width: 99%;
  margin:0 auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Title = styled.h2`
  padding: 20px;
  box-sizing: border-box;
  font-size: 2rem;
  font-weight: bold;
`;

const Column = styled.div`
  flex: 1;
`;

const Offset = styled.div`
  width: 40px;
`

const Article: React.FC<Props> = ({ title, categories, sections }) => {
  return (
    <Wrapper>
      <Column>
        <Title>{title}</Title>
        <Categories items={categories} />
      </Column>
      <Offset />
      <Column>
        <TableOfContents sections={sections} />
      </Column>
    </Wrapper>
  )
}

export default Article;