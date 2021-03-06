interface NormalizedSection {
  id: string;
  name: string;
  children?: NormalizedSection[];
}

interface SectionModel {
  id: string;
  title: string;
  hierarchy: string[];
}

interface GraphqlArticle {
  article: ArticleModel | null;
}

interface ArticleModel {
  title: string;
  categories: string[];
  sections: SectionModel[];
}