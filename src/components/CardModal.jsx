import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CardModal({ card, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carta que viaja */}
        <motion.div
          layoutId={`card-${card.id}`}
          className="modal-left"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <img
            src={card.image}
            alt={card.name}
            draggable={false}
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="modal-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{
            delay: 0.22,
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2>{card.name}</h2>

          <p className="keywords">
            {card.keywords}
          </p>

          <p className="message">
            {card.message}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}