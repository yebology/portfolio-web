import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl cursor-pointer"
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06]"
        aria-label="Close"
      >
        <X size={20} />
      </motion.button>
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl cursor-default border border-white/[0.06]"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};
