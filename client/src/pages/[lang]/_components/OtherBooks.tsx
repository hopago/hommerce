import BestFlagBadge from "../../_components/utils/BestFlagBadge";

type OtherBooksProps = {
  books: string[];
};

export default function OtherBooks({ books }: OtherBooksProps) {
  return (
    <div className="lang-page-picks__best__container__book-list__other-books">
      <ul>
        {books.map((title, i) => (
          <li key={`${title}-${i}`}>
            <div className="text-wrap">
              <BestFlagBadge i={i + 2} />
              <div className="span-wrap">
                <span>{title}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
