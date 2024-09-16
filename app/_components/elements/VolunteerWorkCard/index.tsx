"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import useImageModal from "@/hooks/useImageModal";

import ImageModal from "@/components/modules/ImageModal";

import styles from "./styles.module.css";

interface VolunteerWorkCardProps {
  role: string;
  organization: string;
  period: string;
  descriptions: string[];
  images?: {
    src: string;
    alt: string;
  }[];
}

const IMAGE_SIZE = 100;

function VolunteerWorkCard({
  role,
  organization,
  period,
  descriptions,
  images,
}: VolunteerWorkCardProps) {
  const t = useTranslations("VolunteerWork");
  const { isOpen, selectedImage, handleCloseModal, handleSelectImage } =
    useImageModal();

  return (
    <>
      <ImageModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        src={selectedImage.src}
        alt={selectedImage.alt}
      />
      <div className={styles.card}>
        <div className={styles.banner}>
          <span className={styles.banner_period}>{period}</span>
        </div>
        <span className={styles.card_role}>{role}</span>
        <span className={styles.card_organization}>{organization}</span>
        {descriptions.map((description, index) => (
          <p key={`${index}-description`} className={styles.card_description}>
            {description}
          </p>
        ))}
        {images?.length && (
          <>
            <div className={styles.info_container}>
              <span className={styles.info_icon}>!</span>
              <span className={styles.info_text}>{t("selectImageInfo")}.</span>
            </div>
            <div className={styles.images_container}>
              {images.map(({ src, alt }) => (
                <Image
                  key={`${src}-volunteer-work`}
                  src={src}
                  alt={alt}
                  title={alt}
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE / 2}
                  draggable="false"
                  className={styles.image}
                  onClick={() => handleSelectImage(src, alt)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default VolunteerWorkCard;
