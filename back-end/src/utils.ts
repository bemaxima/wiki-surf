export function normalizeArticle(rawArticle: Article): NormalizedArticle {
  return {
    categories: rawArticle.categories.filter(c => !c.hidden).map(c => c.category),
    title: rawArticle.displaytitle,
    sections: rawArticle.sections.map(section => ({
      id: section.number,
      level: +section.level,
      title: section.line,
      hierarchy: section.number.split('.')
    })),
    externallinks: rawArticle.externallinks
  };
}