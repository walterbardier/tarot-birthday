import { motion } from "framer-motion";

export default function Letter({ reveal }) {
  return (
    <motion.div
      className="letter"

      initial={{
        y: 120,
        scale: 0.72,
        opacity: 0
      }}

      animate={{
        y: reveal ? -20 : -140,
        scale: reveal ? 1 : 0.82,
        opacity: 1
      }}

      transition={{
        duration: 1.25,
        ease: [0.22, 1, 0.36, 1]
      }}
    >

      {/* brillo */}

      <motion.div
        className="letter-shine"

        animate={{
          x: ["-120%", "130%"]
        }}

        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="letter-content"

        initial={{
          opacity: 0,
          y: 15
        }}

        animate={{
          opacity: reveal ? 1 : 0,
          y: reveal ? 0 : 15
        }}

        transition={{
          delay: .45,
          duration: .8
        }}
      >

        <p className="letter-small">
          Para: Gonza
        </p>

        <h2>
          ¡Feliz cumple, bonito!
        </h2>

        <p className="letter-text">

            Hace un año, un 25 de julio como hoy, mi camino cambiaba drásticamente.
            Había borrado todos mis recuerdos y sin estar muy seguro de hacia dónde iba,
            ese tiempo  terminó regalándome nuevos retos, discusiones, búsquedas,
            sorpresas y, sobretodo, aprendizajes.

            <br /><br />

            Si volviera un año atrás, nunca habría imaginado que la mejor sorpresa
            sería coincidir con vos.

            Porque, en cada viaje, incluso cuando la tormenta arrecia y la niebla parece
            ocultarlo todo, nuestros caminos siempre encuentran la manera de volver a coincidir.
            <br />
            Y estoy agradecido por eso; por tenerte en mi vida.
            <br />
            Creo que no llegás a imaginar lo mucho que significas para mí
            y cuánto me has ayudado en esta etapa tan confusa.

            <br /><br />

            Feliz cumpleaños. Gracias por existir, por acompañarme y por hacer que este
            último año esté lleno de recuerdos que nunca quisiera borrar.

            <br /><br />

            Te quiero muchito,
            <br />
            Walt ♡

        </p>

      </motion.div>

    </motion.div>
  );
}