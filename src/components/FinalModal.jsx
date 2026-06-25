import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Envelope from "./Envelope";
import Letter from "./Letter";

// import "./FinalModal.css";

export default function FinalModal({ onClose }) {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // el sobre "respira" unos segundos
    const t1 = setTimeout(() => {
      setOpenEnvelope(true);
    }, 1800);

    // empieza a salir la carta
    const t2 = setTimeout(() => {
      setShowLetter(true);
    }, 2700);

    // aparece el texto
    const t3 = setTimeout(() => {
      setShowMessage(true);
    }, 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="final-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="final-container"
          onClick={(e) => e.stopPropagation()}
        >
  
          {/* Aura detrás */}
          <motion.div
            className="magic-aura"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
  
          {/* Partículas */}
          <div className="magic-particles">
            {Array.from({ length: 35 }).map((_, i) => (
              <span
                key={i}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${5 + Math.random() * 6}s`,
                }}
              />
            ))}
          </div>
  
          <div className="final-stage">
            <Envelope
              open={openEnvelope}
              showLetter={showLetter}
            />
  
            <AnimatePresence>
              {showLetter && (
                <Letter reveal={showMessage} />
              )}
            </AnimatePresence>
          </div>
  
          {showMessage && (
            <motion.button
              className="final-close"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .5,
              }}
              onClick={onClose}
            >
              Cerrar
            </motion.button>
          )}
  
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}