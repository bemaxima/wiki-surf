import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import WikiArticle, { GET_ARTICLE } from './WikiArticle';
import { render, findByTestId, findByText } from '@testing-library/react';

const mocks: ReadonlyArray<MockedResponse<Record<string, ArticleModel>>> = [
  {
    request: {
      query: GET_ARTICLE,
      variables: {
        page: 'BMW',
      },
    },
    result: {
      data: {
        article: {
          title: 'BMW',
          sections: [],
          categories: ['Cat1', 'Cat2']
        },
      },
    }
  },
];

test('It should render without error', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <WikiArticle page="BMW" />
    </MockedProvider>
  );
});

test('should render an article', async () => {
  const { container } = render(
    <MockedProvider mocks={mocks}>
      <WikiArticle page="BMW" />
    </MockedProvider>
  );
  
  const articleElement = await findByTestId(container, 'article');
  expect(articleElement).toBeInTheDocument();

  const title = findByText(container, 'BMW');
  expect(title).toBeTruthy();
})