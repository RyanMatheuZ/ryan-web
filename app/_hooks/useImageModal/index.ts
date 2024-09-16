import { useState, useCallback } from "react";

function useImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const handleSelectImage = useCallback(
    (src: string, alt: string) => {
      setSelectedImage({ src, alt });
      handleOpenModal();
    },
    [handleOpenModal]
  );

  return {
    isOpen,
    selectedImage,
    handleOpenModal,
    handleCloseModal,
    handleSelectImage,
  };
}

export default useImageModal;
