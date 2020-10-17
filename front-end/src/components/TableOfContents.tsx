import React from 'react';
import styled from 'styled-components';

interface Props {
  sections: NormalizedSection[];
}

const Wrapper = styled.div`
  border: solid 1px #ccc;
  margin-top: 15px;
  border-radius: 5px;
  width: 100%;
  padding-bottom: 10px;
`;

const List = styled.ul`
  padding-left: 16px;
  box-sizing: border-box;
  padding-top: 2px;
`;

const ListItem = styled.li`
  padding: 5px 0;
  padding-bottom: 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  padding: 12px;
  border-bottom: solid 1px #ccc;
  font-weight: bold;
`;

const TableOfContents: React.FC<Props> = ({ sections }) => {

  const renderChildren = (children: NormalizedSection[], prefix: string) => (
    <List>
      {
        children.map((child, index) => {
          const currentPrefix = `${prefix ? `${prefix}.` : ''}`;
          const nextPrefix = `${currentPrefix}${index + 1}`;
          const hasChildren = child.children && child.children.length > 0;
          const title = `${nextPrefix}- ${child.name}`;
          return (
            <ListItem key={child.id}>
              {title}
              {hasChildren && renderChildren(child.children!, nextPrefix)}
            </ListItem>
          )
        })
      }
    </List>
  );

  return (
    <Wrapper>
      <Title>Contents</Title>
      {renderChildren(sections, '')}
    </Wrapper>
  );
}

export default TableOfContents;