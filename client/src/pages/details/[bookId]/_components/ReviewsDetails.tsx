import PaginateControl from "./PaginateControl";
import ReviewsList from "./ReviewsList";
import ReviewsSortTabList from "./ReviewsSortTabList";

export default function ReviewsDetails() {
  return (
    <div className="details-prod-reviews__wrap__reviews-details">
      <ReviewsSortTabList />
      <ReviewsList />
      <PaginateControl />
    </div>
  );
}
