import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  src,
  alt,
  onClose,
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
