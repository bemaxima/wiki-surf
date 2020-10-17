interface NormalizedSection {
  level: number;
  title: string;
  id: string;
  hierarchy: string[];
}

interface NormalizedArticle {
  title: string;
  categories: string[];
  sections: NormalizedSection[];
  externallinks: string[];
}