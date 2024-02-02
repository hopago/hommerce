import BannerControl from "./BannerControl";
import BannerHeading from "./BannerHeading";
import BannerImage from "./BannerImage";

export default function Banner() {
  return (
    <div className="domain-banner" style={{ overflow: "hidden" }}>
      <BannerHeading />
      {/* <BannerImage /> */}
      <BannerControl />
    </div>
  );
}
