import ReuseButton from "../../../../_components/ReuseButton";
import comment from "../../../../assets/ico_comment_white.png";

export default function FAQHeading() {
  return (
    <div className="details-faq__heading">
      <div className="title-wrap">
        <h1>교환/반품/품절 안내</h1>
      </div>
      <div className="btns-wrap">
        <ReuseButton style="default" size="md" text="반품/교환 신청" />
        <ReuseButton style="purple" size="md" text="1:1문의" icon={comment} />
      </div>
    </div>
  );
}
