type InfoTitleProps = {
  title: HeadingCategory;
  category?: BookParentCategoryList;
};

export default function InfoTitle({
  title,
  category: categoryArr,
}: InfoTitleProps) {
  let category: JSX.Element | null = null;

  if (categoryArr) {
    category = (
      <ul className="today-pick__book-info__title__wrapper__category-list">
        {categoryArr.map((c) => (
          <li key={c}>
            {/* icon */}
            <span>{c}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="today-pick__book-info__title">
      <div className="today-pick__book-info__title__wrapper">
        <h1>{title}</h1>
        {category}
      </div>
    </div>
  );
}
