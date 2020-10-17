import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import WikiArticle, { GET_ARTICLE } from './WikiArticle';
import { render, findByTestId, queryAllByTestId, findByText } from '@testing-library/react';

const mocks: ReadonlyArray<MockedResponse<Record<string, ArticleModel>>> = [
  {
    request: {
      query: GET_ARTICLE,
      variables: {
        page: 'Page Title',
      },
    },
    result: {
      data: {
        article: {
          title: 'Page Title',
          sections: [
            {
              id: '1',
              title: 'Section 1',
              hierarchy: ['1']
            }
          ],
          categories: ['Cat1', 'Cat2']
        },
      },
    }
  },
];

test('It should render without error', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <WikiArticle page="Page Title" />
    </MockedProvider>
  );
});

test('should render an article', async () => {
  const { container } = render(
    <MockedProvider mocks={mocks}>
      <WikiArticle page="Page Title" />
    </MockedProvider>
  );
  
  const articleElement = await findByTestId(container, 'article');
  expect(articleElement).toBeInTheDocument();

  const title = findByText(container, 'Page Title');
  expect(title).toBeTruthy();
})

test('should not render an empty table while no table of contents is available.', async () => {
  const mocks: ReadonlyArray<MockedResponse<Record<string, ArticleModel>>> = [
    {
      request: {
        query: GET_ARTICLE,
        variables: {
          page: 'Page Title',
        },
      },
      result: {
        data: {
          article: {
            title: 'Page Title',
            sections: [],
            categories: ['Cat1', 'Cat2']
          },
        },
      }
    },
  ];
  const { container } = render(
    <MockedProvider mocks={mocks}>
      <WikiArticle page="Page Title" />
    </MockedProvider>
  );
  
  const articleElement = await findByTestId(container, 'article');
  const tableOfContentsElement = await queryAllByTestId(articleElement, 'table-of-contents')
  expect(tableOfContentsElement).toHaveLength(0);
})