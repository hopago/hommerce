type TBook = {
  id: number;
  img: string;
  parentCategory: BookParentCategory;
  category: BookSubCategory;
  title: string;
  author: string;
  discount?: string;
  price: string;
  unit: string;
  comment?: string;
  desc?: string;
  publisher: string;
};

type TBooks = TBook[];

type TBookShortcut = Pick<
  TBook,
  "author" | "category" | "img" | "title" | "id"
>;

type TBookOptional = Partial<TBook>;