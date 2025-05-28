const passoPadrao = [
    "Avaliar o dano ao experimento e determinar o que foi afetado;",
    "Identificar as peças que precisam ser reparadas ou substituídas;",
    "Remover as peças danificadas com cuidado para não prejudicar ainda mais o experimento;"
];
const infoexperiments = [
    { 
        nome: "Densidade óssea e muscular em microgravidade", 
        intacto: true, 
        imagem: "assets/images/dossosmicro.jpeg", 
        descricao: "Este experimento tem como objetivo analisar os efeitos da microgravidade na densidade óssea e muscular dos astronautas que ficam por longos períodos a bordo da ISS.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/eua.png"
    },
    { 
        nome: "Materiais resistentes à radiação espacial", 
        intacto: false, 
        imagem: "assets/images/matresist.jpg", 
        descricao: "Este experimento visa testar e desenvolver novos materiais capazes de resistir aos altos níveis de radiação presentes no espaço.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/brasil.png"
    },
    { 
        nome: "Comportamento de fluidos em microgravidade", 
        intacto: false, 
        imagem: "assets/images/fluidosmicro.webp", 
        descricao: "O estudo investiga como os fluidos se comportam na ausência de gravidade.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/japao.png"
    },
    { 
        nome: "Microrganismos em ambiente extremo", 
        intacto: true, 
        imagem: "assets/images/microextr.png", 
        descricao: "Este experimento analisa a resistência e adaptação de microrganismos quando expostos às condições extremas do espaço.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/russia.png"
    },
    { 
        nome: "Crescimento de plantas em microgravidade", 
        intacto: false, 
        imagem: "assets/images/microplanta.jpg", 
        descricao: "A pesquisa busca compreender como a ausência de gravidade afeta o crescimento, desenvolvimento e reprodução de plantas.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/canada.png"
    },
    { 
        nome: "Regeneração de tecidos em microgravidade", 
        intacto: false, 
        imagem: "assets/images/tecidosmicro.jpg", 
        descricao: "Este estudo explora os processos de regeneração e cicatrização de tecidos humanos em ambientes de microgravidade.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/alemanha.png"
    },
    { 
        nome: "Comunicação por rádio no espaço", 
        intacto: true, 
        imagem: "assets/images/radioespaco.jpg", 
        descricao: "O experimento avalia a eficiência e confiabilidade das comunicações por rádio em ambientes espaciais.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/reino_unido.png"
    },
    { 
        nome: "Cristalização de proteínas em microgravidade", 
        intacto: true, 
        imagem: "assets/images/cristal.jpg", 
        descricao: "O estudo investiga como a microgravidade influencia o processo de cristalização de proteínas.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/franca.png"
    },
    { 
        nome: "Desempenho de células solares em órbita", 
        intacto: true, 
        imagem: "assets/images/celsolar.jpg", 
        descricao: "Este experimento testa a eficiência e durabilidade de células solares no ambiente espacial.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/italia.png"
    },
    { 
        nome: "Isolamento térmico de materiais espaciais", 
        intacto: false, 
        imagem: "assets/images/isolamento.jpg", 
        descricao: "A pesquisa avalia a capacidade de diferentes materiais isolantes de proteger equipamentos das variações térmicas.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/espanha.png"
    },
    { 
        nome: "Impressão 3D de peças em microgravidade", 
        intacto: true, 
        imagem: "assets/images/impressao.avif", 
        descricao: "O estudo testa a viabilidade e qualidade da impressão 3D no espaço.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/eua.png"
    },
    { 
        nome: "Eficiência de filtros de ar na ISS", 
        intacto: false, 
        imagem: "assets/images/filtrosar.webp", 
        descricao: "Este experimento analisa a eficiência dos sistemas de filtragem de ar a bordo da ISS.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/japao.png"
    },
    { 
        nome: "Monitoramento cardíaco em astronautas", 
        intacto: true, 
        imagem: "assets/images/cardiaco.png", 
        descricao: "O objetivo deste estudo é monitorar as alterações no sistema cardiovascular dos astronautas.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/canada.png"
    },
    { 
        nome: "Crescimento bacteriano em microgravidade", 
        intacto: false, 
        imagem: "assets/images/bacteriamicro.jpg", 
        descricao: "Este experimento investiga como a microgravidade afeta o crescimento e a resistência de bactérias.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/russia.png"
    },
    { 
        nome: "Fotossíntese em ambientes espaciais", 
        intacto: true, 
        imagem: "assets/images/fotossintese.webp", 
        descricao: "A pesquisa busca entender como o processo de fotossíntese ocorre em microgravidade.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/brasil.png"
    },
    { 
        nome: "Produção de alimentos em colônias espaciais", 
        intacto: false, 
        imagem: "assets/images/agromarte.jpg", 
        descricao: "Este estudo avalia métodos para a produção eficiente de alimentos em ambientes extraterrestres.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/espanha.png"
    },
    { 
        nome: "Efeitos da radiação em DNA humano", 
        intacto: true, 
        imagem: "assets/images/raddna.webp", 
        descricao: "O experimento analisa os danos causados pela radiação espacial no DNA humano.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/alemanha.png"
    },
    { 
        nome: "Desempenho de baterias no vácuo", 
        intacto: false, 
        imagem: "assets/images/bacvacuo.jpg", 
        descricao: "Este estudo avalia como as baterias se comportam quando expostas ao vácuo espacial.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/franca.png"
    },
    { 
        nome: "Estudo de combustão em gravidade zero", 
        intacto: false, 
        imagem: "assets/images/comubst.jpg", 
        descricao: "A pesquisa investiga como a ausência de gravidade influencia os processos de combustão.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/italia.png"
    },
    { 
        nome: "Controle de temperatura em satélites", 
        intacto: true, 
        imagem: "assets/images/satelite.jpg", 
        descricao: "Este experimento testa sistemas de controle térmico para satélites.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/reino_unido.png"
    },
    { 
        nome: "Armazenamento de água em microgravidade", 
        intacto: true, 
        imagem: "assets/images/aguamicro.webp", 
        descricao: "O estudo explora métodos para armazenamento de água em microgravidade.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/eua.png"
    },
    { 
        nome: "Teste de ligas metálicas espaciais", 
        intacto: false, 
        imagem: "assets/images/ligasmetal.jpg", 
        descricao: "Este experimento avalia o desempenho de ligas metálicas para aplicações espaciais.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/japao.png"
    },
    { 
        nome: "Desenvolvimento de tecidos cardíacos no espaço", 
        intacto: true, 
        imagem: "assets/images/tecidocardio.jpg", 
        descricao: "A pesquisa foca na criação e desenvolvimento de tecidos cardíacos em microgravidade.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/canada.png"
    },
    { 
        nome: "Reações químicas fora da atmosfera", 
        intacto: false, 
        imagem: "assets/images/chemistry.jpg", 
        descricao: "Este experimento estuda como diferentes reações químicas ocorrem no ambiente espacial.", 
        passoapasso: [...passoPadrao],
        bandeira: "assets/images/russia.png"
    }
];



const gridContainer = document.querySelector(".grid-container");
const searchInput = document.querySelector("#barraPesquisa");
const pagination = document.querySelector(".pagination");

let filteredExperiments = [...infoexperiments];
let currentPage = 1;
const itemsPerPage = 8;

function setupExperimentClickHandlers() {
    const blocos = document.querySelectorAll('.bloco');
    
    blocos.forEach((bloco, index) => {
        bloco.addEventListener('click', () => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const experimentIndex = startIndex + index;
            
            if (experimentIndex < filteredExperiments.length) {
                const experiment = filteredExperiments[experimentIndex];
                
                localStorage.setItem('selectedExperiment', JSON.stringify(experiment));
                
                window.location.href = 'onclick.html';
            }
        });
    });
}

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
    
    setupExperimentClickHandlers();
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
