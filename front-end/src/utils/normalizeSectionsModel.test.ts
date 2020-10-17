import { normalizeSections } from './normalizeSectionsModel';

test('Be sure about the normalize section model function works properly on empty arrays', () => {
  const sections: SectionModel[] = [];

  const normalizedModel = normalizeSections(sections);

  expect(normalizedModel).not.toBeNull();
  expect(normalizedModel).toHaveLength(0);
});

test('Be sure about the normalize section model function works properly on data with depth of 1', () => {
  const sections: SectionModel[] = [
    {
      id: "1",
      hierarchy: ["1"],
      level: 1,
      title: "Section 1"
    },
    {
      id: "2",
      hierarchy: ["2"],
      level: 1,
      title: "Section 2"
    }
  ];

  const normalizedModel = normalizeSections(sections);

  expect(normalizedModel).not.toBeNull();
  expect(normalizedModel).toHaveLength(2);

  expect(normalizedModel[0]).not.toBeNull();
  expect(normalizedModel[0].name).toEqual("Section 1");

  expect(normalizedModel[1]).not.toBeNull();
  expect(normalizedModel[1].name).toEqual("Section 2");
});

test('Be sure about the normalize section model function works properly on data with depth of 2', () => {
  const sections: SectionModel[] = [
    {
      id: "1",
      hierarchy: ["1"],
      level: 1,
      title: "Section 1"
    },
    {
      id: "2",
      hierarchy: ["1", "2"],
      level: 2,
      title: "Section 1.1"
    },
    {
      id: "3",
      hierarchy: ["1", "3"],
      level: 2,
      title: "Section 1.2"
    },
    {
      id: "4",
      hierarchy: ["1", "4"],
      level: 2,
      title: "Section 1.3"
    },
    {
      id: "5",
      hierarchy: ["5"],
      level: 1,
      title: "Section 2"
    }
  ];

  const normalizedModel = normalizeSections(sections);

  expect(normalizedModel).not.toBeNull();
  expect(normalizedModel).toHaveLength(2);
  
  expect(normalizedModel[0]).not.toBeNull();
  expect(normalizedModel[0].name).toEqual("Section 1");

  expect(normalizedModel[1]).not.toBeNull();
  expect(normalizedModel[1].name).toEqual("Section 2");

  expect(normalizedModel[0].children).not.toBeNull();
  expect(normalizedModel[0].children?.length).toEqual(3);
  expect(normalizedModel[0].children![0].name).toEqual("Section 1.1");
  expect(normalizedModel[0].children![1].name).toEqual("Section 1.2");
  expect(normalizedModel[0].children![2].name).toEqual("Section 1.3");
});

test('Be sure about the normalize section model function works properly on data with depth of 3', () => {
  const sections: SectionModel[] = [
    {
      id: "1",
      hierarchy: ["1"],
      level: 1,
      title: "Section 1"
    },
    {
      id: "2",
      hierarchy: ["1", "2"],
      level: 2,
      title: "Section 1.1"
    },
    {
      id: "3",
      hierarchy: ["1", "2", "3"],
      level: 2,
      title: "Section 1.1.1"
    },
    {
      id: "4",
      hierarchy: ["1", "4"],
      level: 2,
      title: "Section 1.2"
    },
    {
      id: "5",
      hierarchy: ["5"],
      level: 1,
      title: "Section 2"
    }
  ];

  const normalizedModel = normalizeSections(sections);

  expect(normalizedModel).not.toBeNull();
  expect(normalizedModel).toHaveLength(2);
  
  expect(normalizedModel[0]).not.toBeNull();
  expect(normalizedModel[0].name).toEqual("Section 1");

  expect(normalizedModel[1]).not.toBeNull();
  expect(normalizedModel[1].name).toEqual("Section 2");

  expect(normalizedModel[0].children).not.toBeNull();
  expect(normalizedModel[0].children?.length).toEqual(2);
  expect(normalizedModel[0].children![0].name).toEqual("Section 1.1");
  expect(normalizedModel[0].children![1].name).toEqual("Section 1.2");
  
  expect(normalizedModel[0].children![0].children).toHaveLength(1);
  expect(normalizedModel[0].children![0].children![0].name).toEqual("Section 1.1.1");
});