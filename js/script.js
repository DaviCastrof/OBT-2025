const infoexperiments = [
    {
        nome: "Densidade óssea e muscular em microgravidade",
        intacto: true,
        imagem: "assets/images/dossosmicro.jpeg"
    },
    {
        nome: "Materiais resistentes à radiação espacial",
        intacto: false,
        imagem: "assets/images/matresist.jpg"
    },
    {
        nome: "Comportamento de fluidos em microgravidade",
        intacto: false,
        imagem: "assets/images/fluidosmicro.webp"
    },
    {
        nome: "Microrganismos em ambiente extremo",
        intacto: true,
        imagem: "assets/images/microextr.png"
    },
    {
        nome: "Crescimento de plantas em microgravidade",
        intacto: false,
        imagem: "assets/images/microplanta.jpg"
    },
    {
        nome: "Regeneração de tecidos em microgravidade",
        intacto: false,
        imagem: "assets/images/tecidosmicro.jpg"
    },
    {
        nome: "Comunicação por rádio no espaço",
        intacto: true,
        imagem: "assets/images/radioespaco.jpg"
    },
    {
        nome: "Cristalização de proteínas em microgravidade",
        intacto: true,
        imagem: "assets/images/cristal.jpg"
    },
    {
        nome: "Desempenho de células solares em órbita",
        intacto: true,
        imagem: "assets/images/celsolar.jpg"
    },
    {
        nome: "Isolamento térmico de materiais espaciais",
        intacto: false,
        imagem: "assets/images/isolamento.jpg"
    },
    {
        nome: "Impressão 3D de peças em microgravidade",
        intacto: true,
        imagem: "assets/images/impressao.avif"
    },
    {
        nome: "Eficiência de filtros de ar na ISS",
        intacto: false,
        imagem: "assets/images/filtrosar.webp"
    },
    {
        nome: "Monitoramento cardíaco em astronautas",
        intacto: true,
        imagem: "assets/images/cardiaco.png"
    },
    {
        nome: "Crescimento bacteriano em microgravidade",
        intacto: false,
        imagem: "assets/images/bacteriamicro.jpg"
    },
    {
        nome: "Fotossíntese em ambientes espaciais",
        intacto: true,
        imagem: "assets/images/fotossintese.webp"
    },
    {
        nome: "Produção de alimentos em colônias espaciais",
        intacto: false,
        imagem: "assets/images/agromarte.jpg"
    },
    {
        nome: "Efeitos da radiação em DNA humano",
        intacto: true,
        imagem: "assets/images/raddna.webp"
    },
    {
        nome: "Desempenho de baterias no vácuo",
        intacto: false,
        imagem: "assets/images/bacvacuo.jpg"
    },
    {
        nome: "Estudo de combustão em gravidade zero",
        intacto: false,
        imagem: "assets/images/comubst.jpg"
    },
    {
        nome: "Controle de temperatura em satélites",
        intacto: true,
        imagem: "assets/images/satelite.jpg"
    },
    {
        nome: "Armazenamento de água em microgravidade",
        intacto: true,
        imagem: "assets/images/aguamicro.webp"
    },
    {
        nome: "Teste de ligas metálicas espaciais",
        intacto: false,
        imagem: "assets/images/ligasmetal.jpg"
    },
    {
        nome: "Desenvolvimento de tecidos cardíacos no espaço",
        intacto: true,
        imagem: "assets/images/tecidocardio.jpg"
    },
    {
        nome: "Reações químicas fora da atmosfera",
        intacto: false,
        imagem: "assets/images/chemistry.jpg"
    }
];

window.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");
    
    gridContainer.innerHTML = "";

    infoexperiments.forEach(experiment => {
        const bloco = document.createElement("div");
        bloco.className = "bloco";

        bloco.innerHTML = `
            <div class="caixa" style="background-image: url('${experiment.imagem}')"></div>
            <div class="texto">${experiment.nome}</div>
            <div class="${experiment.intacto ? 'intacto' : 'avariado'}">
                <img class="${experiment.intacto ? 'check' : 'cancel'}" 
                     src="assets/images/${experiment.intacto ? 'check' : 'cancel'}.png">
                ${experiment.intacto ? 'intacto' : 'avariado'}
            </div>
        `;

        gridContainer.appendChild(bloco);
    });

    const searchInput = document.querySelector("#barraPesquisa");
    searchInput.addEventListener("keyup", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const blocos = document.querySelectorAll(".bloco");

        blocos.forEach(bloco => {
            const texto = bloco.querySelector(".texto").textContent.toLowerCase();
            bloco.style.display = texto.includes(searchTerm) ? "flex" : "none";
        });
    });
});

const itemsPerPage = 8;
let currentPage = 1;
const totalPages = Math.ceil(infoexperiments.length / itemsPerPage);

function renderPage(page) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, infoexperiments.length);
    const currentItems = infoexperiments.slice(startIndex, endIndex);

    currentItems.forEach(experiment => {
        const bloco = document.createElement("div");
        bloco.className = "bloco";

        bloco.innerHTML = `
            <div class="caixa" style="background-image: url('${experiment.imagem}')"></div>
            <div class="texto">${experiment.nome}</div>
            <div class="${experiment.intacto ? 'intacto' : 'avariado'}">
                <img class="${experiment.intacto ? 'check' : 'cancel'}" 
                     src="assets/images/${experiment.intacto ? 'check' : 'cancel'}.png">
                ${experiment.intacto ? 'intacto' : 'avariado'}
            </div>
        `;

        gridContainer.appendChild(bloco);
    });
}

function updatePagination() {
    const pageButtons = document.querySelectorAll(".pagination .page, .pagination .lastpage");
    pageButtons.forEach((button, index) => {
        if (index + 1 === currentPage) {
            button.classList.add("ativa");
        } else {
            button.classList.remove("ativa");
        }
    });
}

document.querySelector(".control.next").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updatePagination();
    }
});

document.querySelector(".control.prev").addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        updatePagination();
    }
});

document.querySelectorAll(".pagination .page, .pagination .lastpage").forEach((button, index) => {
    button.addEventListener("click", () => {
        currentPage = index + 1;
        renderPage(currentPage);
        updatePagination();
    });
});

window.addEventListener("DOMContentLoaded", () => {
    renderPage(currentPage);
    updatePagination();
});
