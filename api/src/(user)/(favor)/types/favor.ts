type FavorItem = {
  bookId: string;
  title: string;
  author: string;
  img: string;
};

type FavorList = {
  userId: string;
  books: FavorItem[];
};
