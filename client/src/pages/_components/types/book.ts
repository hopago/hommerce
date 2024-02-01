type TBook = {
  id: number;
  img: string;
  parentCategory?: BookParentCategory;
  category: string;
  title: string;
  author: string;
  discount?: string;
  price: string;
  unit: string;
  comment?: string;
  desc?: string;
};

type TBooks = TBook[];
