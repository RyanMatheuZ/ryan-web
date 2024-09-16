"use client";

import { createPortal } from "react-dom";

import Image from "next/image";

import styles from "./styles.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

function ImageModal({ isOpen, onClose, src, alt }: ModalProps) {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className={styles.background}>
            <div className={styles.container}>
              <Image
                src={src}
                alt={alt}
                title={alt}
                fill
                draggable="false"
                className={styles.image}
              />
              <span className={styles.close_modal_button} onClick={onClose}>
                X
              </span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ImageModal;
