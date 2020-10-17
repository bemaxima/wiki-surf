import React from 'react';
import styled from 'styled-components';

interface Props {
  items: string[];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Category = styled.div`
  padding: 2px 5px;
`;

const Categories: React.FC<Props> = ({ items }) => {
  const length = items.length;
  return (
    <Wrapper>
      {
        items.map(
          (category, index) => (
            <Category key={`${category}-${index}`}>
              {category}
              {length !== index + 1 && <span> | </span>}
            </Category>
          )
        )
      }
    </Wrapper>
  )
}

export default Categories;