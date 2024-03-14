import { useRouter } from "next/navigation";

import Button from "../../../../_components/Button";

import { BUTTON_CLASS } from "../../../../constants/classNames";

export function Navigate({ path, text }: { path: string; text: string }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`${path}`);
  };

  return (
    <Button
      type="button"
      text={text}
      onClick={onClick}
      ariaLabel="상세 보기"
      className={BUTTON_CLASS.REVIEW_ACTION}
    />
  );
}
