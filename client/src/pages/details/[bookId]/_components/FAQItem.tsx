type FAQItemProps = {
  title: string;
  desc: string;
};

export default function FAQItem({ title, desc }: FAQItemProps) {
  return (
    <li className="details-faq__list__item">
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}
