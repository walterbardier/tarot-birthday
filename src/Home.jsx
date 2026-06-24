import { useEffect, useRef, useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";

import "./App.css";

import { tarotCards } from "./data/data";
import CardModal from "./components/CardModal";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const cardRefs = useRef({});

  useEffect(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const openCard = (card, id) => {
    const el = cardRefs.current[id];
    if (!el) return;

    el.classList.add("pre-flip");

    setTimeout(() => {
      setFlippedCards((prev) => ({
        ...prev,
        [id]: true,
      }));

      setTimeout(() => {
        setSelectedCard(card);
      }, 650);
    }, 120);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <LayoutGroup id="tarot">

      <main className={`home ${selectedCard ? "dim" : ""}`}>

        <div className="overlay" />

        <section className="hero">
          <p className="eyebrow">✦ destiny has already chosen ✦</p>

          <h1>
            Every card remembers
            <br />
            something about you.
          </h1>

          <p className="subtitle">
            You don't choose the cards.
            <br />
            They simply reveal themselves.
          </p>
        </section>

        <section className="deck">

          {cards.map((card) => (
            <motion.div
              key={card.id}
              layout
              layoutId={`card-${card.id}`}
              ref={(el) => (cardRefs.current[card.id] = el)}
              className={`
                card
                ${flippedCards[card.id] ? "flipped" : ""}
                ${selectedCard?.id === card.id ? "active-card" : ""}
              `}
              onClick={() => openCard(card, card.id)}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 340,
                  damping: 34,
                },
                opacity: {
                  duration: 0,
                },
              }}
            >
              <div className="card-inner">

                <div className="card-back">
                  <img src={card.back} alt="back" />
                </div>

                <div className="card-front">
                  <img
                    src={card.image}
                    alt={card.name}
                  />
                </div>

              </div>
            </motion.div>
          ))}

        </section>

        <AnimatePresence mode="wait">
            {selectedCard && (
                <CardModal
                card={selectedCard}
                onClose={closeModal}
                />
            )}
        </AnimatePresence>

      </main>

    </LayoutGroup>
  );
}