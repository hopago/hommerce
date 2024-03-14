import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  forwardRef,
  useEffect,
  useRef,
} from "react";

import styles from "./point-log-table.module.css";

import { MdClose, MdMoreVert } from "react-icons/md";

import Button from "../../../../_components/Button";
import { Navigate } from "./NavigateButton";
import Label from "../../../../_components/Label";
import Input from "../../../../_components/Input";

import { useToggle } from "../../../hooks/use-controlled-toggle";
import { useMutatePointLogModal } from "../../../hooks/use-mutate-point-log-modal";

import { BUTTON_CLASS } from "../../../../constants/classNames";
import { FaSpinner } from "react-icons/fa";

type PointActionsProps = {
  pointId: string;
  desc: string;
  amount: number;
  userId: string;
};

type UpdateModalProps = {
  setModalShow: Dispatch<SetStateAction<boolean>>;
  isPending: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  setDesc: (e: ChangeEvent<HTMLInputElement>) => void;
  localAmount: number;
  localDesc: string;
};

export default function PointActions({
  pointId,
  amount,
  desc,
  userId,
}: PointActionsProps) {
  const containerRef = useRef<HTMLTableDataCellElement>(null);
  const modalRef = useRef<HTMLFormElement>(null);

  const { show, toggleClick, setShow } = useToggle(containerRef);
  const {
    show: modalShow,
    setShow: setModalShow,
    isPending,
    onSubmit,
    setAmount,
    setDesc,
    localAmount,
    localDesc,
  } = useMutatePointLogModal(modalRef, pointId, userId, amount, desc);

  useEffect(() => {
    if (modalShow) {
      setShow(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalShow]);

  return (
    <td className={styles.reviewActions} ref={containerRef}>
      {!show ? (
        <div className={styles.buttonWrap}>
          <MdMoreVert
            onClick={toggleClick}
            className={styles.moreVert}
            size={21}
          />
        </div>
      ) : (
        <div className={styles.buttonWrap}>
          <MdClose onClick={toggleClick} className={styles.close} />
        </div>
      )}
      {show && (
        <div className={styles.reviewActionsButtons}>
          <Navigate path={`/point/${pointId}`} text="상세보기" />
          <Button
            type="button"
            text="포인트 수정"
            onClick={() => setModalShow(true)}
          />
        </div>
      )}
      {modalShow && (
        <Update
          ref={modalRef}
          setModalShow={setModalShow}
          isPending={isPending}
          onSubmit={onSubmit}
          setAmount={setAmount}
          setDesc={setDesc}
          localAmount={localAmount}
          localDesc={localDesc}
        />
      )}
    </td>
  );
}

const Update = forwardRef<HTMLFormElement, UpdateModalProps>(
  (
    {
      setModalShow,
      isPending,
      onSubmit,
      setAmount,
      setDesc,
      localAmount,
      localDesc,
    },
    ref
  ) => {
    const buttonText = isPending ? null : "수정하기";
    const buttonIcon = isPending ? (
      <FaSpinner className={styles.loadingIcon} />
    ) : null;

    return (
      <div className={styles.modal}>
        <div className={styles.modalBg} />
        <div className={styles.modalWrap}>
          <form className={styles.form} onSubmit={onSubmit} ref={ref}>
            <div className={styles.formWrap}>
              <div className={styles.formInfo}>
                <h2>포인트 수정</h2>
                <p className={styles.subtitle}>
                  포인트의 지급 사유와 지급량을 수정할 수 있습니다.
                  <br />
                  변경 성공 시 창이 자동으로 닫혀요.
                </p>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputWrap}>
                  <Label text="사유 변경" />
                  <Input
                    type="text"
                    value={localDesc}
                    onChange={setDesc}
                    placeholder="포인트 지급 사유를 입력해주세요."
                    required={true}
                  />
                </div>
                <div className={styles.inputWrap}>
                  <Label text="지급량 수정" />
                  <Input
                    type="text"
                    value={localAmount}
                    onChange={setAmount}
                    placeholder="포인트 지급량을 수정해주세요."
                    required={true}
                  />
                </div>
              </div>
              <div className={styles.buttonWrap}>
                <Button type="submit" text={buttonText} icon={buttonIcon} />
              </div>
            </div>
            <Button
              type="button"
              icon={<MdClose />}
              className={BUTTON_CLASS.CLOSE}
              onClick={() => setModalShow(false)}
              right="0"
              width="27px"
              height="27px"
            />
          </form>
        </div>
      </div>
    );
  }
);
