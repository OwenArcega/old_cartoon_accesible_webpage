document
  .getElementById("quiz-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener las respuestas del usuario
    const answers = {
      q1: getCheckboxValues("q1"),
      q2: getCheckboxValues("q2"),
      q3: getCheckboxValues("q3"),
      q4: getCheckboxValues("q4"),
      q5: getCheckboxValues("q5"),
      q6: getCheckboxValues("q6"),
    };

    const isFormValid = checkFormCompletion(answers);
    if (!isFormValid) {
      alert(
        "Por favor, responde todas las preguntas antes de enviar el formulario."
      );
      return;
    }

    // Procesar las respuestas y mostrar el resultado
    const result = calculateResult(answers);
    displayResult(result);
  });

function getCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  const values = [];
  checkboxes.forEach((checkbox) => values.push(checkbox.value));
  return values;
}

function checkFormCompletion(answers) {
  for (const key in answers) {
    if (answers[key].length === 0) {
      return false; // Devuelve falso si alguna pregunta no está respondida
    }
  }
  return true; // Devuelve true si todas las preguntas están respondidas
}

function calculateResult(answers) {
  // Definir los personajes y sus descripciones
  const characters = {
    pucca: {
      description:
        "Eres una persona llena de energía y determinación. Tu amor por la aventura y tu espíritu optimista te hacen destacar en cualquier situación.",
      image: "pucca.jpg",
    },
    garu: {
      description:
        "Eres una persona tranquila y reservada, pero con una gran determinación y habilidad. Tu enfoque en tus objetivos te lleva al éxito en todo lo que haces.",
      image: "garu.jpg",
    },
    ching: {
      description:
        "Eres una persona valiente y leal, siempre dispuesta a ayudar a tus amigos. Tu coraje y tu corazón grande te convierten en un compañero confiable.",
      image: "ching.jpg",
    },
    abio: {
      description:
        "Eres una persona curiosa e inteligente, siempre buscando aprender cosas nuevas. Tu creatividad y tu mente ágil te hacen destacar en cualquier situación.",
      image: "abio.jpg",
    },
    // Agrega más personajes con sus descripciones aquí según sea necesario
  };

  // Realizar algún tipo de cálculo basado en las respuestas del usuario para determinar el resultado
  // Aquí puedes usar lógica condicional para asignar un personaje según las respuestas

  // Por ahora, simplemente seleccionaremos un personaje aleatorio para propósitos de demostración
  const charactersKeys = Object.keys(characters);
  const randomCharacterKey =
    charactersKeys[Math.floor(Math.random() * charactersKeys.length)];
  return {
    character: randomCharacterKey,
    description: characters[randomCharacterKey].description,
    image: characters[randomCharacterKey].image,
  };
}

function displayResult(result) {
  // Mostrar el resultado en la página
  const resultDiv = document.getElementById("result");
  resultDiv.querySelector(
    "h2"
  ).textContent = `¡Eres ${result.character.toUpperCase()}!`;
  resultDiv.querySelector("img").src = result.image;
  resultDiv.querySelector("p").textContent = result.description;
  resultDiv.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const inicio = document.getElementById("main");
  inicio.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../index.html";
  });
});
