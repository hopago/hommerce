import { cn } from "../../../lib/utils";
import { adBannerADType } from "../constants/showcase-ads";

type ADTabInfoProps = {
  setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
  currIndex: number;
};

export default function ADTabInfo({ currIndex, setCurrIndex }: ADTabInfoProps) {
  return (
    <div className="ad-banner__tab-info">
      <ol>
        {adBannerADType.map((ad, i) => (
          <li
            onClick={() => setCurrIndex(i + 1)}
            className={cn("", currIndex - 1 === i && "active")}
            key={`${ad}-${i}`}
          >
            <span>{ad}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
