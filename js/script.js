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
        descricao: "Este experimento tem como objetivo analisar os efeitos da microgravidade na densidade óssea e muscular dos astronautas que ficam por longos períodos a bordo da ISS. A pesquisa busca entender como a falta de gravidade afeta o corpo humano e quais são as consequências a longo prazo.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Materiais resistentes à radiação espacial", 
        intacto: false, 
        imagem: "assets/images/matresist.jpg", 
        descricao: "Este experimento visa testar e desenvolver novos materiais capazes de resistir aos altos níveis de radiação presentes no espaço. A pesquisa é fundamental para garantir a segurança de equipamentos e astronautas em missões prolongadas." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Comportamento de fluidos em microgravidade", 
        intacto: false, 
        imagem: "assets/images/fluidosmicro.webp", 
        descricao: "O estudo investiga como os fluidos se comportam na ausência de gravidade, focando em aspectos como a tensão superficial e a dinâmica dos líquidos. Esses dados são essenciais para o desenvolvimento de sistemas de suporte à vida e propulsão no espaço.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Microrganismos em ambiente extremo", 
        intacto: true, 
        imagem: "assets/images/microextr.png", 
        descricao: "Este experimento analisa a resistência e adaptação de microrganismos quando expostos às condições extremas do espaço, como radiação e microgravidade, contribuindo para estudos sobre a possibilidade de vida fora da Terra.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Crescimento de plantas em microgravidade", 
        intacto: false, 
        imagem: "assets/images/microplanta.jpg", 
        descricao: "A pesquisa busca compreender como a ausência de gravidade afeta o crescimento, desenvolvimento e reprodução de plantas, sendo fundamental para futuras missões de colonização espacial e produção de alimentos no espaço.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Regeneração de tecidos em microgravidade", 
        intacto: false, 
        imagem: "assets/images/tecidosmicro.jpg", 
        descricao: "Este estudo explora os processos de regeneração e cicatrização de tecidos humanos em ambientes de microgravidade, com o objetivo de melhorar tratamentos médicos tanto no espaço quanto na Terra.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Comunicação por rádio no espaço", 
        intacto: true, 
        imagem: "assets/images/radioespaco.jpg", 
        descricao: "O experimento avalia a eficiência e confiabilidade das comunicações por rádio em ambientes espaciais, essenciais para o controle de missões, comunicação com a Terra e operações entre veículos espaciais.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Cristalização de proteínas em microgravidade", 
        intacto: true, 
        imagem: "assets/images/cristal.jpg", 
        descricao: "O estudo investiga como a microgravidade influencia o processo de cristalização de proteínas, possibilitando a obtenção de cristais mais puros e bem formados, importantes para a pesquisa farmacêutica e biomédica.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Desempenho de células solares em órbita", 
        intacto: true, 
        imagem: "assets/images/celsolar.jpg", 
        descricao: "Este experimento testa a eficiência e durabilidade de células solares no ambiente espacial, onde fatores como radiação e temperatura extrema podem impactar o desempenho desses sistemas de geração de energia.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Isolamento térmico de materiais espaciais", 
        intacto: false, 
        imagem: "assets/images/isolamento.jpg", 
        descricao: "A pesquisa avalia a capacidade de diferentes materiais isolantes de proteger equipamentos e habitats espaciais das extremas variações térmicas que ocorrem no espaço.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Impressão 3D de peças em microgravidade", 
        intacto: true, 
        imagem: "assets/images/impressao.avif", 
        descricao: "O estudo testa a viabilidade e qualidade da impressão 3D no espaço, uma tecnologia essencial para a fabricação de peças sob demanda durante missões espaciais de longa duração.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Eficiência de filtros de ar na ISS", 
        intacto: false, 
        imagem: "assets/images/filtrosar.webp", 
        descricao: "Este experimento analisa a eficiência dos sistemas de filtragem de ar a bordo da ISS, garantindo a qualidade do ar e a segurança respiratória dos astronautas.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Monitoramento cardíaco em astronautas", 
        intacto: true, 
        imagem: "assets/images/cardiaco.png", 
        descricao: "O objetivo deste estudo é monitorar e analisar as alterações no sistema cardiovascular dos astronautas durante missões espaciais, contribuindo para o desenvolvimento de estratégias de prevenção e tratamento de problemas cardíacos.", 
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Crescimento bacteriano em microgravidade", 
        intacto: false, 
        imagem: "assets/images/bacteriamicro.jpg", 
        descricao: "Este experimento investiga como a microgravidade afeta o crescimento e a resistência de bactérias, visando entender os riscos de infecções e a eficácia de tratamentos no espaço." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Fotossíntese em ambientes espaciais", 
        intacto: true, 
        imagem: "assets/images/fotossintese.webp", 
        descricao: "A pesquisa busca entender como o processo de fotossíntese ocorre em ambientes de microgravidade e com diferentes níveis de radiação, sendo fundamental para a produção sustentável de oxigênio e alimentos no espaço." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Produção de alimentos em colônias espaciais", 
        intacto: false, 
        imagem: "assets/images/agromarte.jpg", 
        descricao: "Este estudo avalia métodos e tecnologias para a produção eficiente de alimentos em ambientes extraterrestres, essenciais para a sustentabilidade de colônias espaciais futuras." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Efeitos da radiação em DNA humano", 
        intacto: true, 
        imagem: "assets/images/raddna.webp", 
        descricao: "O experimento analisa os danos causados pela radiação espacial no DNA humano, com o objetivo de desenvolver medidas de proteção para a saúde dos astronautas em missões de longa duração." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Desempenho de baterias no vácuo", 
        intacto: false, 
        imagem: "assets/images/bacvacuo.jpg", 
        descricao: "Este estudo avalia como as baterias se comportam e mantêm sua eficiência quando expostas às condições extremas do vácuo espacial, essenciais para o funcionamento de equipamentos em órbita." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Estudo de combustão em gravidade zero", 
        intacto: false, 
        imagem: "assets/images/comubst.jpg", 
        descricao: "A pesquisa investiga como a ausência de gravidade influencia os processos de combustão, fornecendo dados importantes para o desenvolvimento de sistemas de propulsão e segurança contra incêndios no espaço." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Controle de temperatura em satélites", 
        intacto: true, 
        imagem: "assets/images/satelite.jpg", 
        descricao: "Este experimento testa sistemas de controle térmico para satélites, fundamentais para garantir o funcionamento adequado dos componentes eletrônicos diante das extremas variações de temperatura no espaço." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Armazenamento de água em microgravidade", 
        intacto: true, 
        imagem: "assets/images/aguamicro.webp", 
        descricao: "O estudo explora métodos eficientes e seguros para o armazenamento e distribuição de água em ambientes de microgravidade, essencial para a sobrevivência em missões espaciais prolongadas." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Teste de ligas metálicas espaciais", 
        intacto: false, 
        imagem: "assets/images/ligasmetal.jpg", 
        descricao: "Este experimento avalia o desempenho e a resistência de ligas metálicas desenvolvidas para aplicações espaciais, fundamentais para a construção de estruturas resistentes e leves." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Desenvolvimento de tecidos cardíacos no espaço", 
        intacto: true, 
        imagem: "assets/images/tecidocardio.jpg", 
        descricao: "A pesquisa foca na criação e desenvolvimento de tecidos cardíacos em microgravidade, visando avanços na medicina regenerativa e no entendimento do comportamento celular fora da Terra." ,
        passoapasso: [...passoPadrao]
    },
    { 
        nome: "Reações químicas fora da atmosfera", 
        intacto: false, 
        imagem: "assets/images/chemistry.jpg", 
        descricao: "Este experimento estuda como diferentes reações químicas ocorrem no ambiente espacial, contribuindo para o desenvolvimento de novos materiais e processos industriais aplicáveis em futuras missões." ,
        passoapasso: [...passoPadrao]
    }
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
