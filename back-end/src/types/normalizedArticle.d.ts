interface NormalizedSection {
  level: number;
  title: string;
  index: number;
}

interface NormalizedArticle {
  title: string;
  categories: string[];
  sections: NormalizedSection[];
  externallinks: string[];
}