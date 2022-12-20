const QUESTIONS = [
    {
        title: "PREGUNTA 1 DE 3:",
        description: "¿Actualmente usted se encuentra con más de 10 KG extras?",
        confirm: "Si",
        deny: "No",
    },
    {
        title: "PREGUNTA 2 DE 3:",
        description: "¿Quisiera reducir sus tallas sin preocuparse por hacer ejercicio y sin dejar de comer?",
        confirm: "Si",
        deny: "No",
    },
    {
        title: "PREGUNTA 3 DE 3:",
        description: "Si por medio de un video conocieras todo el método con la solución definitiva, ¿Estarías dispuesta a verlo hasta el final?",
        confirm: "Si, deseo",
        deny: "No, gracias",
    },
];

let index = 0;

const btn = document.querySelectorAll(".btn");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const announce = document.querySelector("#announce");

btn.forEach(button => {
    button.addEventListener("click", () => {
        button.disabled = true;
        index++;

        if (index === QUESTIONS.length) {
            announce.parentElement.classList.add("hidden");
            window.location.href = "https://metododereduccion.com/mri/landingpage/v3";
            return;
        }

        announce.classList.add("hidden");
        setTimeout(() => {
            title.innerHTML = QUESTIONS[index].title;
            description.innerHTML = QUESTIONS[index].description;
            btn[0].innerHTML = QUESTIONS[index].confirm;
            btn[1].innerHTML = QUESTIONS[index].deny;
            announce.classList.remove("hidden");
            button.disabled = false;
        }, 700);
    });
});
