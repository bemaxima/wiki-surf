export function normalizeArticle(rawArticle: Article): NormalizedArticle {
  return {
    categories: rawArticle.categories.filter(c => !c.hidden).map(c => c.category),
    title: rawArticle.displaytitle,
    sections: rawArticle.sections.map(section => ({
      index: +section.index,
      level: +section.level,
      title: section.line
    })),
    externallinks: rawArticle.externallinks
  };
}