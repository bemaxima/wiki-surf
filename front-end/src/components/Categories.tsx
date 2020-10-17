import React from 'react';
import styled from 'styled-components';

interface Props {
  items: string[];
}

const Wrapper = styled.div``;
const Category = styled.div``;

const Categories: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      {
        items.map(
          (category, index) =>
            <Category key={`${category}-${index}`}>{category}</Category>)
      }
    </Wrapper>
  )
}

export default Categories;