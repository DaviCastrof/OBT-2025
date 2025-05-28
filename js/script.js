const data = [
    {
        title: "Densidade óssea e muscular em microgravidade"
    },
    {
        title: "Materiais resistentes à radiação espacial"
    },
    {
        title: "Comportamento de fluidos em microgravidade"
    },
    {
        title: "Microrganismos em ambiente extremo "
    },
    {
        title: "Crescimento de plantas em microgravidade"
    },
    {
        title: "Regeneração de tecidos em microgravidade"
    },
    {
        title: "Comunicação por rádio no espaço"
    },
    {
        title: "Cristalização de proteínas em microgravidade"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#barraPesquisa");

    searchInput.addEventListener("keyup", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const blocos = document.querySelectorAll(".bloco");

        blocos.forEach(bloco => {
            const texto = bloco.querySelector(".texto").textContent.toLowerCase();

            if (texto.includes(searchTerm)) {
                bloco.style.display = "flex";
            } else {
                bloco.style.display = "none";
            }
        });
    });
});