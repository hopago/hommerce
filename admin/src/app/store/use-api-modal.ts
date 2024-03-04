import { create } from "zustand";

interface CreatorApiModal {
  show: boolean;
  operationId: string | null;
  setShow: (param: boolean) => void;
  setOperationId: (operationId: string) => void;
}

export const useApiModal = create<CreatorApiModal>((set) => ({
  show: false,
  operationId: null,
  setShow: (param: boolean) => set(() => ({ show: param })),
  setOperationId: (operationId: string) => set(() => ({ operationId })),
}));
