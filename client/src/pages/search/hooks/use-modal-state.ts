import { useRecoilValue } from "recoil";
import { seenModalState } from "../../../recoil/seen-modal";

import { useEffect } from "react";

export const useModalDisplayState = () => {
  const show = useRecoilValue(seenModalState);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
};
