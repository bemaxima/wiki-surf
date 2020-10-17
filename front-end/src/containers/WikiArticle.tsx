import React from 'react';
import Article from '../components/Article';
import { gql, useQuery } from '@apollo/client';
import { normalizeSections } from '../utils/normalizeSectionsModel';
import Loading from '../components/Loading';
import UnhandledError from '../components/UnhandledError';
import NotFound from '../components/NotFound';
import ConentWrapper from '../components/ContentWrapper';

interface Props {
  page: string;
}

export const GET_ARTICLE = gql`
  query getArticle($page: String) {
    article(page: $page) {
      title
      categories
      sections {
        title
        id
        hierarchy
      }
    }
  }
`;

const WikiArticle: React.FC<Props> = ({ page }) => {
  const { loading, error, data } = useQuery<GraphqlArticle>(
    GET_ARTICLE,
    {
      variables: {
        page
      }
    }
  );

  return (
    <ConentWrapper>
      {
        (() => {
          if (loading) {
            return <Loading />
          }
          if (error) {
            return <UnhandledError />
          }
          else {
            const { article } = data!;
            if (!article) {
              return <NotFound />
            }
            return (
              <Article
                categories={article.categories.map(c => c.split('_').join(' '))}
                title={article.title}
                sections={normalizeSections(article.sections)}
              />
            );
          }
        })()
      }
    </ConentWrapper>
  )
}

export default WikiArticle;