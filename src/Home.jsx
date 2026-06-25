import { useEffect, useRef, useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";

import "./App.css";

import { tarotCards } from "./data/data";
import CardModal from "./components/CardModal";

import FinalCard from "./components/FinalModal";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const [started, setStarted] = useState(false);

  const [showFinalButton, setShowFinalButton] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const cardRefs = useRef({});
  const [particles, setParticles] = useState([]);

  // Cálculo de progreso
  const totalCards = cards.length;
  const flippedCount = Object.keys(flippedCards).length;
  const remaining = totalCards - flippedCount;
  const progressPercentage = totalCards > 0 ? (flippedCount / totalCards) * 100 : 0;

  useEffect(() => {
    const arr = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(arr);
  }, []);

  useEffect(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      const allFlipped = cards.every((c) => flippedCards[c.id]);
      if (allFlipped) {
        setTimeout(() => setShowFinalButton(true), 800);
      }
    }
  }, [flippedCards, cards]);

  const openCard = (card, id) => {
    const el = cardRefs.current[id];
    if (!el) return;

    el.classList.add("pre-flip");

    setTimeout(() => {
      setFlippedCards((prev) => ({
        ...prev,
        [id]: true,
      }));

      setTimeout(() => setSelectedCard(card), 600);
    }, 120);
  };

  const closeModal = () => setSelectedCard(null);

  const triggerShuffle = () => {
    setShowFinal(true);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.25,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ritualMessages = [
    "Comienza tu lectura revelando la primera carta.",
    "La curiosidad es el primer paso hacia la verdad.",
    "No busques respuestas, permite que ellas te encuentren.",
    "Revela las cartas y deja que el destino hable.",
    "Cada carta guarda un secreto que espera por ti."
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % ritualMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutGroup id="tarot">
      <div className="particles">
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 🌌 START SCREEN */}
      <AnimatePresence>
        {!started && (
          <motion.div
            className="start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="fullscreen-notification"
            >
              ✦ Presiona F11 para una revelación inmersiva ✦
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="start-content"
            >
              <motion.p variants={itemVariants} className="eyebrow">✦ el destino ya ha elegido ✦</motion.p>
              <motion.h1 variants={itemVariants} className="start-title">¿Querés conocer tu destino?</motion.h1>
              <motion.button
                variants={itemVariants}
                className="start-button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .97 }}
                onClick={() => setStarted(true)}
              >
                No realmente, pero me obligaron
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌙 HOME */}
      <AnimatePresence>
        {started && (
          <motion.main
            className={`home ${selectedCard ? "dim" : ""}`}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
          >
            <div className="overlay" />
            <section className="hero">
              <p className="eyebrow">✦ el destino ya ha elegido ✦</p>
              <h1>Cada carta guarda<br />un fragmento de tu historia.</h1>
              <div className="subtitle-wrapper" style={{ height: '3rem', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentMessage}
                    className="subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                  >
                    {ritualMessages[currentMessage]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </section>

            <section className="deck">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  layout
                  layoutId={`card-${card.id}`}
                  ref={(el) => (cardRefs.current[card.id] = el)}
                  className={`card ${flippedCards[card.id] ? "flipped" : ""} ${
                    selectedCard?.id === card.id ? "active-card" : ""
                  }`}
                  onClick={() => openCard(card, card.id)}
                >
                  <div className="card-inner">
                    <div className="card-back"><img src={card.back} alt="back" /></div>
                    <div className="card-front"><img src={card.image} alt={card.name} /></div>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* 📊 BARRA DE PROGRESO */}
            <div className="progress-container">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
              <p className="progress-text">
                {remaining > 0 
                  ? `Te faltan ${remaining} carta${remaining > 1 ? 's' : ''} para la gran revelación.`
                  : "El destino se ha revelado por completo."}
              </p>
            </div>

            <AnimatePresence>
              {showFinalButton && !showFinal && (
                <motion.div
                  className="final-button-wrapper"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.button
                    className="final-button"
                    onClick={triggerShuffle}
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.6)", "0 0 0px rgba(255,255,255,0)"] 
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    Mensaje del cielo
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>{showFinal && <FinalCard onClose={() => setShowFinal(false)} />}</AnimatePresence>
            <AnimatePresence mode="wait">{selectedCard && <CardModal card={selectedCard} onClose={closeModal} />}</AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}