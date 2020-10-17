
import { gql } from 'apollo-server';

export default gql`
  type Section {
    level: Int
    title: String
    id: String
    hierarchy: [String]
  }

  type Article {
    title: String
    categories: [String]
    sections: [Section]
    externallinks: [String]
  }

  type Query {
    """
    Fetch an article by name. 
    """
    article(page: String): Article
  }
`;