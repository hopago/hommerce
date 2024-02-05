export default function BestFlagBadge({ i }: { i: number }) {
  return (
    <div className="best-flag-badge">
      <span>{i + 1}</span>
    </div>
  );
}
