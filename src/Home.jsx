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

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCard]);

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

  return (
    <LayoutGroup id="tarot">

      {/* 🌌 particles */}
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
            <motion.h1
              className="start-title"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            >
              Querés conocer tu destino?
              
            </motion.h1>

            <motion.button
              className="start-button"
              onClick={() => setStarted(true)}
            >
              {/* Comenzar */}
              No realmente, pero acá voy
            </motion.button>
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

              <h1>
                Cada carta guarda
                <br />
                un fragmento de tu historia.
              </h1>

              {/* <p className="subtitle">
                You don't choose the cards,
                <br />
                They simply reveal themselves.
              </p> */}
              
              <p className="subtitle">
                Comienza tu lectura revelando la primera carta.
              </p>
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
                    <div className="card-back">
                      <img src={card.back} alt="back" />
                    </div>

                    <div className="card-front">
                      <img src={card.image} alt={card.name} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* 🎴 FINAL BUTTON */}
            <AnimatePresence>
              {showFinalButton && !showFinal && (
                <motion.div
                  className="final-button-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button
                    className="final-button"
                    onClick={triggerShuffle}
                  >
                    Mensaje desde arriba
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🌌 FINAL CARD */}
            <AnimatePresence>
              {showFinal && (
                <FinalCard onClose={() => setShowFinal(false)} />
              )}
            </AnimatePresence>

            {/* MODAL */}
            <AnimatePresence mode="wait">
              {selectedCard && (
                <CardModal
                  card={selectedCard}
                  onClose={closeModal}
                />
              )}
            </AnimatePresence>

          </motion.main>
        )}
      </AnimatePresence>

    </LayoutGroup>
  );
}