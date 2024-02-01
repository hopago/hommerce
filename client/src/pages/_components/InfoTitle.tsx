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
      <ul className="recommend-books__today-pick__info__wrapper__category-list">
        {categoryArr.map((c) => (
          <li key={c}>
            {/* TODO: ACTIVE STATE */}
            <div />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="recommend-books__today-pick__info">
      <div className="recommend-books__today-pick__info__wrapper">
        <h1>{title}</h1>
        {category}
      </div>
    </div>
  );
}
