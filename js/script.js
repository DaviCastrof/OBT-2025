const infoexperiments = [
    { nome: "Densidade óssea e muscular em microgravidade", intacto: true, imagem: "assets/images/dossosmicro.jpeg" },
    { nome: "Materiais resistentes à radiação espacial", intacto: false, imagem: "assets/images/matresist.jpg" },
    { nome: "Comportamento de fluidos em microgravidade", intacto: false, imagem: "assets/images/fluidosmicro.webp" },
    { nome: "Microrganismos em ambiente extremo", intacto: true, imagem: "assets/images/microextr.png" },
    { nome: "Crescimento de plantas em microgravidade", intacto: false, imagem: "assets/images/microplanta.jpg" },
    { nome: "Regeneração de tecidos em microgravidade", intacto: false, imagem: "assets/images/tecidosmicro.jpg" },
    { nome: "Comunicação por rádio no espaço", intacto: true, imagem: "assets/images/radioespaco.jpg" },
    { nome: "Cristalização de proteínas em microgravidade", intacto: true, imagem: "assets/images/cristal.jpg" },
    { nome: "Desempenho de células solares em órbita", intacto: true, imagem: "assets/images/celsolar.jpg" },
    { nome: "Isolamento térmico de materiais espaciais", intacto: false, imagem: "assets/images/isolamento.jpg" },
    { nome: "Impressão 3D de peças em microgravidade", intacto: true, imagem: "assets/images/impressao.avif" },
    { nome: "Eficiência de filtros de ar na ISS", intacto: false, imagem: "assets/images/filtrosar.webp" },
    { nome: "Monitoramento cardíaco em astronautas", intacto: true, imagem: "assets/images/cardiaco.png" },
    { nome: "Crescimento bacteriano em microgravidade", intacto: false, imagem: "assets/images/bacteriamicro.jpg" },
    { nome: "Fotossíntese em ambientes espaciais", intacto: true, imagem: "assets/images/fotossintese.webp" },
    { nome: "Produção de alimentos em colônias espaciais", intacto: false, imagem: "assets/images/agromarte.jpg" },
    { nome: "Efeitos da radiação em DNA humano", intacto: true, imagem: "assets/images/raddna.webp" },
    { nome: "Desempenho de baterias no vácuo", intacto: false, imagem: "assets/images/bacvacuo.jpg" },
    { nome: "Estudo de combustão em gravidade zero", intacto: false, imagem: "assets/images/comubst.jpg" },
    { nome: "Controle de temperatura em satélites", intacto: true, imagem: "assets/images/satelite.jpg" },
    { nome: "Armazenamento de água em microgravidade", intacto: true, imagem: "assets/images/aguamicro.webp" },
    { nome: "Teste de ligas metálicas espaciais", intacto: false, imagem: "assets/images/ligasmetal.jpg" },
    { nome: "Desenvolvimento de tecidos cardíacos no espaço", intacto: true, imagem: "assets/images/tecidocardio.jpg" },
    { nome: "Reações químicas fora da atmosfera", intacto: false, imagem: "assets/images/chemistry.jpg" }
];

const gridContainer = document.querySelector(".grid-container");
const searchInput = document.querySelector("#barraPesquisa");
const pagination = document.querySelector(".pagination");

let filteredExperiments = [...infoexperiments];
let currentPage = 1;
const itemsPerPage = 8;

function renderPage() {
    gridContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredExperiments.slice(startIndex, endIndex);

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
    pagination.innerHTML = `
        <div class="control next"><img src="assets/images/esquerda.png"></div>
    `;

    const totalPages = Math.ceil(filteredExperiments.length / itemsPerPage);

    
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("div");
        if (i === totalPages) {
            pageButton.className = `page lastpage ${currentPage === i ? 'ativa' : ''}`;
        } else {
            pageButton.className = `page ${currentPage === i ? 'ativa' : ''}`;
        }
        pageButton.textContent = i;

        pageButton.addEventListener("click", () => {
            currentPage = i;
            renderPage();
            updatePagination();
        });

        pagination.appendChild(pageButton);
    }

    const prevControl = document.createElement("div");
    prevControl.className = "control prev";
    prevControl.innerHTML = `<img src="assets/images/direita.png">`;
    pagination.appendChild(prevControl);

    pagination.querySelector(".control.next").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage();
            updatePagination();
        }
    });

    pagination.querySelector(".control.prev").addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage();
            updatePagination();
        }
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    filteredExperiments = infoexperiments.filter(exp => 
        exp.nome.toLowerCase().includes(searchTerm)
    );

    currentPage = 1;
    renderPage();
    updatePagination();
});

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    updatePagination();
});
