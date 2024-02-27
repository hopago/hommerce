type ListItem = {
  title: string;
  author: string;
  publisher: string;
  price: number;
  unit: UnitType;
  reviewTotalRating: number;
  reviewKeyword: string;
};

type List = ListItem[];
