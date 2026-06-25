import { motion } from "framer-motion";

export default function Envelope({ open, showLetter }) {
  return (
    <motion.div
      className="envelope-wrapper"
      initial={{
        y: -600,
        opacity: 0,
        rotate: -8,
        scale: 0.9,
      }}
      animate={{
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: [1, 1.02, 1],
      }}
      transition={{
        y: {
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: 0.8,
        },
        rotate: {
          duration: 1.5,
        },
        scale: {
          delay: 1.5,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Luz detrás */}
      <motion.div
        className="envelope-glow"
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Parte trasera */}
      <div className="envelope-back" />

      {/* Carta asomando */}
      <motion.div
        className="letter-preview"
        animate={
          showLetter
            ? {
                y: -210,
                scale: 1.03,
              }
            : {
                y: 0,
              }
        }
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Solapa */}
      <motion.div
        className="envelope-flap"
        animate={
          open
            ? {
                rotateX: 180,
              }
            : {
                rotateX: 0,
              }
        }
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Frente */}
      <div className="envelope-front" />

      {/* Sello */}
      <motion.div
        className="wax-seal"
        animate={
          open
            ? {
                scale: 0,
                rotate: 120,
                opacity: 0,
              }
            : {
                scale: 1,
                rotate: 0,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.5,
        }}
      >
        ✦
      </motion.div>

      {/* Chispas */}
      {open &&
        [...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="spark"
            initial={{
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.cos((i * 20 * Math.PI) / 180) * 90,
              y: Math.sin((i * 20 * Math.PI) / 180) * 90,
            }}
            transition={{
              duration: 1.1,
              delay: 0.2,
            }}
          />
        ))}
    </motion.div>
  );
}