import finalBack from "../assets/cards/finalBack.png";

export default function FinalModal({ onClose }) {
  return (
    <div className="final-overlay" onClick={onClose}>

      <div className="final-card" onClick={(e) => e.stopPropagation()}>

        <img src={finalBack} className="final-bg" />

        <div className="final-content">

          <h1>Feliz cumpleaños</h1>

          <p>
            Este es el cierre del mensaje.
            <br />
            Lo que fue revelado ya no necesita explicarse.
          </p>

          <img
            src="/your-photo.jpg"
            className="final-photo"
          />

            <button className="heart-button" onClick={onClose}>
            ❤️
            </button>

        </div>

      </div>

    </div>
  );
}