type TBook = {
  id: number;
  img: string;
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