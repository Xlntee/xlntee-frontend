import { useState } from "react";

interface UseDialogModalReturnType {
  openModal: boolean;
  selectedId: string | null;
  onOpenModal: (id?: string) => void;
  onCloseModal: () => void;
}

export default function useDialogModal(): UseDialogModalReturnType {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function onOpenModal(id?: string): void {
    if (id) {
      setSelectedId(id);
    }
    setOpenModal(true);
  }

  function onCloseModal(): void {
    setOpenModal(false);
  }

  return {
    openModal,
    selectedId,
    onOpenModal,
    onCloseModal
  };
}
