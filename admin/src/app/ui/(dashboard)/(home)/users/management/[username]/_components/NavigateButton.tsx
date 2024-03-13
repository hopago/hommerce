import { useRouter } from "next/navigation";

import Button from "../../../../_components/Button";

import { REVIEW_ACTION_BUTTON } from "../../../../constants/classNames";

export function Navigate({
  id,
  path,
  text,
}: {
  id: string;
  path: string;
  text: string;
}) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${path}/${id}`);
  };

  return (
    <Button
      type="button"
      text={text}
      onClick={onClick}
      ariaLabel="상세 보기"
      className={REVIEW_ACTION_BUTTON}
    />
  );
}
