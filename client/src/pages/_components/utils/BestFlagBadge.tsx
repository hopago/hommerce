export default function BestFlagBadge({ i }: { i: number }) {
  return (
    <div
      className="best-flag-badge"
      style={{ backgroundColor: `${i === 0 && "#4DAC27"}` }}
    >
      <span>{i + 1}</span>
    </div>
  );
}
