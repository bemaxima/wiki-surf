function findParentArray(repo: NormalizedSection[], ids: string[]) { 
  let temp = repo;
  let index = 0;
  while(ids.length > index) {
    const id = ids[index++];
    temp = temp.find(x => x.id === id)?.children!;
  }
  return temp;
}

export function normalizeSections(sections: SectionModel[]): NormalizedSection[] {
  const result: NormalizedSection[] = [];

  sections.forEach(section => {
    const hierarchy = section.hierarchy.slice(0, section.hierarchy.length - 1); // Remove the last part.
    const parentArray = findParentArray(result, hierarchy);
    
    parentArray.push({
      id: section.hierarchy[section.hierarchy.length - 1],
      name: section.title,
      children: []
    });
  });

  return result;
}