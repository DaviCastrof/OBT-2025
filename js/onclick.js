document.addEventListener('DOMContentLoaded', () => {
    const experimentData = JSON.parse(localStorage.getItem('selectedExperiment'));
    
    if (experimentData) {
        const imagemGrande = document.querySelector('.imagemgrande');
        imagemGrande.style.backgroundImage = `url('${experimentData.imagem}')`;
        imagemGrande.style.backgroundSize = 'cover';
        imagemGrande.style.backgroundPosition = 'center';
        
        document.querySelector('.bigtitle').textContent = experimentData.nome;
        
        const statusDiv = document.querySelector('.titulo .avariado');
        if (experimentData.intacto) {
            statusDiv.className = 'intacto';
            statusDiv.innerHTML = `<img class="check" src="assets/images/check.png">intacto`;
        } else {
            statusDiv.className = 'avariado';
            statusDiv.innerHTML = `<img class="cancel" src="assets/images/cancel.png">avariado`;
        }
        
        const flagImg = document.querySelector('.flag');
        flagImg.src = experimentData.bandeira;
        flagImg.alt = `Bandeira do país de origem do experimento ${experimentData.nome}`;
        
        document.querySelector('.descricao p:last-child').textContent = experimentData.descricao;
        
        const passosDiv = document.querySelector('.passoapasso');
        while (passosDiv.children.length > 1) {
            passosDiv.removeChild(passosDiv.lastChild);
        }
        
        experimentData.passoapasso.forEach(passo => {
            const div = document.createElement('div');
            div.className = 'lista';
            div.innerHTML = `
                <input type="checkbox" id="passo-${passosDiv.children.length}"/>
                <label for="passo-${passosDiv.children.length}">${passo}</label>
            `;
            passosDiv.appendChild(div);
        });
    }
    
    const searchInput = document.querySelector("#barraPesquisa");
    
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
    });
});