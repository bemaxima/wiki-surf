import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import TableOfContents from './TableOfContents';

interface Props {
  title: string;
  categories: string[];
  sections: NormalizedSection[];
}

const Wrapper = styled.div``;
const Title = styled.h2``;

const Article: React.FC<Props> = ({ title, categories, sections }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TableOfContents sections={sections} />
      <Categories items={categories} />
    </Wrapper>
  )
}

export default Article;