import back from "../assets/cards/back.png";

// import lovers from "../assets/cards/the-lovers.png";
import sundayMorning from "../assets/cards/the-sunday-morning.png";
import homePit from "../assets/cards/the-home-pit.png";
import atlantic from "../assets/cards/the-atlantic.png";
import carnival from "../assets/cards/the-carnival.png";
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
            "La luz del domingo revela aquello que ya no necesita esconderse. Un café compartido, incluso cuando se enfría, sigue siendo suficiente. Hay afectos que dejan de vivirse como un milagro para convertirse, silenciosamente, en un hogar."
    },

    {
        id: 2,
        name: "The Home Pit",
        image: homePit,
        back,
        keywords: "hogar | refugio | distancia emocional",
        message:
            "Cuando el hogar parece lejano y el cariño difícil de encontrar, esta carta recuerda una verdad: ninguna distancia es mayor que el amor de quienes nunca han dejado de esperar tu regreso."
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

    {
        id: 4,
        name: "The Carnival",
        image: carnival,
        back,
        keywords: "ilusión | caos | destino compartido",
        message:
            "Todo es más ruidoso aquí… Las presencias se diluyen entre atracciones que ciegan. Sin embargo, incluso en la multitud, algo recuerda siempre el mismo camino: el que vuelve a sí mismo."
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

    {
        id: 6,
        name: "The Safety Car",
        image: car,
        back,
        keywords: "pausa | control | aprendizaje",
        message:
            "La interrupción no es error, sino señal. Incluso la impaciencia es llevada a aprender otro ritmo: el de lo que ocurre cuando el control deja de sostenerlo todo. El destino, curiosamente, disfruta poniendo la paciencia de algunos a prueba."
    }
];