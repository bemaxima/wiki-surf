import React from 'react';
import styled from 'styled-components';

interface Section {
  id: string;
  name: string;
  children?: Section[];
}

interface Props {
  sections: Section[];
}

const Wrapper = styled.div``;
const List = styled.ul``;
const ListItem = styled.li``;

export default function TableOfContents({ sections }: Props) {

  const renderChildren = (children: Section[]) => (
    <List>
      {
        children.map(child => (
          <ListItem key={child.id}>
            {child.name}
            {child.children && renderChildren(child.children)}
          </ListItem>
        ))
      }
    </List>
  );

  return (
    <Wrapper>
      {renderChildren(sections)}
    </Wrapper>
  );
}