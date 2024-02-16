import { useEffect, useRef } from "react";
import Author from "./Author";

type AuthorsProps = {
  authors: AuthorInfoShortcut[];
  currIndex: number;
};

export default function Authors({ authors, currIndex }: AuthorsProps) {
  const slideRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.3s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currIndex * 300}px)`;
    }
  }, [currIndex]);

  return (
    <div className="author__wrapper__items">
      <div className="author__wrapper__items__container">
        <ul ref={slideRef}>
          {authors.map((author) => (
            <Author key={author.name} author={author} />
          ))}
        </ul>
      </div>
    </div>
  );
}
