type ReviewDescProps = {
  desc: string;
};

export default function ReviewDesc({ desc }: ReviewDescProps) {
  return (
    <div className="review-list__item__wrapper__review-desc">
      <span>{desc}</span>
    </div>
  );
}
