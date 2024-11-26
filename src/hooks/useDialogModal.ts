import { useState } from "react";

type UseDialogModalProps = {
  openModal: boolean;
  selectedId: string | null;
  onOpenModal: (id?: string) => void;
  onCloseModal: () => void;
};

export default function useDialogModal(): UseDialogModalProps {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function onOpenModal(id?: string): void {
    console.log("open dialog modal");
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
