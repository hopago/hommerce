type SellWay = "종이책" | "eBook" | "sam";

type SellType = SellWay[];

type UnitType = "원";

type TBook = {
  id: number;
  title: string;
  price: number;
  author: string;
  representImg: string;
  desc?: string;
  publisher: string;
  parentCategory: BookParentCategory;
  category: BookSubCategory;

  images?: string[];
  discount?: number;
  eBookPrice?: number;
  unit: UnitType;
  comment?: string;
  sellType?: SellType;
};

type TBooks = TBook[];

type TBookShortcut = Pick<
  TBook,
  "author" | "category" | "representImg" | "title" | "id" | "price" | "discount"
>;

type TBookOptional = Partial<TBook>;
