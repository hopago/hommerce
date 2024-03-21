interface IBook {
  images?: string[];
  _id: string;
  representImg: string;
  parentCategory: BookParentCategory[];
  category: BookSubCategory;
  title: string;
  author: string;
  discount?: number;
  price: number;
  eBookPrice?: number;
  unit: UnitType;
  comment?: string;
  desc: string;
  publisher: string;
  sellType?: SellType;
  createdAt: Date;
  updatedAt: Date;
}

type BookData = {
  books: IBook[];
  pagination: {
    totalPages: number;
    totalBooks: number;
  };
};
