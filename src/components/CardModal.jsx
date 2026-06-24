import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CardModal({ card, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <motion.div layoutId={`card-${card.id}`} className="modal-left">
          <img src={card.image} alt={card.name} />
        </motion.div>

        <motion.div className="modal-right">
          <h2>{card.name}</h2>
          <p className="keywords">{card.keywords}</p>
          <p className="message">{card.message}</p>
        </motion.div>

      </div>
    </motion.div>
  );
}