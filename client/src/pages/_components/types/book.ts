type SellWay = "종이책" | "eBook" | "sam";

type SellType = SellWay[];

type UnitType = "원";

type TBook = {
  id: number;
  images?: string[];
  representImg: string;
  parentCategory: BookParentCategory;
  category: BookSubCategory;
  title: string;
  author: string;
  discount?: string;
  price: number;
  eBookPrice?: number;
  unit: UnitType;
  comment?: string;
  desc?: string;
  publisher: string;
  sellType?: SellType;
};

type TBooks = TBook[];

type TBookShortcut = Pick<
  TBook,
  "author" | "category" | "representImg" | "title" | "id"
>;

type TBookOptional = Partial<TBook>;
