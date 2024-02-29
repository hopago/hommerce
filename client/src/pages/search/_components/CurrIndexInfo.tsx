type CurrIndexInfoProps = {
  currIndex: number;
  imagesLength: number;
};

export default function CurrIndexInfo({
  currIndex,
  imagesLength,
}: CurrIndexInfoProps) {
  return (
    <div className="search-ad__container__absolute">
      <div className="horizontal">
        <span className="bold">0{currIndex === imagesLength + 1 ? 5 : currIndex}</span>
        <span>-</span>
        <span className="gray">0{imagesLength}</span>
      </div>
    </div>
  );
}
