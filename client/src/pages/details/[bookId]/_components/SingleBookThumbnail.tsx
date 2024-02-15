type SingleBookThumbnailProps = {
  img: string | string[];
};

export default function SingleBookThumbnail({ img }: SingleBookThumbnailProps) {
  // TODO: images.length > 1 ? <ImgSlide /> : <Img />

  if (typeof img === "string") {
    return (
      <div className="details-single-book__horizontal__thumbnail">
        <div className="img-wrap">
          <img src={img} alt="details-single-book" />
        </div>
      </div>
    );
  }

  if (Array.isArray(img) && img.length > 1) {
    return (
      <div className="details-single-book__horizontal__img-slide">slide</div>
    );
  }

  return null;
}
