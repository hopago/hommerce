type CartItem = {
  bookId: string;
  title: string;
  author: string;
  img: string;
  amount: number;
  price: number;
  unit: number;
  discount?: number;
};

type CartList = CartItem[];
