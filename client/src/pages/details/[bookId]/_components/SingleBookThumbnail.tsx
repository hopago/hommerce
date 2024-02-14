type SingleBookThumbnailProps = {
  info: {
    img: string | string[];
  };
};

export default function SingleBookThumbnail({
  info,
}: SingleBookThumbnailProps) {
  if (typeof info.img === "string") {
    return (
      <div className="details-single-book__horizontal__thumbnail">
        <div className="img-wrap">
          <img src={info.img} alt="" />
        </div>
      </div>
    );
  }

  if (Array.isArray(info.img) && info.img.length > 1) {
    return (
      <div className="details-single-book__horizontal__img-slide">slide</div>
    );
  }

  return null;
}
