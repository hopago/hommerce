type SellWay = "종이책" | "eBook" | "sam";

type SellType = SellWay[];

type UnitType = "원";

type TBook = {
  id: number;
  img: string | string[];
  parentCategory: BookParentCategory;
  category: BookSubCategory;
  title: string;
  author: string;
  discount?: string;
  price: string;
  eBookPrice?: string;
  unit: UnitType;
  comment?: string;
  desc?: string;
  publisher: string;
  sellType?: SellType;
};

type TBooks = TBook[];

type TBookShortcut = Pick<
  TBook,
  "author" | "category" | "img" | "title" | "id"
>;

type TBookOptional = Partial<TBook>;
