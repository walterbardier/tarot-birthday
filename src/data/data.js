// back de las cartas
import back from "../assets/cards/back.png";

// 6 cartas de Tarot
import sundayMorning from "../assets/cards/the-sunday-morning.png";
import homePit from "../assets/cards/the-home-pit.png";
import atlantic from "../assets/cards/the-atlantic.png";
// import carnival from "../assets/cards/the-carnival.png";
import disclosure from "../assets/cards/the-disclosure-day.png";
import dessert from "../assets/cards/the-dessert.png";
import car from "../assets/cards/the-safety-car.png";

export const tarotCards = [
    {
        id: 1,
        name: "The Sunday Morning",
        image: sundayMorning,
        back,
        keywords: "calma | rutina | compañía",
        message:
            // "La luz del domingo por la mañana revela aquello que parecía inimaginable. La calidez de un café compartido, incluso cuando se enfría (multiples veces...), sigue siendo suficiente. Hay afectos que dejan de vivirse como un milagro para convertirse, silenciosamente, en un hogar."
            "La luz del domingo revela aquello que la sombra ocultaba. En la calidez de un café compartido —incluso cuando el tiempo lo enfría una y otra vez— reside la verdad. Hay afectos que ocurren por accidente para convertirse en un hogar."
    },

    {
        id: 2,
        name: "The Home Pit",
        image: homePit,
        back,
        keywords: "hogar | refugio | distancia emocional",
        message:
            // "Cuando el hogar parece lejano y el cariño difícil de encontrar, esta carta recuerda una verdad: ninguna distancia es mayor que el amor de quienes nunca han dejado de esperar tu regreso."
            "Cuando la carrera parece interminable, esta carta recuerda una verdad: ninguna distancia es mayor que el amor de quienes nunca han dejado de seguir tu carrera y a su vez, esperar tu regreso."
            // "Cuando la carrera se vuelve interminable y el hogar parece un horizonte lejano, el Home Pit es el punto de encuentro donde el ruido del mundo se apaga y el amor repara tus fuerzas. Cada vez que extrañas, no estás perdiendo ritmo, sino recargando tu esencia con el amor de quienes, desde el otro lado, nunca han dejado de seguir tu carrera."
    },

    {
        id: 3,
        name: "The Atlantic",
        image: atlantic,
        back,
        keywords: "profundidad | separación | reencuentro",
        message:
            "Argentina y Uruguay comparten el mismo Atlántico… y al mismo tiempo lo habitan desde orillas distintas. No es solo lo que separa: es lo que insiste en chocar. Porque incluso entre distancias, las olas siempre encuentran la forma de encontrarse."
    },

    // {
    //     id: 4,
    //     name: "The Carnival",
    //     image: carnival,
    //     back,
    //     keywords: "ilusión | caos | destino compartido",
    //     message:
    //         "Todo es más ruidoso aquí… Las presencias se diluyen entre atracciones que ciegan. Sin embargo, incluso en la multitud, algo recuerda siempre el mismo camino: el que vuelve a sí mismo."
    // },

    {
        id: 4,
        name: "The Disclosure Day",
        image: disclosure,
        back,
        keywords: "revelación | calma | esencia",
        message:
            "Durante mucho tiempo, tus fantasías fueron solo proyecciones en la gran pantalla de tu mente. Pero el velo ha caído: lo que antes imaginabas, hoy se manifiesta en la quietud de este instante. Al reposar tu cabeza sobre un hombro que te sostiene, la fantasía se desvanece para dar paso a la realidad más pura: has llegado al lugar donde alguien siempre va a querer verte bien."
    },

    {
        id: 5,
        name: "The Dessert",
        image: dessert,
        back,
        keywords: "deseo | intimidad | memoria",
        message:
            "¿Podes imaginar cómo es...?"
    },

    // {
    //     id: 6,
    //     name: "The Safety Car",
    //     image: car,
    //     back,
    //     keywords: "pausa | control | aprendizaje",
    //     message:
    //         "La interrupción no es error, sino señal. Incluso la impaciencia es llevada a aprender otro ritmo: el de lo que ocurre cuando el control deja de sostenerlo todo. El destino, curiosamente, disfruta poniendo la paciencia de algunos a prueba."
    // }

    {
        id: 6,
        name: "The Safety Car",
        image: car,
        back,
        keywords: "faro | acompañamiento | guía",
        message:
            'Cuando el caos se desata, tú eres la luz que escolta. No vienes a frenar, sino a guiar el ritmo en la confusión. Tu presencia es el faro que permite al otro encontrar su calma mientras repara lo roto. A veces, la forma más pura de amor es simplemente aparecer y decir: "Vamos despacio, que aquí estoy yo hasta que la pista esté despejada".'
    }
];