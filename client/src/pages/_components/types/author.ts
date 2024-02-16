/* author-referrer / name, job, intro, books: TBookShortcut[] */

type AuthorInfo = {
  name: string;
  job: string;
  intro: string;
  books: TBookShortcut[];
  representBook: string;
  img: string;
};

type AuthorsInfo = {
  name: string;
  job: string;
  intro: string;
  books: TBookShortcut[];
  representBook: string;
  img: string;
}[];

type AuthorInfoShortcut = Pick<AuthorInfo, "name" | "img" | "representBook">;