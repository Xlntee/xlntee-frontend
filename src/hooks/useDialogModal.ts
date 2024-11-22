import { useState } from "react";

interface UseDialogModal {
  openModal: boolean;
  selectedId: string | null;
  onOpenModal: (id?: string) => void;
  onCloseModal: () => void;
}

export default function useDialogModal(): UseDialogModal {
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
