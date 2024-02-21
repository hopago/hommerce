import FAQItem from "./FAQItem";

export default function FAQList() {
  const faqList = [
    {
      title: "반품/교환방법",
      desc: "마이룸 > 주문관리 > 주문/배송내역 > 주문조회 > 반품/교환 신청, [1:1 상담 > 반품/교환/환불] 또는 고객센터",
    },
    {
      title: "반품/교환비용",
      desc: "변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담",
    },
    {
      title: "상품 품절",
      desc: "공급사(출판사) 재고 사정에 의해 품절/지연될 수 있으며, 품절 시 관련 사항에 대해서는 이메일과 문자로 안내드리겠습니다.",
    },
    {
      title: "소비자 피해보상 환불 지연에 따른 배상",
      desc: `
      1) 상품의 불량에 의한 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁 해결 기준 (공정거래위원회 고시)에 준하여 처리됨
      2) 대금 환불 및 환불지연에 따른 배상금 지급 조건, 절차 등은 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 처리함
      `,
    },
  ];

  return (
    <div className="details-faq__list">
      <ul>
        {faqList.map((list) => (
          <FAQItem key={list.title} title={list.title} desc={list.desc} />
        ))}
      </ul>
    </div>
  );
}
