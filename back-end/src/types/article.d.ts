interface Category {
  sortkey: string;
  category: string;
  hidden?: boolean;
}

interface Link {
  ns: number;
  title: string;
  exists: boolean;
}

interface Section {
  toclevel: number;
  level: string;
  line: string;
  number: string;
  index: string;
  fromtitle: string;
  byteoffset: number,
  anchor: string;
}

interface Article {
  title: string;
  pageid: number;
  revid: number;
  text: string;
  categories: Category[];
  links: Link[];
  images: string[];
  externallinks: string[];
  sections: Section[];
  displaytitle: string;
}



